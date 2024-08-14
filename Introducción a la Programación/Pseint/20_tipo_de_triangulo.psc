Algoritmo Tipo_de_triángulo
	//Elabora un algoritmo que identifique el tipo de triángulo conociendo sus tres lados
	
	Definir a, b, c Como Entero
	
	Escribir "Lado a(cm): "
	Leer a
	Escribir "Lado b(cm): "
	Leer b
	Escribir "Lado c(cm): "
	Leer c
	
	Si ((a = b) y (b = c)) Entonces
		Escribir "El triángulo es equilátero"
	SiNo
		Si ((a = b) y (a <> c)) Entonces 
			Escribir "El triángulo es isósceles"
		SiNo
				Escribir "El triángulo es escaleno"
		FinSi
	FinSi
	
FinAlgoritmo
