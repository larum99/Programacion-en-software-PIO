Algoritmo velocidad_vehiculos
//	Dos vehículos viajan a diferentes velocidades (V1 y V2) y están distanciados por una 
//	distancia D. El que está detrás (V1) viaja a una velocidad mayor. Se pide hacer un algoritmo para 
//	ingresar la distancia entre los dos vehículos (km) y sus respectivas velocidades (km/h) y con esto 
//	determinar y mostrar en que tiempo (minutos) alcanzará el vehículo más rápido al otro.
	
	Definir v1, v2, distancia, tiempo Como Real
	
	Escribir "Distancia entre los vehículos (km):"
	Leer distancia
	Escribir "Velocidad del vehículo 1 (km/h): "
	Leer v1
	Escribir "Velocidad del vehículo 2 (km/h): "
	Leer v2
	tiempo <- distancia / (v2 - v1)
	tiempo <- tiempo * 60
	Escribir "El tiempo que alcanzará el vehículo mas rápido al otro será de: ",tiempo," minutos."
FinAlgoritmo
