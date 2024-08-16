Algoritmo Company_production
	// Production (units) achieved by an operator during the week is 
	//recorded (Monday to Saturday)
	//Develop an algorithm to show us if the operator will receive 
	//incentives knowing that the average minimum production is 100 units. 
	
	Definir PM, PT, PW, PX, PF, PS, Total, Average Como Real
	
	Escribir "Production of the day Monday: "
	Leer PM
	Escribir "Production of the day Tuesday: "
	Leer PT
	Escribir "Production of the day Wednesday: "
	Leer PW
	Escribir "Production of the day Thursday: "
	Leer PX
	Escribir "Production of the day Friday: "
	Leer PF
	Escribir "Production of the day Saturday: "
	Leer PS
	
	Total <- PM + PT + PW + PX + PF + PS
	
	Average <- Total / 6
	
	Escribir "Average of Production: ", Average, " units"
	
	Si (Average >= 100) Entonces
		Escribir "The operator will receive incentives"
	SiNo
		Escribir "The operator will not receive incentives"
	FinSi
	
FinAlgoritmo
