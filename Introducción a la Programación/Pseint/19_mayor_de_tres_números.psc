Algoritmo Mayor_de_tres_números
	// Elabora un Algoritmo  para leer tres numeros enteros diferentes entre sí, y determinar el mayor 
	
	Definir N1, N2, N3 Como Entero
	
	Escribir "Número 1: "
	Leer N1
	Escribir "Número 2: "
	Leer N2
	Escribir "Número 3: "
	Leer N3
	
	Si ((N1 > N2) y (N1 > n3)) Entonces
		nMayor <- N1
	SiNo
		Si (N2 > N3) Entonces
			nMayor <- N2
		SiNo
			nMayor <- N3
		FinSi
	FinSi
	
	Escribir "El número mayor es: ", nMayor
FinAlgoritmo
