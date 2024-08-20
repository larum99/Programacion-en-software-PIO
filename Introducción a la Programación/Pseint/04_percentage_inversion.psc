Algoritmo Porcentaje_inversion
//	Tres personas deciden invertir su dinero para formar una empresa. Cada una de ellas
//	invierte una cantidad distinta. Hacer un algoritmo que imprima el porcentaje que cada quien
//	invierte con respecto al total de la inversión.
	
	Definir persona1, persona2, persona3 Como Caracter
	Definir inv1, inv2, inv3 Como Entero
	Definir pinv1, pinv2, pinv3, total Como Real
	
	Escribir "Nombre del inversionista 1: "
	Leer persona1
	Escribir "Valor a invertir, $"
	Leer inv1
	Escribir "Nombre del inversionista 2: "
	Leer persona2
	Escribir "Valor a invertir, $"
	Leer inv2
	Escribir "Nombre del inversionista 3: "
	Leer persona3
	Escribir "Valor a invertir, $"
	Leer inv3
	total <- inv1 + inv2 + inv3
	Escribir "Total de la inversión: $",total
	pinv1 <- (inv1 / total) * 100
	pinv2 <- (inv2 / total) * 100
	pinv3 <- (inv3 / total) * 100
	Escribir "El porcentaje de inversión de ",persona1," es del: ",pinv1,"%"
	Escribir "El porcentaje de inversión de ",persona2," es del: ",pinv2,"%"
	Escribir "El porcentaje de inversión de ",persona3," es del: ",pinv3,"%"
FinAlgoritmo