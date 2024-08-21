# Escribir un programa que pida al usuario dos números y muestre por pantalla su división. 
# Si el divisor es cero el programa debe mostrar un error.

a = float(input('Dividendo: '))
b = float(input('Divisor: '))

if(b == 0):
    print('La división es indeterminada')
else:
    division = a / b
    print('La división es: ',division)