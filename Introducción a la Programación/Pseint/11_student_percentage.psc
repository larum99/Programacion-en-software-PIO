Algoritmo porcentaje_alumnos
//	Dise�e un programa que lea la cantidad de alumnos de redes, contabilidad y dise�o. 
//	Determine el porcentaje de alumnos de cada uno de los cursos.
	
	Definir redes, contabilidad, dise�o, total, porc_1, porc_2, porc_3 Como Real
	
	Escribir "Cantidad de alumnos de redes:"
	Leer redes
	Escribir "Cantidad de alumnos de contabilidad: "
	Leer contabilidad
	Escribir "Cantidad de alumnos de dise�o:"
	Leer dise�o
	total <- redes + contabilidad + dise�o
	Escribir "Total estudiantes: ",total
	porc_1 <- redon((redes / total) * 100)
	porc_2 <- redon((contabilidad / total) * 100)
	porc_3 <- redon((dise�o / total) * 100)
	Escribir "El porcentaje de alumnos de redes es del: ",porc_1,"%"
	Escribir "El porcentaje de alumnos de contabilidad es del: ",porc_2,"%"
	Escribir "El porcentaje de alumno de dise�o es del: ",porc_3,"%"
FinAlgoritmo
