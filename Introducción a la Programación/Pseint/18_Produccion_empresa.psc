Algoritmo Produccion_empresa
	// Se tiene registrado la producci�n (unidades) logradas por un operario a lo largo de la semana (Lunes a s�bado)
	// Elabore un algoritmo que nos muestres si el operario recibir� incentivos sabiendo que el promedio de producci�n m�nima es de 100 unidades.
	
	Definir PL, PM, PX, PJ, PV, PS, Total, Promedio Como Real
	
	Escribir "Producci�n del d�a Lunes:"
	Leer PL
	Escribir "Producci�n del d�a Martes:"
	Leer PM
	Escribir "Producci�n del d�a Mi�rcoles:"
	Leer PX
	Escribir "Producci�n del d�a Jueves:"
	Leer PJ
	Escribir "Producci�n del d�a Viernes:"
	Leer PV
	Escribir "Producci�n del d�a S�bado:"
	Leer PS
	
	Total <- PL + PM + PX + PJ + PV + PS
	
	Promedio <- Total / 6
	
	Escribir "Promedio de la producci�n: ", Promedio, " unidades"
	
	Si (Promedio >= 100) Entonces
		Escribir "El operario recibir� incentivos"
	SiNo
		Escribir "El operario no recibir� incentivo"
	FinSi
	
FinAlgoritmo
