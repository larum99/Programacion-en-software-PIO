//A worker needs to calculate his weekly salary, which is obtained as
//follows
// If you work 40 hours or less, you are paid 26000 per hour. 
//If you work more than 40 hours, you are paid 26000 for each of 
//the first 40h and 36000 for each extra hour.

Algoritmo Weekly_salary
	
	Definir hours_worked, extra_hours, total_weekly_salary Como Real
	
	Escribir "Hours worked: "
	Leer hours_worked
		
	Si (hours_worked <= 40) Entonces
		total_weekly_salary = hours_worked * 26000
	SiNo
		Si (hours_worked > 40) Entonces
			extra_hours = hours_worked - 40
			total_weekly_salary = (hours_worked * 26000) + (extra_hours * 36000)
		FinSi
	FinSi
	
Escribir "Total weekly salary : ", total_weekly_salary	
FinAlgoritmo
