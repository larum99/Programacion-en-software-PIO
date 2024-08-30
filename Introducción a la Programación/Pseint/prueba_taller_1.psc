// Función para calcular el sueldo semanal de un empleado
Funcion sueldo <- CalcularSueldoSemanal(horas_trabajadas, pago_hora)
    Definir sueldo_semanal Como Real
    sueldo_semanal = (horas_trabajadas * pago_hora) * 7
	sueldo = sueldo_semanal
Fin Funcion

// Función para calcular el total pagado por la empresa a todos los empleados
Funcion total <- CalcularTotalPagado(n_empleados)
    Definir total_pagado, sueldo_semanal, horas_trabajadas, pago_hora Como Real
    total_pagado = 0
	
    // Ciclo para calcular el sueldo de cada empleado y acumular el total pagado
    Para i = 1 Hasta n_empleados Hacer
        Escribir "Ingrese las horas trabajadas por el empleado ", i, ": "
        Leer horas_trabajadas
        Escribir "Ingrese el pago por hora del empleado ", i, ": "
        Leer pago_hora
		
        // Calcular el sueldo semanal del empleado
        sueldo_semanal = CalcularSueldoSemanal(horas_trabajadas, pago_hora)
		
        // Mostrar el sueldo semanal del empleado
        Escribir "El sueldo semanal del empleado ", i, " es: $", sueldo_semanal
		
        // Acumular el sueldo en el total pagado por la empresa
        total_pagado = total_pagado + sueldo_semanal
    Fin Para
	
    total = total_pagado
Fin Funcion

// Algoritmo principal
Algoritmo CalcularPagoEmpleados
    // Declaración de variables
    Definir n_empleados Como Entero
    Definir total_pagado Como Real
	
    // Solicitar el número de empleados
    Escribir "Ingrese el número de empleados: "
    Leer n_empleados
	
    // Calcular el total pagado por la empresa
    total_pagado = CalcularTotalPagado(n_empleados)
	
    // Mostrar el total pagado por la empresa
    Escribir "El total pagado por la empresa para ", n_empleados, " empleados es: $", total_pagado
FinAlgoritmo
