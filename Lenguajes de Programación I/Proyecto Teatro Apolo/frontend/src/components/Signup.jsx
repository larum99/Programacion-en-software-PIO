import React, { useState } from "react";
import axiosInstance from "../api/axios";

function Signup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        idDocument: "Cédula de Ciudadanía",
        idNumber: "",
        birthDate: "",
        phoneNumber: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
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
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            await axiosInstance.post("/users/register", formData);
            setSuccess("¡Usuario registrado exitosamente!");
            setFormData({
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                idDocument: "Cédula de Ciudadanía",
                idNumber: "",
                birthDate: "",
                phoneNumber: "",
            });
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar usuario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-primary-extraLight rounded-lg p-6 w-[90%] max-w-sm  overflow-y-auto max-h-[90vh] relative">
                <h2 className="text-xl font-semibold text-secondary text-center mb-4">Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-white">
                            Nombres
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-white">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none"
                        />
                    </div>
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
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight  rounded-md focus:outline-none"
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
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight  rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idDocument" className="block text-sm font-medium text-white">
                            Tipo de Documento
                        </label>
                        <select
                            id="idDocument"
                            name="idDocument"
                            value={formData.idDocument}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none"
                        >
                            <option>Cédula de Ciudadanía</option>
                            <option>Pasaporte</option>
                            <option>Tarjeta de Identidad</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idNumber" className="block text-sm font-medium text-white">
                            Número de Documento
                        </label>
                        <input
                            type="text"
                            id="idNumber"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight  rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthDate" className="block text-sm font-medium text-white">
                            Fecha de Nacimiento
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
                            Número de Celular
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-primary bg-primary-light text-textLight  rounded-md focus:outline-none"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
                    {success && <p className="text-sm text-green-500 mb-2">{success}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-secondary px-4 py-2 text-primary-light font-semibold rounded-md hover:bg-secondary-dark transition-colors"
                            disabled={loading}
                        >
                            {loading ? "Cargando..." : "Registrarse"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-sm text-textLight hover:underline"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

