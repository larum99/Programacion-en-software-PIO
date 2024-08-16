//Write a program that allows the user to type 6 negative or positive 
//integer numbers. Show sum of negatives and average of positives
Algoritmo sin_titulo
	Definir Pos_sum, Neg_sum, count_pos, i, num Como Entero
	Definir average_pos Como Real
	Pos_sum = 0
	Neg_sum = 0
	count_pos = 0
	
	Para i = 1 Hasta 6 Hacer
		Escribir "Enter the integer number: "
		Leer num 
		Si (num > 0) Entonces
			Pos_sum = Pos_sum + num
			count_pos = count_pos + 1
		SiNo
			Neg_sum = Neg_sum + 1
		FinSi
	FinPara
	Escribir "The sum of negative numbers is: ", Neg_sum
	Si (count_pos <> 0) Entonces
		average_pos = Pos_sum / count_pos
		Escribir "The average of positive numbers is: ", average_pos
	SiNo
		Escribir "No positive numbers were entered"
	FinSi
	
FinAlgoritmo
