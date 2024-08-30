#Solicitar al usuario que ingrese su dirección email. Imprimir un mensaje indicando si la dirección 
#es válida o no, valiéndose de una función para decidirlo. Una dirección se considerará válida si 
#contiene el símbolo "@".
import os

def validar(email):
    simbolo = '@'
    #correoValido = False
    for i in email:
        if (i == simbolo):
            return True
    return False

os.system('cls')
correo = input('Ingrese su correo electrónico: ')
if validar(correo):
    print('Dirección de correo válida')
else:
    print('Dirección de correo no válida')