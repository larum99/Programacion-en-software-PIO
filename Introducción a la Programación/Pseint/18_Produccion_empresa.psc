Algoritmo Produccion_empresa
	// Se tiene registrado la producción (unidades) logradas por un operario a lo largo de la semana (Lunes a sábado)
	// Elabore un algoritmo que nos muestres si el operario recibirá incentivos sabiendo que el promedio de producción mínima es de 100 unidades.
	
	Definir PL, PM, PX, PJ, PV, PS, Total, Promedio Como Real
	
	Escribir "Producción del día Lunes:"
	Leer PL
	Escribir "Producción del día Martes:"
	Leer PM
	Escribir "Producción del día Miércoles:"
	Leer PX
	Escribir "Producción del día Jueves:"
	Leer PJ
	Escribir "Producción del día Viernes:"
	Leer PV
	Escribir "Producción del día Sábado:"
	Leer PS
	
	Total <- PL + PM + PX + PJ + PV + PS
	
	Promedio <- Total / 6
	
	Escribir "Promedio de la producción: ", Promedio, " unidades"
	
	Si (Promedio >= 100) Entonces
		Escribir "El operario recibirá incentivos"
	SiNo
		Escribir "El operario no recibirá incentivo"
	FinSi
	
FinAlgoritmo
