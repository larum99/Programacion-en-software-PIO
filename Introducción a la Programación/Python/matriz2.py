#Vamos a escribir un funcion matriz que llene una matriz de 5 filas y 10 columnas con números 
#enteros entre 1 y 100 aleatorios, imprima los valores máximo y mínimo y sus posiciones dentro 
#de la matriz.

import random

n = int(input('Filas: '))
m = int(input('Columnas: '))
Matriz = []
for i in range(n):
    Matriz.append([0]*m)

minimo = 10
maximo = 99
vmin = maximo
vmax = minimo

for i in range(n):
    for j in range(m):
        Matriz[i][j] = random.randint(minimo, maximo)
        if(Matriz[i][j] < vmin):
            vmin = Matriz[i][j]
            posmin = (i+1, j+1)
        if(Matriz[i][j] > vmax):
            vmax = Matriz[i][j]
            posmax = (i+1, j+1)
print()
print(f'El mayor {vmax} está en la posición {posmax} y el menor {vmin} está en la posición {posmin}')
print()

for i in Matriz:
    print(i)