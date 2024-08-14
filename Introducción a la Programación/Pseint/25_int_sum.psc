//Write a program that reads a positive number n and then displays 
//the sum of integers from 1 to n.
// Suma = (n + 1) / 2

Algoritmo sin_titulo
	
	Definir n, Sum Como Real
	Escribir "Enter n: "
	Leer n
	
	Si (n > 0) Entonces
		Sum = n * (n + 1) / 2
		Escribir "The total sum is: ", sum
	SiNo
		Escribir "Enter a positive number"
	FinSi
	
FinAlgoritmo
