// Write an algorithm to read three different integers, and 
//determine the largest 
Algoritmo Maximun_of_three
	
	Definir N1, N2, N3 Como Entero
	
	Escribir "Number 1: "
	Leer N1
	Escribir "Number 2: "
	Leer N2
	Escribir "Number 3: "
	Leer N3
	
	Si ((N1 > N2) y (N1 > n3)) Entonces
		nLargest <- N1
	SiNo
		Si (N2 > N3) Entonces
			nLargest <- N2
		SiNo
			nLargest <- N3
		FinSi
	FinSi
	
	Escribir "The maximun number is: ", nLargest
FinAlgoritmo
