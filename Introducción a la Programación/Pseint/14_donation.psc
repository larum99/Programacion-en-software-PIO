Algoritmo donacion
//Una instituci�n educativa ha recibido una donaci�n especial que ser� repartida entre las 
//carreras de Telecomunicaciones, Sistemas, Administraci�n y Contabilidad de la siguiente 
//forma:
//Telecomunicaciones: 20% de Sistemas.
//Sistemas: 15% de Administraci�n.
//Administraci�n: 30% de la donaci�n.
//Contabilidad: lo que resta de la donaci�n.
//Dise�e un algoritmo que determine cuanto recibir� cada carrera.
	
	Definir monto, sistemas, telecomunicaciones, administracion, contabilidad Como Real
	Escribir "Digite la donaci�n hacia la instituci�n educativa, $"
	Leer monto
	administracion <- monto * 0.3
	sistemas <- administracion * 0.15
	telecomunicaciones <- sistemas * 0.2
	contabilidad <- monto - (administracion + sistemas + telecomunicaciones)
	Escribir "Administraci�n recibir�: $",administracion
	Escribir "Sistemas recibir�: $",sistemas
	Escribir "Telecomunicaciones recibir�: $",telecomunicaciones
	Escribir "Contabilidad recibir�: $",contabilidad
	
FinAlgoritmo
