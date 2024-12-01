"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // Guardar el token en el localStorage o en el estado global
      localStorage.setItem("token", response.data.token);

      // Redirigir al usuario después de iniciar sesión
      router.push("/movies"); // O cualquier página que quieras redirigir
    } catch (error) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6">Iniciar sesión</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-200"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
