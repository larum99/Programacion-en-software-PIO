//Para tributar un determinado impuesto debe ser mayor de 18 años y tener 
//ingresos mensuales $1'700.000 o más. Escribir un programa que pregunte 
//usuario nombre, edad, ingresos y muestre si debe tributar o no

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
		Escribir name, " Debe tributar"
	SiNo
		Escribir name, " No debe tributar"
	FinSi
	
FinAlgoritmo
