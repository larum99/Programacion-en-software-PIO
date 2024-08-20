Algoritmo ventas_tienda
//	Suponga que tiene Ud. una tienda y desea registrar las ventas en una computadora. Diseñe 
//  un algoritmo en pseudocódigo que lea por cada cliente:
//	El monto de la venta calcule e imprima el IVA.
//	Calcule e imprima en total a pagar.
//	Lea la cantidad con la que paga el cliente calcule e imprima el cambio
	
	Definir venta, IVA, total_compra, pago, cambio Como Real
	
	Escribir "Total de la venta, $"
	Leer venta
	IVA <- venta * 0.19
	Escribir "IVA: $",IVA
	total_compra <- venta + IVA
	Escribir "Total a pagar: $",total_compra
	Escribir "Cantidad con lo que va a pagar, $"
	Leer pago
	cambio <- pago - total_compra
	Escribir "Su cambio es de: $",cambio
FinAlgoritmo
