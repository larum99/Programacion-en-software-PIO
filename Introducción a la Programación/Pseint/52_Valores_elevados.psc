//Crear un array con N números ingresados por teclado y mostrar sus valores elevados al cuadrado y al cubo.
Algoritmo Valores_elevados
	Definir i, n como Entero
	Escribir Sin Saltar "Ingresar la cantidad de números: "
	Leer n
	Dimension valores[n]
	Dimension cuadrado[n]
	Dimension cubo[n]
	Para i <- 1 Hasta  n Hacer
		Escribir Sin Saltar "Ingrese el número ",i,": "
		Leer valores[i]
		cuadrado[i] <- (valores[i])^2
		cubo[i] <- (valores[i])^3
		Escribir "Elevado al cuadrado es:",cuadrado[i]
		Escribir "Elevado al cubo es:",cubo[i]
	FinPara
FinAlgoritmo
