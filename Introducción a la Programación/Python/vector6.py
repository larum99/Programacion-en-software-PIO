#Dado una lista de N posiciones, calcular la suma de todos sus elementos.

def lista():
    i = 6
    v = []
    while (i > 0):
        j = int(input('Número: '))
        v.append(j)
        i-=1
    suma = 0
    for i in range(len(v)):
        suma += v[i]
    print(suma)
    return(v)

print(lista())