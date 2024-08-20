import math

a = float(input("enter a: "))
b = float(input("enter a: "))
c = float(input("enter a: "))

s = (a + b + c) / 2
area = math.sqrt(s * (s - a) * (s - b) * (s - c))

print("semiperimetro", s, "area", area)
print(f"Semiperímetro (s): {s}")
print(f"Área del triángulo: {area}")