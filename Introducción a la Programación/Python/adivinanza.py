import random
import os

def menu():
    os.system('clear')
    print('Menú principal')
    print()
    print('1. Adivinanza')
    print('2. Cerrar sesión')
    
#Programa principal

#Mostramos el menú
while True:
    menu()
    
    #solicitamos una opción al usuario
    opc = int(input('Elija una opción: '))
    if (opc == 1):
        print()
        print('¡Adivina un número del 1 al 10!')
        
        numero = random.randint(1,10)
        intentos = 0
        jugando = True
        
        while jugando:
            intentos +=1
            eleccion = int(input('Dime un número: '))
            if eleccion == numero:
                print('¡Adivinaste el número en',intentos,'intentos!')
                jugando = False
            elif eleccion > numero:
                print('Te pasaste',intentos,'intentos!')
            else:
                print('Estas fuera del intervalo')
                jugando = False
    elif (opc == 2):
        print('FIN')
        break
    else:
        print('Error')
        input('\nPresione <ENTER> para continuar')
    