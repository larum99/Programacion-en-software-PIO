weigth = float(input('Enter the weigth (kg): '))
height = float(input('Enter the height (m): '))

# Calcula el IMC y redondea el resultado
imc = round(weigth / (height ** 2), 2)

print(f'Tu IMC es: {imc}')