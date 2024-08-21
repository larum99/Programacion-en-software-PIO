//write a program that shows the sum of 3 multiples found between 0 and 100

Algoritmo sum_of_multiple
	Definir i, total Como Entero
	total = 0
	Para i = 1 Hasta 100 Hacer
		Si (i mod 3 = 0) Entonces
			total = total + i
		FinSi
	FinPara
	Escribir "The sum of 3 mutiple is: ", total
FinAlgoritmo
