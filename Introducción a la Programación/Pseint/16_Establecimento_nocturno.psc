Algoritmo Establecimento_nocturno
	Definir nombre, documento Como Caracter
	Definir edad, entrada_al_sitio como Entero
	
	Escribir "Su nombre, por favor:"
	Leer nombre
	Escribir "Su edad, por favor:"
	Leer edad
	Escribir "¿Tiene usted su cedula? (SI/NO):"
	Leer documento
	Escribir "Entrada al sitio:"
	Leer entrada_al_sitio
	
	Si((edad >= 18) y (documento = "SI") y (entrada_al_sitio = 23)) Entonces
		Escribir nombre," es usted bienvenido"
	SiNo
		Escribir "Lo lamentamos, usted no puede ingresar"
	FinSi
	
FinAlgoritmo
