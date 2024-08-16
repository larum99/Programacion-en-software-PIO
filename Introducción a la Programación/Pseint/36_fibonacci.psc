Algoritmo Fibonacci
	Definir i, n, a, b, tmp Como Entero
	Escribir "Terms of the succession: " 
	Leer n
	a = 0 
	b = 1
	Escribir a
	Escribir b
	Para i = 1 Hasta n Hacer
		tmp = a + b
		Escribir tmp
		a = b
		tmp = b
	FinPara
FinAlgoritmo
