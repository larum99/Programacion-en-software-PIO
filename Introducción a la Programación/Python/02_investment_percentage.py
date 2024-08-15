"""
write an algorithm that calculates the percentage of inversion for
each person
"""
inv1 = float(input('Investment of the person 1: $'))
inv2 = float(input('Investment of the person 2: $'))
inv3 = float(input('Investment of the person 3: $'))
total = inv1 + inv2 + inv3
print('Total of investment: $', total)
inv_p1 = (inv1 / total) * 100
inv_p2 = (inv2 / total) * 100
inv_p3 = (inv3 / total) * 100
print('The percentage that person 1 did is: ', inv_p1,'%')
print('The percentage that person 2 did is: ', inv_p2,'%')
print('The percentage that person 3 did is: ', inv_p3,'%')