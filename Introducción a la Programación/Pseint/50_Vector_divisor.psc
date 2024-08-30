//Dado un vector de N posiciones y un divisor, determinar cuántos números hay del divisor en los n numero ingresados.
Algoritmo Vector_divisor
	Definir i, m, n, c Como Entero
	c <- 0
	Escribir Sin Saltar "Digite la cantidad de elementos del vector: "
	Leer n
	Dimension V[n]
	Para i <- 1 Hasta n Hacer
		Escribir Sin Saltar "V[",i,"]: "
		Leer V[i]
	FinPara
	Escribir Sin Saltar "Divisor: "
	Leer m
	Para i <- 1 hasta n Hacer
		Si(V[i] MOD m = 0) Entonces
			c <- c + 1
		FinSi
	FinPara
	Escribir "La cantidad de múltiplos del divisor es de: ",c
FinAlgoritmo
