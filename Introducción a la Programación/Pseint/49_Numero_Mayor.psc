//Dado un vector de N posiciones, obtener el número mayor
Algoritmo Numero_Mayor
	Dimension V[10]
	Definir i, mayor, n Como Entero
	mayor <- 0
	Escribir Sin Saltar "Digite la cantidad de elementos del vector: "
	Leer n
	//LLenado del vector
	Para i <- 1 Hasta  n Hacer
		Escribir "V[",i,"]: "
		Leer V[i]
	FinPara
	//Comparación de posiciones en el vector
	Para i <- 1 Hasta n Hacer
		Si V[i] > mayor Entonces
			mayor <- V[i]
		FinSi
	FinPara
	Escribir "Mayor: ",mayor
FinAlgoritmo
