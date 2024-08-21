//read n numbers and show how many are negative, positive and neutral

Algoritmo Quantity_of_numbers
	Definir count_positive, count_negative, count_neutral, i, n, num Como Entero
	count_positive = 0
	count_negative = 0
	count_neutral = 0
	
	Escribir "Quantity of numbers: "
	Leer n
	
	Para i = 1 hasta n Hacer
		Escribir "Enter number: "
		Leer num
		Si (num = 0) Entonces
			count_neutral = count_neutral + 1
		SiNo
			Si (num > 0) Entonces
				count_positive = count_positive + 1
			SiNo
				count_negative = count_negative + 1
			FinSi
		FinSi
	FinPara
	
	Escribir "Quantity of positive numbers: ", count_positive
	Escribir "Quantity of negative numbers: ", count_negative
	Escribir "Quantity of neutral numbers: ", count_neutral
FinAlgoritmo
