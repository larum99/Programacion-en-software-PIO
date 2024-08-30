Algoritmo Suma_matrices
	Definir i, j, n, m Como Entero
	Escribir "Creación de la Matriz A"
	Escribir Sin Saltar "Filas: "
	Leer n
	Escribir Sin Saltar "Columnas: "
	Leer m
	Dimension MatrizA(n,m)
	
	//Llenado de la Matriz A
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			Escribir Sin Saltar "Matriz_A[",i,",",j,"]: "
			Leer MatrizA[i,j] 
		FinPara
	FinPara
	
	//Impresión de la MatrizA
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			Escribir MatrizA[i,j]," " Sin Saltar 
		FinPara
		Escribir " "
	FinPara
	
	Escribir "Creación de la Matriz B"
	Escribir Sin Saltar "Filas: "
	Leer n
	Escribir Sin Saltar "Columnas: "
	Leer m
	Dimension MatrizB(n,m)
	
	//Llenado de la Matriz B
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			Escribir Sin Saltar "Matriz_B[",i,",",j,"]: "
			Leer MatrizB[i,j] 
		FinPara
	FinPara
	
	//Impresión de la MatrizB
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			Escribir MatrizB[i,j]," " Sin Saltar 
		FinPara
		Escribir " "
	FinPara
	
	Dimension MatrizC[n,m]
	//Suma de Matrices
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			MatrizC[i,j] <- MatrizA[i,j] + MatrizB[i,j]
		FinPara
	FinPara
	
	//Impresion de la matriz resultante
	Escribir "Matriz Resultante: "
	Para i <- 1 hasta n Hacer
		Para j <- 1 hasta m Hacer
			Escribir MatrizC[i,j]," " Sin Saltar
		FinPara
		Escribir " "
	Fin Para
FinAlgoritmo
