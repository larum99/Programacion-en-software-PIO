
// Primer opción

Funcion total_suma = Prom_cursos ( c_electricidad, c_diseno_i, c_multimedia )
	Definir suma Como Real
	suma = c_electricidad + c_diseno_i + c_multimedia
	total_suma = suma
Fin Funcion

Funcion total_porcentaje = Porcentaje_electricidad ( total_suma, c_electricidad )
	Definir porcentaje Como Real
	porcentaje = redon((c_electricidad / total_suma) * 100)
	total_porcentaje = porcentaje
Fin Funcion

Funcion total_porcentaje = Porcentaje_diseno ( total_suma, c_diseno_i )
	Definir porcentaje Como Real
	porcentaje = redon((c_diseno_i / total_suma) * 100)
	total_porcentaje = porcentaje
Fin Funcion

Funcion total_porcentaje = Porcentaje_multimedia ( total_suma, c_multimedia)
	Definir porcentaje Como Real
	porcentaje = redon((c_multimedia / total_suma) * 100)
	total_porcentaje = porcentaje
Fin Funcion

// Segunda opción

Funcion puntaje_final = CalcularPuntaje(correctas, incorrectas, en_blanco)
    Definir puntaje_final Como Entero
    puntajefinal = (correctas * 4) + (incorrectas * (-2)) + (en_blanco * 1)
    puntaje_final = puntajefinal
Fin Funcion

// Tercer opción

Funcion pulsaciones = CalcularPulsaciones(edad, sexo)
    Definir total_pulsaciones Como Real
	
	Si (sexo = "F") o (sexo = "f") Entonces
		pulsaciones = (220 - edad) / 10
	Sino
		Si (sexo = "M") o (sexo = "m") Entonces
        pulsaciones = (210 - edad) / 10
		FinSi
	FinSi
	
    total_pulsaciones = pulsaciones
Fin Funcion

// Cuarta opción

Funcion total_enganche = CalcularEnganche(costo_casa, ingresos)
    Definir enganche Como Real

    Si (ingresos < 800) Entonces
        enganche = costo_casa * 0.15
    Sino
        enganche = costo_casa * 0.30
    FinSi
	
    total_enganche = enganche
Fin Funcion

Funcion total_pago_mensual = CalcularPagoMensual(costo_casa, ingresos)
    Definir pago_mensual, saldo_restante, años Como Real
	
    saldo_restante = costo_casa - CalcularEnganche(costo_casa, ingresos)
	
    Si ingresos < 8000 Entonces
        años = 10
    Sino
        años = 7
    FinSi
	
    pago_mensual = redon(saldo_restante / (años * 12))
	
    total_pago_mensual = pago_mensual
Fin Funcion

// Quinta opción

Funcion numero_medio = CalcularNumeroMedio(a, b, c)
    Definir medio Como Entero
	
    Si (a > b Y a < c) o (a < b Y a > c) Entonces
        medio = a
	Sino
		Si (b > a Y b < c) o (b < a Y b > c) Entonces
        medio = b
		Sino
			medio = c
		FinSi
    FinSi

    numero_medio = medio
Fin Funcion

// Sexta opción

Funcion sueldo = CalcularSueldoSemanal(horas_trabajadas, pago_hora)
    Definir sueldo_semanal Como Real
    sueldo_semanal = (horas_trabajadas * pago_hora) * 7
	sueldo = sueldo_semanal
Fin Funcion

Funcion total <- CalcularTotalPagado(n_empleados)
    Definir total_pagado, sueldo_semanal, horas_trabajadas, pago_hora Como Real
    total_pagado = 0
	
    Para i = 1 Hasta n_empleados Hacer
        Escribir "Ingrese las horas trabajadas por el empleado ", i, ": "
        Leer horas_trabajadas
        Escribir "Ingrese el pago por hora del empleado ", i, ": "
        Leer pago_hora
        sueldo_semanal = CalcularSueldoSemanal(horas_trabajadas, pago_hora)
        Escribir "El sueldo semanal del empleado ", i, " es: $", sueldo_semanal
        total_pagado = total_pagado + sueldo_semanal
    Fin Para
	
    total = total_pagado
Fin Funcion

Algoritmo Menu_opciones
	Definir opc Como Entero
	Definir resp Como Caracter
	// Primer opción
	Definir celectricidad, cdiseno_i, cmultimedia, total_estudiantes Como Real
	//Segunda opción
	Definir correctas, incorrectas, en_blanco, puntaje Como Entero
	//Tercer opción
	Definir edad Como Entero
    Definir sexo Como Caracter
    Definir resultado_pulsaciones Como Real
	//Cuarta opción
	Definir costo_casa, ingresos, enganche, pago_mensual Como Real
	//Quinta opción
	Definir num1, num2, num3, medio Como Entero
	//Sexta opción
	Definir n_empleados Como Entero
    Definir total_pagado Como Real
	
    Repetir
		Limpiar Pantalla
		Escribir "Menú Principal"
		Escribir "1 - Estuadiantes y Porcentaje"
		Escribir "2 - Puntaje Final"
		Escribir "3 - Pulsaciones"
		Escribir "4 - Enganche"
		Escribir "5 - Número Medio"
		Escribir "6 - Pago Semanal y Pago Total	"
		Escribir "7 - Salir"
		Escribir Sin Saltar "Elija la Opción"
		Leer opc
		Segun opc Hacer
			1:
				Repetir
					Limpiar Pantalla
					Escribir "Cantidad de estudiantes del curso de Electricidad"
					Leer celectricidad
					Escribir "Cantidad de estudiantes del curso de Diseño Industrial"
					Leer cdiseno_i
					Escribir "Cantidad de estudiantes del curso de Multimedia"
					Leer cmultimedia
					total_estudiantes = Prom_cursos(celectricidad, cdiseno_i, cmultimedia)
					Escribir "El total de estudiantes es: ", Prom_cursos(celectricidad, cdiseno_i, cmultimedia)
					Escribir "El porcentaje de alumnos de Electricidad es del: ", Porcentaje_electricidad(Prom_cursos(celectricidad, cdiseno_i, cmultimedia), celectricidad),"%"
					Escribir "El porcentaje de alumnos de Diseño Industrial es del: ", Porcentaje_diseno(Prom_cursos(celectricidad, cdiseno_i, cmultimedia), cdiseno_i),"%"
					Escribir "El porcentaje de alumnos de Multimedia es del: ", Porcentaje_multimedia(Prom_cursos(celectricidad, cdiseno_i, cmultimedia), cmultimedia),"%"
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))	
			2: 
				Repetir
					Limpiar Pantalla
					Escribir Sin Saltar"Ingrese el número de respuestas correctas"
					Leer correctas
					Escribir "Ingrese el número de respuestas incorrectas"
					Leer incorrectas
					Escribir "Ingrese el número de respuestas en blanco"
					Leer en_blanco
					puntaje = CalcularPuntaje(correctas, incorrectas, en_blanco)
					Escribir "El puntaje final del postulante es: ", puntaje
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))
			3:
				Repetir
					Limpiar Pantalla
					Escribir "Ingrese la edad: "
					Leer edad
					Escribir "Ingrese el sexo (F para femenino, M para masculino): "
					Leer sexo
					resultado_pulsaciones = CalcularPulsaciones(edad, sexo)
					Escribir "El número de pulsaciones por cada 10 segundos de ejercicio aeróbico es: ", resultado_pulsaciones
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))
			4: 
				Repetir
					Limpiar Pantalla
					Escribir "Ingrese el costo de la casa: "
					Leer costo_casa
					Escribir "Ingrese los ingresos mensuales del comprador: "
					Leer ingresos
					enganche = CalcularEnganche(costo_casa, ingresos)
					pago_mensual = CalcularPagoMensual(costo_casa, ingresos)
					Escribir "El enganche que debe pagar el comprador es: $", enganche
					Escribir "El pago mensual que debe realizar el comprador es: $", pago_mensual
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))
			5:
				Repetir
					Limpiar Pantalla
					Escribir "Ingrese el primer número: "
					Leer num1
					Escribir "Ingrese el segundo número: "
					Leer num2
					Escribir "Ingrese el tercer número: "
					Leer num3
					medio = CalcularNumeroMedio(num1, num2, num3)
					Escribir "El número medio es: ", medio
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))
			6:
				Repetir
					Limpiar Pantalla
					Escribir "Ingrese el número de empleados: "
					Leer n_empleados
					total_pagado = CalcularTotalPagado(n_empleados)
					Escribir "El total pagado por la empresa para ", n_empleados, " empleados es: $", total_pagado
					Escribir "¿Desea continuar?"
					Escribir "N/n -> No"
					Escribir "S/s -> Sí"
					Leer resp
				Hasta Que ((resp = "n") o (resp = "N"))				
			7:
				Limpiar Pantalla
				Escribir "Se finalizó el programa"
			De Otro Modo:
				Escribir "Opción incorrecta. Intente de nuevo"
		Fin Segun
	Hasta Que (opc = 7)
FinAlgoritmo
