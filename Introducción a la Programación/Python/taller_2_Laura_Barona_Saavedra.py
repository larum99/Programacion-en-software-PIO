import math, os

def menu():
    os.system('cls')
    print('Menú principal')
    # Primer opción
    print('1. Mostrar lista en orden inverso')
    # Segunda opción
    print('2. Asignaturas a repetir')
    # Tercer opción
    print('3. Promedio y Desviación')
    # Cuarta opción
    print("4. Submenú")
    # Quinta opción
    print("5. Diccionario persona")
    # Sexta opción
    print("6. Diccionario cesta")
    # Séptima opción
    print("7. Diccionario agenda")
    print("8. Salir")
    
# Primer opción
def construir_lista():
    lista = [i for i in range(1, 21)]
    for i in range(19, -1, -1):
        if i != 0:
            print(lista[i], end=" - ")
        else:
            print(lista[i])

# Segunda opción
def obtener_asignaturas():
    asignaturas = []
    print("Ingrese las asignaturas (escriba 'fin' para terminar):")
    while True:
        asignatura = input("Asignatura: ")
        if asignatura.lower() == 'fin':
            break
        asignaturas.append(asignatura)
    return asignaturas

def obtener_notas(asignaturas):
    notas = {}
    for asignatura in asignaturas:
        while True:
            try:
                nota = float(input(f"¿Qué nota sacaste en {asignatura}? "))
                if 0 <= nota <= 5:
                    notas[asignatura] = nota
                    break
                else:
                    print("Nota inválida. Debe estar entre 0 y 5.")
            except ValueError:
                print("Entrada inválida. Por favor ingrese un número.")
    return notas

def eliminar_aprobadas(asignaturas, notas):
    asignaturas_repetir = [asignatura for asignatura in asignaturas if notas.get(asignatura, 0) < 3.5]
    return asignaturas_repetir

def mostrar_asignaturas(asignaturas):
    if asignaturas:
        print("\nAsignaturas que debes repetir:")
        for asignatura in asignaturas:
            print(f"- {asignatura}")
    else:
        print("\n¡Felicidades! No tienes asignaturas que repetir.")

# Tercer opción
def calcular_promedio(lista_numeros):
    return sum(lista_numeros) / len(lista_numeros)

def calcular_desviacion_tipica(lista_numeros, promedio):
    sumatoria = sum((x - promedio) ** 2 for x in lista_numeros)
    return math.sqrt(sumatoria / len(lista_numeros))

def mostrar_estadisticas():
    muestra = input("Introduce una muestra de números separados por comas: ")
    lista_numeros = [float(x) for x in muestra.split(',')]
    promedio = calcular_promedio(lista_numeros)
    desviacion_tipica = calcular_desviacion_tipica(lista_numeros, promedio)
    print(f"El promedio es: {promedio:.2f}")
    print(f"La desviación típica es: {desviacion_tipica:.2f}")

# Cuarta opción
def submenu():
    lista = []
    while True:
        os.system('cls')
        print("Submenú de la lista")
        print("1. Añadir número a la lista")
        print("2. Añadir número a la lista en una posición")
        print("3. Longitud de la lista")
        print("4. Eliminar el último número")
        print("5. Eliminar un número en una posición")
        print("6. Contar apariciones de un número")
        print("7. Posiciones de un número")
        print("8. Mostrar números de la lista")
        print("9. Salir del submenú")

        opc = int(input("Escoja la opción: "))

        if opc == 1:
            num = float(input("Ingrese un número: "))
            lista.append(num)
            print("Número añadido.")
        
        elif opc == 2:
            num = float(input("Ingrese un número: "))
            pos = int(input("Ingrese la posición (empezando desde 1): ")) - 1
            if 0 <= pos < len(lista):
                lista.insert(pos, num)
                print("Número añadido en la posición")
            else:
                print("Posición no válida")
        
        elif opc == 3:
            print(f"La longitud de la lista es: {len(lista)}")

        elif opc == 4:
            if lista:
                print(f"Último número eliminado: {lista.pop()}")
            else:
                print("La lista está vacía.")

        elif opc == 5:
            pos = int(input("Ingrese la posición (empezando desde 1): ")) - 1
            if 0 <= pos < len(lista):
                eliminado = lista.pop(pos)
                print(f"Número {eliminado} eliminado de la posición {pos + 1}.")
            else:
                print("Posición no válida.")

        elif opc == 6:
            num = float(input("Ingrese un número: "))
            print(f"El número {num} aparece {lista.count(num)} veces en la lista.")

        elif opc == 7:
            num = float(input("Ingrese un número: "))
            posiciones = [i + 1 for i, x in enumerate(lista) if x == num]
            if posiciones:
                print(f"El número {num} aparece en las posiciones: {posiciones}")
            else:
                print(f"El número {num} no está en la lista.")

        elif opc == 8:
            if lista:
                print("Números en la lista:")
                for i, num in enumerate(lista, start=1):
                    print(f"{i}. {num}")
            else:
                print("La lista está vacía.")

        elif opc == 9:
            break
        
        else:
            print("Opción incorrecta, intente de nuevo")
        
        input('\nPresione <ENTER> para continuar')

# Quinta opción

def llenar_diccionario():
    persona = {}
    while True:
        os.system('cls')
        print("Agregar información de una persona")
        print("1. Añadir Nombre")
        print("2. Añadir Edad")
        print("3. Añadir Dirección")
        print("4. Añadir Teléfono")
        print("5. Añadir Correo Electrónico")
        print("6. Finalizar y volver al menú principal")
        
        opc = int(input("Escoja la opción: "))
        
        if opc == 1:
            nombre = input("Ingrese el nombre: ")
            persona['Nombre'] = nombre
            print(f"Diccionario actualizado: {persona}")
        
        elif opc == 2:
            edad = int(input("Ingrese la edad: "))
            persona['Edad'] = edad
            print(f"Diccionario actualizado: {persona}")
        
        elif opc == 3:
            direccion = input("Ingrese la dirección: ")
            persona['Dirección'] = direccion
            print(f"Diccionario actualizado: {persona}")
        
        elif opc == 4:
            telefono = input("Ingrese el teléfono: ")
            persona['Teléfono'] = telefono
            print(f"Diccionario actualizado: {persona}")
        
        elif opc == 5:
            email = input("Ingrese el correo electrónico: ")
            persona['Correo Electrónico'] = email
            print(f"Diccionario actualizado: {persona}")
        
        elif opc == 6:
            break
        
        else:
            print("Opción incorrecta, intente de nuevo.")
        
        input('\nPresione <ENTER> para continuar')

# Sexta opción

def cesta_de_la_compra():
    cesta = {}
    while True:
        os.system('cls')
        print("Cesta de la compra")
        articulo = input("Ingrese el artículo (o escriba 'fin' para terminar): ")
        if articulo.lower() == 'fin':
            break
        try:
            precio = float(input(f"Ingrese el precio para {articulo}: "))
            cesta[articulo] = precio
        except ValueError:
            print("Precio inválido. Por favor ingrese un número.")
        
    # Mostrar la lista de la compra y el costo total
    print("\nLista de la compra:")
    total = 0
    for articulo, precio in cesta.items():
        print(f"{articulo}: {precio:.2f}")
        total += precio
    print(f"\nTotal: {total:.2f}")

    input('\nPresione <ENTER> para continuar')

# Séptima opción

def agenda():
    contactos = {}

    while True:
        os.system('cls')
        print("Agenda")
        print("1. Añadir/Modificar contacto")
        print("2. Buscar contacto")
        print("3. Borrar contacto")
        print("4. Listar todos los contactos")
        print("5. Volver al menú principal")
        
        opc = int(input("Escoja la opción: "))
        
        if opc == 1:
            nombre = input("Ingrese el nombre: ")
            if nombre in contactos:
                print(f"El número de {nombre} es {contactos[nombre]}")
                modificar = input("¿Desea modificarlo? (s/n): ").lower()
                if modificar == 's':
                    telefono = input("Ingrese el nuevo número: ")
                    contactos[nombre] = telefono
                    print("Número actualizado.")
            else:
                telefono = input("Ingrese el número de teléfono: ")
                contactos[nombre] = telefono
                print("Contacto añadido.")
        
        elif opc == 2:
            cadena = input("Ingrese la cadena de búsqueda: ").lower()
            encontrados = {nombre: telefono for nombre, telefono in contactos.items() if nombre.lower().startswith(cadena)}
            if encontrados:
                print("Contactos encontrados:")
                for nombre, telefono in encontrados.items():
                    print(f"{nombre}: {telefono}")
            else:
                print("No se encontraron contactos.")
        
        elif opc == 3:
            nombre = input("Ingrese el nombre a borrar: ")
            if nombre in contactos:
                confirmar = input(f"¿Está seguro de que desea borrar a {nombre}? (s/n): ").lower()
                if confirmar == 's':
                    del contactos[nombre]
                    print("Contacto borrado.")
            else:
                print("El contacto no existe.")
        
        elif opc == 4:
            if contactos:
                print("Lista de todos los contactos:")
                for nombre, telefono in contactos.items():
                    print(f"{nombre}: {telefono}")
            else:
                print("La agenda está vacía.")
        
        elif opc == 5:
            break
        
        else:
            print("Opción incorrecta, intente de nuevo.")
        
        input('\nPresione <ENTER> para continuar')

while True:
    menu()
    opc = int(input('Escoja la opción: '))

    # Primer opción
    if(opc == 1):
        os.system('cls')
        construir_lista()
        input('\nPresione <ENTER> para continuar')
    
    # Segunda opción
    elif opc == 2:
        os.system('cls')
        asignaturas = obtener_asignaturas()
        if asignaturas:
            notas = obtener_notas(asignaturas)
            asignaturas_repetir = eliminar_aprobadas(asignaturas, notas)
            mostrar_asignaturas(asignaturas_repetir)
        else:
            print("No se ingresaron asignaturas.")
        input('\nPresione <ENTER> para continuar')
    
    # Tercer opción
    elif(opc == 3):
        os.system('cls')
        mostrar_estadisticas()
        input('Presione <ENTER> para continuar')
    
    # Cuarta opción
    elif(opc == 4):
        os.system('cls')
        submenu()

    # Quinta opción

    elif opc == 5:
        os.system('cls')
        llenar_diccionario()

    # Sexta opción

    elif opc == 6:
        os.system('cls')
        cesta_de_la_compra()
    
    # Séptima opción

    elif opc == 7:
        os.system('cls')
        agenda()

    elif opc == 8:
        os.system('cls')
        input('Presione <ENTER> para Finalizar')
        break

    else:
        print('Opción incorrecta, intente de nuevo')
        input('Presione <ENTER> para continuar')




    