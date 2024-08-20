
// design a function that calculates the area and perimeter of a circle.
// It reads the radius of the circle and shows its area and perimeter
// A = PI *radio ^ 2, P = 2 * PI * r

Funcion result_area <- CalculateArea ( r )
	area = PI * (r ^2)
	result_area = area
Fin Funcion

Funcion result_perimeter <- CalculatePerimeter ( r )
	Definir perimeter Como Real
	perimeter = 2 * PI * r
	result_perimeter = perimeter
Fin Funcion

Algoritmo Circumference
	Definir radio Como Real
	Escribir Sin Saltar "R: (cm): "
	Leer radio
	Escribir  "The area of circumference is: ", redon(CalculateArea(radio) * 100) / 100
	Escribir  "The perimeter of circumference is: ", redon(CalculatePerimeter(radio) * 100) / 100

FinAlgoritmo
