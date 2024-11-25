import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { HiFilm, HiHome, HiSearch, HiUserCircle, HiMenu } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import Signin from './Signin'
import Signup from './Signup';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const menu = [
    { name: 'INICIO', icon: HiHome },
    { name: 'CARTELERA', icon: HiFilm },
    { name: 'BUSCAR', icon: HiSearch },
  ];

  const handleOpenSignin = () => {
    setShowSignin(true);
    setShowSignup(false);
  };

  const handleOpenSignup = () => {
    setShowSignin(false);
    setShowSignup(true);
  };

  return (
    <>
      {/* Barra superior */}
      <div className="flex items-center justify-between py-4 px-6 bg-primary-color text-white">
        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl"
          >
            <HiMenu />
          </button>
        </div>

        {/* Logo y Nombre */}
        <div className="flex items-center gap-4">
          <img src={logo} className="w-[50px] md:w-[60px] object-cover" alt="Logo" />
          <h1 className="text-xl md:text-2xl font-bold text-center">Teatro Apolo</h1>
        </div>

        {/* Menú horizontal para pantallas grandes */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Botón de iniciar sesión */}
        <div className="flex items-center">
          <button
            onClick={handleOpenSignin}
            className="text-2xl hover:text-secondary-dark transition-colors duration-200">
            <HiUserCircle />
          </button>
        </div>
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary-color-light text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        {/* Botón para cerrar el menú */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✖
        </button>

        {/* Contenido del menú lateral */}
        <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white hover:text-secondary transition-colors duration-200 cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-8 w-8 mb-2" />
              <span className="text-sm font-semibold">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Inicio de sesión */}
      <Signin
        isOpen={showSignin}
        onClose={() => setShowSignin(false)}
        onRegisterClick={handleOpenSignup}
      />

      {/*Registro */}
      <Signup
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
      />
    </>
  );
}

export default Header;
