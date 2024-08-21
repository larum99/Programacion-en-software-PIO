//Develop an algorithm that identifies the type of triangle 
//knowing its three sides
Algoritmo Type_of_triangle
	
	Definir a, b, c Como Entero
	
	Escribir "Side a(cm): "
	Leer a
	Escribir "Side b(cm): "
	Leer b
	Escribir "Side c(cm): "
	Leer c
	
	Si ((a = b) y (b = c)) Entonces
		Escribir "The triangle is equilateral"
	SiNo
		Si ((a = b) y (a <> c)) Entonces 
			Escribir "The triangle is isosceles"
		SiNo
				Escribir "The triangle is scalene"
		FinSi
	FinSi
	
FinAlgoritmo
