#Ejercicio para llenar una matriz
print('Matriz A')
n = int(input('Filas: '))
m = int(input('Columnas: '))
Matriz = []
for i in range(n):
    Matriz.append([0]*m)
    print(Matriz[i])

print('Matriz B')
n = int(input('Filas: '))
m = int(input('Columnas: '))
Matriz = []
for i in range(n):
    Matriz.append([0]*m)

for i in range(n):
    for j in range(m):
        Matriz[i][j] = int(input('Matriz {%d}{%d}: '%(i, j)))

for i in range(n):
    for j in range(m):
        print(Matriz[i][j],end='')
    print('\n')
