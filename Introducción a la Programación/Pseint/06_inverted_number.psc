Algoritmo numero_invertido
//	Dado un número natural de dos cifras, diseñe un algoritmo que permita obtener el número
//invertido. Ejemplo: si se ingresa 23 que se muestre 32.
	
	Definir num, cociente, residuo, invertido Como Entero
	Escribir "Digite un número de dos cifras: "
	Leer num
	cociente <- trunc(num / 10)
	residuo <- num MOD 10
	invertido <- (residuo * 10) + cociente
	Escribir "El número invertido es: ",invertido
FinAlgoritmo