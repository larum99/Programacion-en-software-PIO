Algoritmo pago_trabajador
//	Los ingenieros de sistemas Hugo, Paco y Luis han sido contratados por la empresa 
//	"Casinos El gran genio S.A.S" para realizar una aplicación que permita determinar el valor 
//	a pagar a cada empleado por trabajar en su casino. Cada empleado que labora en su 
//	casino tiene un nombre, el valor de la hora y el número de horas trabajadas. Cada 
//	trabajador tiene un descuento del 15% sobre el salario bruto, determinar el salario neto 
//	a pagar.
	
	Definir nombre Como Caracter
	Definir vh, ht, sb, neto Como Real
	
	Escribir "Nombre del trabajador:"
	Leer nombre
	Escribir "Horas trabajadas:"
	Leer ht
	Escribir "Valor de la hora: $"
	Leer vh
	sb <- ht * vh
	neto <- sb - (sb * 0.15)
	Escribir "*************** VOLANTE DE PAGO ***************"
	Escribir "Nombre del trabajador: ",nombre
	Escribir "Salario Base: $",sb
	Escribir "Descuento: $", sb * 0.15
	Escribir "Salario a pagar: $",neto
	
FinAlgoritmo