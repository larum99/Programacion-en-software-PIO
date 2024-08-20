Algoritmo donacion
//Una institución educativa ha recibido una donación especial que será repartida entre las 
//carreras de Telecomunicaciones, Sistemas, Administración y Contabilidad de la siguiente 
//forma:
//Telecomunicaciones: 20% de Sistemas.
//Sistemas: 15% de Administración.
//Administración: 30% de la donación.
//Contabilidad: lo que resta de la donación.
//Diseñe un algoritmo que determine cuanto recibirá cada carrera.
	
	Definir monto, sistemas, telecomunicaciones, administracion, contabilidad Como Real
	Escribir "Digite la donación hacia la institución educativa, $"
	Leer monto
	administracion <- monto * 0.3
	sistemas <- administracion * 0.15
	telecomunicaciones <- sistemas * 0.2
	contabilidad <- monto - (administracion + sistemas + telecomunicaciones)
	Escribir "Administración recibirá: $",administracion
	Escribir "Sistemas recibirá: $",sistemas
	Escribir "Telecomunicaciones recibirá: $",telecomunicaciones
	Escribir "Contabilidad recibirá: $",contabilidad
	
FinAlgoritmo
