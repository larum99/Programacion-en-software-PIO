Algoritmo Ecuacion_primer_grado
	Definir a, b, x Como Real
	
	Escribir "A:"
	Leer a
	Escribir "B:"
	Leer b
	Si (a <> 0) Entonces
		x <- -b / a
		Escribir "El valor de la ecuaci�n es: ",x
	SiNo
		Escribir "El valor de la ecuaci�n es indeterminado"
	FinSi
FinAlgoritmo
