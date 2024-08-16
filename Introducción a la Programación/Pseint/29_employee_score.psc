//In a given company, its employees are evaluated at the end of each 
//year. 
//The points you can get in the evaluation start at 0.0 and can 
//increase, translating into better benefits. The points which can be 
//obtained by employees may be 0.0, 0.4, 0.6 or more, but no 
//intermediate values between the figures mentioned. 
//Must be multiplied by the level score.

//Unacceptable 0.0
//Acceptable 0.4
//Worthy >= 0.6

Algoritmo employee_score
	Definir bonus, points, a, u, w Como Real
	Definir level Como Caracter
	u = 0.0
	a = 0.4
	w = 0.6
	bonus = 2400000
	
	Escribir "Enter score: " 
	Leer points
	
	Si (points = u) Entonces
		level = "Unaceptable"
	SiNo
		Si (points = a) Entonces
			level = "Aceptable"
		SiNo
			Si (points >= 0.6) Entonces
				level = "Worthy"
			SiNo
				Level  = " " 
			FinSi
		FinSi
	FinSi
	
	Si (level = " ") Entonces
		Escribir "This score is not valid, try again"
	SiNo
		Escribir "Your score is: ", level
		Escribir "It´s your job to collect: $", (points * bonus) 
	FinSi
FinAlgoritmo