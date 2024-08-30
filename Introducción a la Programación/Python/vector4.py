#Dada las siguientes notas almacenadas en un arreglo:
#[20, 15, 12, 11, 8, 4, 1]
#Elimine la nota más baja programáticamente sin usar la función (min) y escriba en pantalla. 
#Luego programáticamente calcule el promedio de notas descontando la nota eliminada.

import os
os.system('cls')
array=[20, 15, 12, 11, 8, 4, 1]
maximo = 20
minimo = maximo
for i in array:
    if(i < minimo):
        minimo = i
print('La nota más baja:',minimo)

array.remove(minimo)
print(array)
suma = 0
for j in array:
    suma += j
print(suma)
print('Promedio:',round(suma/len(array),2))