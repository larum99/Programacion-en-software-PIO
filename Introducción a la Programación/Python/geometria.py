# Escribir una función que calcule el área de un círculo y otra que calcule el volumen 
# de un cilindro usando la primera función.

# AC = PI * radio ^ 2
# VC = AC(radio) * altura

import math, os

def area_circulo(r):
    area = math.pi * (r ** 2)
    return area

def volumen_cilindro(r, h):
    vol = area_circulo(r) * h
    return vol

os.system('cls')
radio = float(input('Radio: '))
altura = float(input('Altura: '))

print('El area del cículo es: ',area_circulo(radio))
print('El volumen del cilindro es: ',round(volumen_cilindro(radio, altura),3))