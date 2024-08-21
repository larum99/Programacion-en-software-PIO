//  write an algorithm that calculates the percentage of inversion for
// each person
Algoritmo Investment_percentage
	Definir inv1, inv2, inv3 Como Entero
	Definir inv_p1, inv_p2, inv_p3, total Como Real
	Escribir "Investment of the person 1: $"
	Leer inv1
	Escribir "Investment of the person 2: $"
	Leer inv2
	Escribir "Investment of the person 3: $"
	Leer inv3
	total <- inv1 + inv2 + inv3
	Escribir "Total of investment: $", total
	inv_p1 <- (inv1 / total) * 100
	inv_p2 <- (inv2 / total) * 100
	inv_p3 <- (inv3 / total) * 100
	Escribir "The percentage that person 1 did is: ", inv_p1,"%"
	Escribir "The percentage that person 2 did is: ", inv_p2,"%"
	Escribir "The percentage that person 3 did is: ", inv_p3,"%"
FinAlgoritmo