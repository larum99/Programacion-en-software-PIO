#Dado un vector de 10 posiciones, cree un algoritmo que lea y escriba cada uno de sus elementos.
import os

def vector():
    i = 10
    v = []
    while(i > 0):
        j = int(input('Numero: '))
        v.append(j)
        i-=1
    return(v)

#Programa principal
os.system('cls')
print(vector())