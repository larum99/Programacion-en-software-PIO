Algoritmo Tipo_de_tri�ngulo
	//Elabora un algoritmo que identifique el tipo de tri�ngulo conociendo sus tres lados
	
	Definir a, b, c Como Entero
	
	Escribir "Lado a(cm): "
	Leer a
	Escribir "Lado b(cm): "
	Leer b
	Escribir "Lado c(cm): "
	Leer c
	
	Si ((a = b) y (b = c)) Entonces
		Escribir "El tri�ngulo es equil�tero"
	SiNo
		Si ((a = b) y (a <> c)) Entonces 
			Escribir "El tri�ngulo es is�sceles"
		SiNo
				Escribir "El tri�ngulo es escaleno"
		FinSi
	FinSi
	
FinAlgoritmo
