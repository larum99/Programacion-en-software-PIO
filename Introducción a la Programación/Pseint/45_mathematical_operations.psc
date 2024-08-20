//write a program that performs a main menu and perform 
//basic and complex mathematical operations 

Funcion total_sum <- Sum ( num1, num2 )
	Definir add Como Real
	add = num1 + num2
	total_sum = add
Fin Funcion

Funcion total_subs <- Subs ( num1, num2 )
	Definir substraction Como Real
	substraction = num1 - num2
	total_subs = substraction
Fin Funcion

Funcion total_multiplication <- multiplicate ( num1, num2 )
	Definir multiplication Como Real
	multiplication = num1 * num2
	total_multiplication = multiplication
Fin Funcion

Funcion total_division <- divide ( num1, num2 )
	Definir division Como Real
	division = num1 / num2
	total_division = division
Fin Funcion

Funcion total_exponentation <- exponentation ( a, b )
	Definir expo Como Real
	expo = a ^ b
	total_exponentation = expo
Fin Funcion

Funcion total_roots <- root ( a, b )
	Definir roots Como Real
	roots = a ^ (1/b)
	total_roots = roots
Fin Funcion

Funcion total_linear_equation <- linear_equation ( a, b )
	Definir x Como Real
	Si (a <> 0) Entonces
		x = -b / a
	SiNo
		Escribir "INDETERMINADO"
	FinSi
	total_linear_equation = x
Fin Funcion

Algoritmo mathematical_operations
	Definir num_1, num_2, option Como Entero
	Definir answer Como Caracter
	Repetir
		Limpiar Pantalla
		Escribir "Main menu"
		Escribir "1 - Sum"
		Escribir "2 - Substraction"
		Escribir "3 - Multiplicatiom"
		Escribir "4 - Division"
		Escribir "5 - Exponentation"
		Escribir "6 - Roots"
		Escribir "7 - Linear Equation"
		Escribir "8 - Exit"
		Escribir Sin Saltar "Choose the option"
		Leer option
		Segun option Hacer
			1:
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Number 1"
					Leer num_1
					Escribir Sin Saltar "Number 2"
					Leer num_2
					Escribir "The result of the sum is: ", Sum(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			2:
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Number 1"
					Leer num_1
					Escribir Sin Saltar "Number 2"
					Leer num_2
					Escribir "The result of the substraction is: ", Subs(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			3:
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Number 1"
					Leer num_1
					Escribir Sin Saltar "Number 2"
					Leer num_2
					Escribir "The result of the multiplication is: ", multiplicate(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			4: 
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Number 1"
					Leer num_1
					Escribir Sin Saltar "Number 2"
					Leer num_2
					Escribir "The result of the division is: ", divide(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			5: 
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Base"
					Leer num_1
					Escribir Sin Saltar "Exponent"
					Leer num_2
					Escribir "The result of the exponentation is: ", exponentation(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			6:
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "Radicand"
					Leer num_1
					Escribir Sin Saltar "Index"
					Leer num_2
					Escribir "The result of the roots is: ", root(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			7:
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar "A"
					Leer num_1
					Escribir Sin Saltar "B"
					Leer num_2
					Escribir "The result of the linear equation is: ", linear_equation(num_1, num_2)
					Escribir "Do you want to continue?"
					Leer answer
				Hasta Que ((answer = "n") o (answer = "N"))
			8:
				Limpiar Pantalla
				Escribir "Gracias por su atención"
			De Otro Modo:
				Escribir "Incorrect option. Try it again"
		Fin Segun
	Hasta Que (option = 8)
	
	
FinAlgoritmo
