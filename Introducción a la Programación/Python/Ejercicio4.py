# S=(A+B+C)/2
# A=raiz(S*(S-A)*(S-B)*(S-C))
import math

a = float(input('Lado A: '))
b = float(input('Lado B: '))
c = float(input('Lado C: '))

s = (a+b+c)/2
area = math.sqrt(s*(s-a)*(s-b)*(s-c))

print('Semiperimetro: ',s)
print('Area: ',area)