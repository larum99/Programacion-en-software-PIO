# Ecuación de segundo grado
# x = -b +- raiz(b^2 - (4*a*c))/ 2*a, a <> 0, det = b^2 - 4*a*c > 0
import math

a = float(input('A: '))
b = float(input('B: '))
c = float(input('C: '))
 
det = math.pow(b,2) - (4*a*c)

if((a != 0) and (det > 0)):
    x1 = -b + math.sqrt(det) / (2 * a)
    x2 = -a - math.sqrt(det) / (2 * a)
    print('X1 = ',round(x1,3))
    print('X2 = ',round(x2,3))
else:
    print('La ecuación no existe')
