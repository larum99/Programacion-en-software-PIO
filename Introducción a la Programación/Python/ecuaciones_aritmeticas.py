
a = int(input("\nDigite el numero a: "))
b = int(input("Digite el numero b: "))
c = int(input("Digite el numero c: "))
d = int(input("Digite el numero d: "))


z = (a + b) + (b + c)
y = (a - b) - (b + c)
x = ((a + b) + (c + d)) /  (a + b) + (b ** c)
w = ((a - b) - (b - c)) * a / (a + b) * b ** a

print(f"\nEl resultado de z es {z}", f"\nEl resultado de y es {y}", f"\nEl resultado de x es {x}", f"\nEl resultado de w es {w}")