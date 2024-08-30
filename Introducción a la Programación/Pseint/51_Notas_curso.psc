//Suponga un array con N notas de 1 a 10, calcule el promedio de aprobados y el promedio de los desaprobados e indique la cantidad y porcentaje de aprobados y desaprobados.
Algoritmo Notas_curso
	Definir i, cont_aprobados, cont_desaprobados, n como Entero
	Definir suma_aprobados, suma_desaprobados, promedio_aprobados, promedio_desaprobados, total_estudiantes, porc_aprobados, porc_desaprobados como Real
	
	cont_aprobados <- 0
	cont_desaprobados <- 0
	suma_aprobados <- 0
	suma_desaprobados <- 0
	Escribir Sin Saltar "Dimensión del vector: "
	Leer n
	Dimension notas[n]
	Para i <- 1 Hasta n Hacer
		Escribir "Digite la nota en la posición ",i,":" 
		Leer notas[i]
		Si (notas[i] >= 7) Entonces
			cont_aprobados <- cont_aprobados + 1
			suma_aprobados <- suma_aprobados + notas[i]
		SiNo
			cont_desaprobados <- cont_desaprobados + 1
			suma_desaprobados <- suma_desaprobados + notas[i]
		FinSi
	FinPara
	total_estudiantes <- suma_aprobados + suma_desaprobados
	promedio_aprobados <- suma_aprobados / cont_aprobados
	promedio_desaprobados <- suma_desaprobados / cont_desaprobados
	porc_aprobados <- (suma_aprobados / total_estudiantes) * 100
	porc_desaprobados <- (suma_desaprobados / total_estudiantes) * 100
	
	Escribir "Promedio de aprobados: ",promedio_aprobados," equivale al: ",porc_aprobados,"%, y la cantidad de aprobados es: ",cont_aprobados
	Escribir "Promedio de desaprobados: ",promedio_desaprobados," equivale al: ",porc_desaprobados,"%, y la cantidad de desaprobados es: ",cont_desaprobados
	
FinAlgoritmo
