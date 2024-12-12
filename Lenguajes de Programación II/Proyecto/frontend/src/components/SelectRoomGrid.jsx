'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SelectRoomGrid = () => {
    const [rooms, setRooms] = useState([]);  // Guardará las salas
    const [selectedRoom, setSelectedRoom] = useState(null);  // Sala seleccionada
    const [isClient, setIsClient] = useState(false);  // Verifica si estamos en el cliente
    const router = useRouter();

    useEffect(() => {
        // Solo ejecutar en el cliente
        setIsClient(true);

        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:4200/rooms');
                setRooms(response.data);  // Guardar las salas obtenidas
            } catch (error) {
                console.error("Error al obtener las salas:", error);
            }
        };

        fetchRooms();  // Llamar a la API para obtener las salas
    }, []);  // Ejecutar una sola vez al montar el componente

    // Maneja la selección de la sala
    const handleRoomSelect = (roomId) => {
        setSelectedRoom(roomId);
        router.push(`/select-seat/${roomId}`);  // Redirigir a la página de selección de asientos
    };

    // Solo renderizar en el cliente
    if (!isClient) {
        return null;  // No renderizar en el servidor
    }

    return (
        <div className="p-6 bg-primary-light">
            <h2 className="text-2xl font-bold text-textLight mb-6 ">Selecciona una Sala</h2>
            <div className="grid grid-cols-4 gap-6">
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <div
                            key={room._id}
                            className={'p-4 rounded-lg border cursor-pointer hover:scale-105 transition-all'}
                            onClick={() => handleRoomSelect(room._id)}
                        >
                            <h3 className="text-xl font-bold text-secondary-dark">{room.name}</h3>
                            <p>Capacidad: {room.capacity} personas</p>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Cargando salas...</p>
                )}
            </div>
        </div>
    );
};

export default SelectRoomGrid;
