#Crea dos arrays o arreglos unidimensionales que tengan el mismo tamaño (lo pedirá por teclado), 
# en uno de ellos almacenarás nombres de personas como cadenas, en el otro array o arreglo 
# ira almacenando la longitud de los nombres.

import os
os.system('cls')

A = int(input('Ingrese el tamaño de los arrays: '))
B = []
C = []
for i in range(0,A):
    B.append(input('Ingrese el nombre de la persona: '))
print(B)
for j in range(0,A):
    C.append(len(B[j]))
print(C)

