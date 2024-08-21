lado1 = int(input('Lado 1: '))
lado2 = int(input('Lado 2: '))
lado3 = int(input('Lado 3: '))

if((lado1 != lado2) and (lado2 != lado3) and (lado1 != lado3)):
    print('El triángulo es ESCALENO')
elif((lado1 == lado2) and (lado2 == lado3)):
    print('El triángulo es EQUILATERO')
else:
    print('El triángulo es ISOSCELES')
    