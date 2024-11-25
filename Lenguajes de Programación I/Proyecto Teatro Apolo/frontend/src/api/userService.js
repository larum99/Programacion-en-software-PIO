import axiosInstance from "./axios";

// Registro de un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error al registrar usuario" };
  }
};

// Inicio de sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error al iniciar sesión" };
  }
};

// Obtener todos los usuarios (solo como ejemplo)
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error al obtener usuarios" };
  }
};
