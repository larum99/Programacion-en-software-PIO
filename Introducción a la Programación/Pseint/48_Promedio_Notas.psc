Algoritmo Promedio_Notas
	Dimension notas[5]	//Definición de un array: vector o matriz
	Definir i Como Entero
	Definir suma, promedio Como Real
	suma <- 0
	Para i <- 1 Hasta 5 Hacer
		Escribir "Nota ",i,":"
		Leer notas[i]
		suma <- suma + notas[i]
	FinPara
	promedio <- suma / 5
	Escribir "La sumatoria de notas es: ",suma
	Escribir "El promedio de notas es de: ",promedio
FinAlgoritmo
