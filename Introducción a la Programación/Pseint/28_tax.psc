//To tax a certain tax you must be over 18 and have 
//monthly income of $1,700,000 or more. Write a program 
//that asks user name, age, income and shows whether or not to tax

Algoritmo sin_titulo
	
	Definir age, monthly_income Como Real
	Definir name Como Caracter
	
	Escribir "Name: "
	Leer name
	Escribir "Age: "
	Leer age
	Escribir "Monthly income: "
	Leer monthly_income
	
	Si ((age >= 18) y (monthly_income >= 1700000)) Entonces
		Escribir name, " Should tax"
	SiNo
		Escribir name, " Shoul not tax"
	FinSi
	
FinAlgoritmo
