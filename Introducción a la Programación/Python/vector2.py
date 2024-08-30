#Dado el siguiente arreglo de números:
#[1, 5, 8, 3, 30, 9, 13]
#Imprimir en pantalla programáticamente los números impares mayores a 3.

#Solución
import os
os.system('cls')

A =[1, 5, 8, 3, 30, 9, 13]
B = []
for i in A:
    if(i > 3 and i % 2 != 0):
        B.append(i)
print('El nuevo arreglo:',B)