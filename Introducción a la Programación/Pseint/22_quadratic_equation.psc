Algoritmo Quadratic_equation
	
	Definir a, b, c, x1, x2, det Como Real
	
	Escribir "A: "
	Leer a
	Escribir "B: "
	Leer b
	Escribir "C: "
	Leer c 
	
	det = (b ^ 2) - (4 * a * c)
	
	Si ((a <> 0) y (det > 0)) Entonces // determinante < o > ver video 
		x1 = (- b + raiz(det)) / (2 * a)
		x2 = (- b + raiz(det)) / (2 * a)
	SiNo
		Escribir "The equation does not exist"
	FinSi
	
	Escribir "X1 = ", x1
	Escribir "X2 = ", x2
	
FinAlgoritmo
