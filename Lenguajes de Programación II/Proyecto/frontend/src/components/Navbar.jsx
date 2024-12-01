'use client'; // Necesario para usar hooks en Next.js

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation"; // Para redirigir después de logout

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Comprobar si el usuario está logueado revisando el token en localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/'); // Redirigir al inicio después de cerrar sesión
  };

  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            {/* Imagen como logo */}
            <Image
              src="/logo.png"
              alt="Teatro Apolo Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <span className="px-4 text-xl font-bold">Teatro Apolo</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-secondary">
              Cartelera
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Icono de login/logout */}
        <a
          href={isLoggedIn ? "#" : "/login"}
          onClick={isLoggedIn ? handleLogout : null}
          className="flex items-center gap-2 text-secondary-color hover:text-secondary-color-dark transition duration-200"
        >
          {isLoggedIn ? (
            <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
          ) : (
            <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
          )}
          <span className="hidden sm:inline">{isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}</span>
        </a>
      </div>
    </nav>
  );
}
