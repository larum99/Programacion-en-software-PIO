//SubAlgorithm  

Funcion Retornar_numero <- Factorial ( num )
	Definir i, tmp Como Entero
	tmp = 1
	Para i = 1 Hasta num Hacer
		tmp = tmp * 1		
	FinPara
	Retornar_numero <- tmp
Fin Funcion


Algoritmo number_Factorial
	Definir n Como Entero
	Escribir "Enter a number: "
	Leer n
	Escribir "The factorial number is: ", Factorial(n)
FinAlgoritmo
