Algoritmo Mayor_de_tres_n�meros
	// Elabora un Algoritmo  para leer tres numeros enteros diferentes entre s�, y determinar el mayor 
	
	Definir N1, N2, N3 Como Entero
	
	Escribir "N�mero 1: "
	Leer N1
	Escribir "N�mero 2: "
	Leer N2
	Escribir "N�mero 3: "
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
	
	Escribir "El n�mero mayor es: ", nMayor
FinAlgoritmo
