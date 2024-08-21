// write an algorithm that allows you to enter a number between 1
//and 20 and display its Roman equivalent 

Algoritmo roman_number
	Definir num Como Entero
	Definir roman Como Caracter
	
	Escribir "Enter a number (between 1 and 20): "
	Leer num
	Segun num Hacer
		1: roman = "I"
		2: roman = "II"
		3: roman = "III"
		4: roman = "IV"
		5: roman = "V"
		6: roman = "VI"
		7: roman = "VII"
		8: roman = "VIII"
		9: roman = "IX"
		10: roman = "X"
		11: roman = "XI"
		12: roman = "XII"
		13: roman = "XIII"
		14: roman = "XIV"
		15: roman = "XV"
		16: roman = "XVI"
		17: roman = "XVII"
		18: roman = "XVIII"
		19: roman = "XIX"
		20: roman = "XX"
	FinSegun
	
	Escribir "The roman number is: ", roman
FinAlgoritmo
