Algoritmo odd_and_even_sum
	Definir i, n, oddsum, evensum Como Entero
	oddsum = 0
	evensum = 0
	Escribir "Enter a number: "
	Leer n
	Para i = 1 Hasta n Hacer
		Si (i mod 2 = 0) Entonces
			evensum = evensum + i
		SiNo
			oddsum = oddsum + i
		FinSi
	FinPara
	Escribir "The sum of odd is: ", oddsum
	Escribir "The sum of even is: ", evensum

FinAlgoritmo
