Algoritmo Preguntas
//	Elabore un algoritmo que solicite el número de respuestas correctas, incorrectas y en
//	blanco, correspondientes a postulantes, y muestre su puntaje final considerando, que por cada
//	respuesta correcta tendrá 5 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0
	
	Definir pc, pinc, pb, nc, ni, nb, total Como Entero
	Escribir "Número de preguntas correctas: "
	Leer nc
	Escribir "Número de preguntas incorrectas: "
	Leer ni
	Escribir "Número de preguntas en blanco: "
	Leer nb
	pc <- nc * 5
	pinc <- ni * (-1)
	pb <- nb * 0
	total <- pc + pinc + pb
	Escribir "Puntaje final: ",total
	
FinAlgoritmo