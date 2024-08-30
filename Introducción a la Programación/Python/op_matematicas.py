# Haga un programa que realice un menú principal y realice las operaciones matemáticas básicas 
# y complejas(potenciación, radicación, ecuación de primer grado).
import math, os

def suma(num1, num2):
    return num1 + num2

def resta(num1, num2):
    return num1 - num2

def multiplicacion(num1, num2):
    return num1 * num2

def division(num1, num2):
    try:
        return num1 / num2
    except ZeroDivisionError:
        return 'No se puede dividir'
    
def potencia(x,y):
    return x ** y

def raiz(x,y):
    return math.pow(x, 1/y)

def ecuacion_1(x,y):
    try:
        return -y / x
    except ZeroDivisionError:
        return 'es inexistente'

def menu():
    os.system('cls')
    print('Menú principal')
    print('1 - SUMA')
    print('2 - RESTA')
    print('3 - MULTIPLICACIÓN')
    print('4 - DIVISIÓN')
    print('5 - POTENCIA')
    print('6 - RAÍZ')
    print('7 - ECUACIÓN DE PRIMER GRADO')
    print('8 - SALIR')
    
#Programa principal
while True:
    menu()
    opc = int(input('Escoja la opción: '))
    if(opc == 1):
        os.system('cls')
        a = int(input('Número 1: '))
        b = int(input('Número 2: '))
        print('La suma es: ',suma(a,b))
        input('Presione <ENTER> para continuar')
    elif(opc == 2):
        os.system('cls')
        a = int(input('Número 1: '))
        b = int(input('Número 2: '))
        print('La resta es: ',resta(a,b))
        input('Presione <ENTER> para continuar')
    elif(opc == 3):
        os.system('cls')
        a = int(input('Número 1: '))
        b = int(input('Número 2: '))
        print('La multiplicación es: ',multiplicacion(a,b))
        input('Presione <ENTER> para continuar')
    elif(opc == 4):
        os.system('cls')
        a = int(input('Número 1: '))
        b = int(input('Número 2: '))
        print('La división es: ',division(a,b))
        input('Presione <ENTER> para continuar')        
    elif(opc == 5):
        os.system('cls')
        print('Potencia de un número')
        a = int(input('Base: '))
        b = int(input('Exponente: '))
        print('La potencia es: ',potencia(a,b))
        input('Presione <ENTER> para continuar') 
    elif(opc == 6):
        os.system('cls')
        print('Raíz de un número')
        a = float(input('Radicando: '))
        b = float(input('Indice: '))
        print('La raíz es: ',raiz(a,b))
        input('Presione <ENTER> para continuar') 
    elif(opc == 7):
        os.system('cls')
        print('Ecuación de primer grado AX + B = 0')
        a = float(input('A: '))
        b = float(input('B: '))
        print('La ecuación es, X=',ecuacion_1(a,b))
        input('Presione <ENTER> para continuar')                
    elif(opc == 8):
        os.system('cls')
        print('Gracias por su atención')
        break
    else:
        print('Opción incorrecta, intente de nuevo')
        input('Presione <ENTER> para continuar')
