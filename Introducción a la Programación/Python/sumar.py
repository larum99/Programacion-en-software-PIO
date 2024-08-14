#Sumar dos números 

#entrada
""" 
a = input("Digite el primer numero: ")
b = input("Digite el primer numero: ")

"""

a = int(input("\nDigite el primer numero: "))
b = int(input("Digite el primer numero: "))
suma = 0
multiplicacion = 1
division = a

#proceso

c = a + b
d = a - b
e = a * b
f = a % b
g = a / b
h = a // b
i = a ** b

#asignaciones
# a = a + b
suma += a + b
multiplicacion *= a * b
division /= b

#salida
print("\nEl resultado de la suma es: ", c, type(c),
    "\nEl resultado de la resta es: ", d, type(d),
    "\nEl resultado de la multiplicación es: ", e, type(e),
    "\nEl resultado del módulo es: ", (f),
    f"\nEl resultado de la división real es: {g}",
    "\nEl resultado de la división entera es: ", h,
    f"\nEl resultado de la potencia es: {i}",
    f"\nEl resultado de la asignación suma es: {suma}",
    f"\nEl resultado de la asignación multiplicación es: {multiplicacion}",
    f"\nEl resultado de la asignación division es: {division} \n")