'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieHeader from '@/components/MovieHeader';
import MovieDetails from '@/components/MovieDetails';
import MovieTrailer from '@/components/MovieTrailer';
import SelectRoomLink from '@/components/SelectRoomLink';
import SelectRoomGrid from '@/components/SelectRoomGrid';

const SelectRoom = ({ params }) => {
    const { id } = React.use(params); // Obtiene el ID de los parámetros de la ruta

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (!id) return;

            try {
                // Llamada a la API de TMDB para obtener los detalles de la película
                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                        language: 'es-ES',
                    },
                });
                setMovie(movieResponse.data);
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="p-6 bg-primary-light">
            <MovieHeader title={movie?.title} />
            <div className="flex flex-col lg:flex-row gap-6 m-6 items-center">
                {movie ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-72 h-auto max-h-[450px] rounded-lg object-cover"
                        />
                ) : (
                    <p className="text-white">Cargando información de la película...</p>
                )}
                <SelectRoomGrid />
            </div>
            
            
        </div>
    );
};

export default SelectRoom;
