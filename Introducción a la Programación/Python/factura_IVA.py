# Escribir una función que calcule el total de una factura tras aplicarle el IVA. 
# La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y 
# devolver el total de la factura. Si se invoca la función sin pasarle el porcentaje 
# de IVA, deberá aplicar un 19%.


def impuesto(cantidad, iva=19):
    return cantidad + (cantidad * (iva/100))

print(impuesto(10000))
print(impuesto(20000,6))