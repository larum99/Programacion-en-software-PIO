//Write a program that requests two numbers and shows if 
//one is multiple of the other

Funcion IsMultiple <- num_Multiple ( a,b )
	Definir m Como Logico
	Si (a MOD b = 0) Entonces
		m = Verdadero
	SiNo
		m = Falso
	FinSi
	isMultiple = m
Fin Funcion




Algoritmo CalculateMultiple
	Definir num1, num2 como entero
	Escribir Sin Saltar "Number 1: "
	Leer num1 
	Escribir Sin Saltar "Number 2: "
	Leer num2
	Si (num_Multiple(num1, num2)) Entonces
		Escribir num1, " is multiple of ", num2
	SiNo
		Escribir num1, " is not multiple of ", num2
	FinSi
	
FinAlgoritmo
