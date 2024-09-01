import os
import pickle

# Archivo principal donde se guardan las salas
ARCHIVO_SALAS = 'salas.pkl'

def guardar_datos(salas):
    with open(ARCHIVO_SALAS, 'wb') as file:
        pickle.dump(salas, file)

def cargar_datos():
    if os.path.exists(ARCHIVO_SALAS):
        with open(ARCHIVO_SALAS, 'rb') as file:
            return pickle.load(file)
    return {}

def crear_sala():
    salas = cargar_datos()
    nombre_sala = input("Ingrese el nombre de la sala: ")
    filas = int(input("Ingrese el número de filas: "))
    columnas = int(input("Ingrese el número de columnas: "))
    
    # Crear una matriz para la sala con números secuenciales
    numero_asiento = 1
    sala = []
    for _ in range(filas):
        fila = []
        for _ in range(columnas):
            fila.append(str(numero_asiento).zfill(3))  # Asientos numerados, relleno con ceros
            numero_asiento += 1
        sala.append(fila)
    
    salas[nombre_sala] = sala
    guardar_datos(salas)
    print(f"Sala '{nombre_sala}' creada exitosamente.")

def ver_sala():
    salas = cargar_datos()
    nombre_sala = input("Ingrese el nombre de la sala que desea ver: ")
    
    if nombre_sala in salas:
        sala = salas[nombre_sala]
        for fila in sala:
            print(' '.join(fila))
    else:
        print("Sala no encontrada.")

def asignar_puesto():
    salas = cargar_datos()
    nombre_sala = input("Ingrese el nombre de la sala: ")
    
    if nombre_sala in salas:
        sala = salas[nombre_sala]
        numero_asiento = input("Ingrese el número de asiento que desea reservar: ").zfill(3)
        
        reservado = False
        for fila in sala:
            for i in range(len(fila)):
                if fila[i] == numero_asiento:
                    fila[i] = "XXX"  # Reemplaza el número por un texto fijo de longitud constante
                    reservado = True
                    break
            if reservado:
                break
        
        if reservado:
            guardar_datos(salas)
            print(f"Puesto {numero_asiento} reservado exitosamente.")
        else:
            print("El puesto no está disponible o ya ha sido reservado.")
    else:
        print("Sala no encontrada.")

def guardar_sala_externamente():
    salas = cargar_datos()
    nombre_sala = input("Ingrese el nombre de la sala que desea guardar: ")
    
    if nombre_sala in salas:
        nombre_archivo = input("Ingrese el nombre del archivo donde desea guardar la sala: ")
        
        with open(nombre_archivo, 'wb') as file:
            pickle.dump(salas[nombre_sala], file)
        
        print(f"Sala '{nombre_sala}' guardada en '{nombre_archivo}' exitosamente.")
    else:
        print("Sala no encontrada.")

def menu():
    os.system('cls' if os.name == 'nt' else 'clear')
    print('Menú principal')
    print('1. Crear sala')
    print('2. Ver sala')
    print('3. Asignar puesto')
    print('4. Guardar sala en archivo externo')
    print('5. Salir')

def main():
    while True:
        menu()
        opcion = int(input('Escoja la opción: '))
        
        if opcion == 1:
            os.system('cls' if os.name == 'nt' else 'clear')
            crear_sala()
            input('\nPresione <ENTER> para continuar')
        
        elif opcion == 2:
            os.system('cls' if os.name == 'nt' else 'clear')
            ver_sala()
            input('\nPresione <ENTER> para continuar')

        elif opcion == 3:
            os.system('cls' if os.name == 'nt' else 'clear')
            asignar_puesto()
            input('\nPresione <ENTER> para continuar')

        elif opcion == 4:
            os.system('cls' if os.name == 'nt' else 'clear')
            guardar_sala_externamente()
            input('\nPresione <ENTER> para continuar')

        elif opcion == 5:
            print("Saliendo del programa...")
            break
        
        else:
            print('Opción incorrecta, intente de nuevo')
            input('Presione <ENTER> para continuar')

if __name__ == "__main__":
    main()
