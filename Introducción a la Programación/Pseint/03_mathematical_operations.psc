// write an algorithm that performs mathematical operationes of two 
// numbers entered
Algoritmo mathematical_operations
	Definir a, b, add, substraction, multiplication, division, exponentation, roots Como Real
	Escribir "Number 1: "
	Leer a
	Escribir "Number 2: "
	Leer b
	add <- a + b
	substraction <- a - b
	multiplication <- a * b
	division <- a / b
	exponentation <- a ^ b
	roots <- a ^(1/b)
	Escribir "Add: ", add
	Escribir "Substration: ", substraction
	Escribir "Multiplication: ", multiplication
	Escribir "Division: ", division
	Escribir "Exponentation: ", exponentation
	Escribir "Roots: ", roots
FinAlgoritmo
