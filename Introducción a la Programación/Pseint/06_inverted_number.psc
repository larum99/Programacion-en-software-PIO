Algoritmo numero_invertido
//	Dado un n�mero natural de dos cifras, dise�e un algoritmo que permita obtener el n�mero
//invertido. Ejemplo: si se ingresa 23 que se muestre 32.
	
	Definir num, cociente, residuo, invertido Como Entero
	Escribir "Digite un n�mero de dos cifras: "
	Leer num
	cociente <- trunc(num / 10)
	residuo <- num MOD 10
	invertido <- (residuo * 10) + cociente
	Escribir "El n�mero invertido es: ",invertido
FinAlgoritmo