Algoritmo Salario_semanal
	//Un obrero necesita caulcular su salario semanal, el cual se obtiene de la siguiente manera
	// Si trabaja 40h o menos se le paga 26000 por h. Si trabaja más de 40h se le paga 26000 por cada una de las primeras 40h y 36000 por cada hora extra.
	
	Definir horas_trabajadas, horas_extra, total_salario_semanal Como Real
	
	Escribir "Horas trabajadas: "
	Leer horas_trabajadas
		
	Si (horas_trabajadas <= 40) Entonces
		total_salario_semanal = horas_trabajadas * 26000
	SiNo
		Si (horas_trabajadas > 40) Entonces
			horas_extra = horas_trabajadas - 40
			total_salario_semanal = (horas_trabajadas * 26000) + (horas_extra * 36000)
		FinSi
	FinSi
	
Escribir "Salario Total: ", total_salario_semanal	
FinAlgoritmo
