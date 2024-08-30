#Crea un array o arreglo unidimensional donde le indiques el tamaño por teclado y crear una 
# función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. 
# Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 
# 3, 6, 9, 12, 15. Muestralos por pantalla usando otra función distinta.

#Solución
import os
os.system('cls')

n = int(input("Tamaño del array: "))
m = int(input("Ingrese el múltiplo: "))
Multiplos = []
for i in range(1, n+1):
    Multiplos.append(i * m)
print('El arreglo con los múltiplos: ',Multiplos)