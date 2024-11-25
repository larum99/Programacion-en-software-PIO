import React, { useState } from 'react';
import axiosInstance from '../api/axios';
import Signup from './Signup'

function Signin({ isOpen, onClose, onRegisterClick }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Usa axiosInstance para la solicitud al backend
            const response = await axiosInstance.post('/users/login', formData);
            
            // Guardar token en el almacenamiento local si es exitoso
            localStorage.setItem('token', response.data.token);
            alert("Inicio de sesión exitoso");
            onClose(); // Cerrar el modal
        } catch (err) {
            setError(err.response?.data?.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-primary-extraLight rounded-lg p-6 w-[90%] max-w-sm relative">
                <h2 className="text-xl font-semibold text-secondary text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary
                            bg-primary-light text-textLight rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-secondary px-4 py-2 text-primary-light font-semibold rounded-md hover:bg-secondary-dark transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Cargando...' : 'Ingresar'}
                        </button>
                        <button
                            type="button"
                            onClick={onRegisterClick} // Al hacer clic, abre Signup
                            className="text-sm text-textLight hover:underline"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    ✖
                </button>
            </div>
        </div>
    );
}

export default Signin;
