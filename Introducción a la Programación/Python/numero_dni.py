#Escribir una función que, dado un número de DNI, retorne True si el número es válido y False 
#si no lo es. Para que un número de DNI sea válido debe tener entre 7 y 8 dígitos.

#Solución
import os

def validarDNI(dni):
    cant = 0
    while dni != 0:
        cant += 1
        dni = dni // 10 
    return (cant == 7 or cant == 8)

os.system('cls')
cedula = int(input('Digite su cédula: '))
if validarDNI(cedula):
    print('Es válido el documento')
else:
    print('No es válido el documento')