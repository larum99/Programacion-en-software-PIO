Algoritmo velocidad_vehiculos
//	Dos veh�culos viajan a diferentes velocidades (V1 y V2) y est�n distanciados por una 
//	distancia D. El que est� detr�s (V1) viaja a una velocidad mayor. Se pide hacer un algoritmo para 
//	ingresar la distancia entre los dos veh�culos (km) y sus respectivas velocidades (km/h) y con esto 
//	determinar y mostrar en que tiempo (minutos) alcanzar� el veh�culo m�s r�pido al otro.
	
	Definir v1, v2, distancia, tiempo Como Real
	
	Escribir "Distancia entre los veh�culos (km):"
	Leer distancia
	Escribir "Velocidad del veh�culo 1 (km/h): "
	Leer v1
	Escribir "Velocidad del veh�culo 2 (km/h): "
	Leer v2
	tiempo <- distancia / (v2 - v1)
	tiempo <- tiempo * 60
	Escribir "El tiempo que alcanzar� el veh�culo mas r�pido al otro ser� de: ",tiempo," minutos."
FinAlgoritmo
