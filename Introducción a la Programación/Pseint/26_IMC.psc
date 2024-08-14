// Write a program that calculates BMI by entering weight and height
// The result should be rounded off by two decimals
Algoritmo sin_titulo
	Definir weight, height, IMC Como Real
	
	Escribir "Enter the weight(Kg): "
	Leer weight
	Escribir "Enter the heigth(m): "
	Leer height
	
	IMC = redon(weight / (height ^ 2) * 100) / 100
	
	Escribir "The IMC is: ", IMC
FinAlgoritmo
