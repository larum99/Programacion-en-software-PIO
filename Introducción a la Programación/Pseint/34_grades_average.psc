Algoritmo Average_of_grades
	Definir i, n Como Entero
	Definir grade, sum, average Como Real
	
	sum = 0
	
	Escribir "Quantity of students: "
	Leer n
	
	Para i = 1 hasta n Hacer
		Escribir "Final grade of student ", i, ": "
		Leer grade
		sum = sum + grade
	FinPara
	
	average = sum / n
	Escribir "The average of the group is: ", average
	
	Si (average >= 3.5) Entonces
		Escribir "The group moves to the next level"
	SiNo
		Escribir "The group does not move to the next level"
	FinSi
FinAlgoritmo
