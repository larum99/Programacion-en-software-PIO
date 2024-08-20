Algoritmo Volante_Pago
//	Un trabajador tiene una tarifa de $75,000 la hora. Se sabe que a todo trabajador se les
//	descuenta el equivalente a 5 horas de trabajo, por cada falta. Realice un programa que determine
//	y muestre el sueldo neto de un trabajador a partir del número de horas trabajadas, de su tarifa
//	horaria y considerando el descuento por concepto de faltas.
	
	Definir ht, faltas, tarifa, sb, descuento, total Como Entero
	Definir nombre Como Caracter
	tarifa <- 75000
	Escribir "Nombre del trabajador: "
	Leer nombre
	Escribir "Horas trabajadas: "
	Leer ht
	Escribir "Faltas (equivalantes a 5 horas de trabajo): "
	Leer faltas
	sb <- ht * tarifa
	descuento <- (faltas * 5 * tarifa)
	total <- sb - descuento
	Escribir "**************** VOLANTE DE PAGO ****************"
	Escribir "Nombre: ",nombre
	Escribir "Salario Bruto, $",sb
	Escribir "Faltas, $:",descuento
	Escribir "Salario Neto, $",total
	Escribir "*************************************************"
FinAlgoritmo
