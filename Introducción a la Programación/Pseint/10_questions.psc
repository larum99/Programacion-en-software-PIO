Algoritmo Preguntas
//	Elabore un algoritmo que solicite el n�mero de respuestas correctas, incorrectas y en
//	blanco, correspondientes a postulantes, y muestre su puntaje final considerando, que por cada
//	respuesta correcta tendr� 5 puntos, respuestas incorrectas tendr� -1 y respuestas en blanco tendr� 0
	
	Definir pc, pinc, pb, nc, ni, nb, total Como Entero
	Escribir "N�mero de preguntas correctas: "
	Leer nc
	Escribir "N�mero de preguntas incorrectas: "
	Leer ni
	Escribir "N�mero de preguntas en blanco: "
	Leer nb
	pc <- nc * 5
	pinc <- ni * (-1)
	pb <- nb * 0
	total <- pc + pinc + pb
	Escribir "Puntaje final: ",total
	
FinAlgoritmo