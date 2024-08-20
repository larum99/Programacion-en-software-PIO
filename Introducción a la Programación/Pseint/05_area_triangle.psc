Algoritmo area_triangulo
//	Elabore un algoritmo que lea los tres (3) lados de un triángulo cualquiera y calcule su área,
//	considerar: Si A, B y C son lados, y S, el semiperímetro.
//	S = (A+B+C) / 2, A = RC(S*(S-A)*(S-B)*(S-C))
	
	Definir a, b, c, s, area Como Real
	Escribir "Lado A (cm): "
	Leer a
	Escribir "Lado B (cm): "
	Leer b
	Escribir "Lado C (cm): "
	Leer c
	s <- (a + b + c)/2
	area <- raiz(s*(s-a)*(s-b)*(s-c))
	Escribir "Semiperimetro: ",s
	Escribir "El area del triangulo es: ",area," cm"	
FinAlgoritmo