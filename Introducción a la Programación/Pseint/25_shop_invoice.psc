//Enter the algorithm to issue the invoice for a purchase of 
//several items (6) from which one or more units are purchased. 
// IVA is 19%

Algoritmo sin_titulo
	Definir article_1, article_2, article_3, article_4, article_5, article_6 Como Real
	Definir price_1, price_2, price_3, price_4, price_5, price_6 Como Real
	Definir subtotal, IVA, total Como Real
	
	Escribir "Article 1 units: "
	Leer article_1
	Escribir "Article 2 units: "
	Leer article_2
	Escribir "Article 3 units: "
	Leer article_3
	Escribir "Article 4 units: "
	Leer article_4
	Escribir "Article 5 units: "
	Leer article_5
	Escribir "Article 6 units: "
	Leer article_6
	
	Escribir "Unit price article 1"
	Leer price_1
	Escribir "Unit price article 2"
	Leer price_2
	Escribir "Unit price article 3"
	Leer price_3
	Escribir "Unit price article 4"
	Leer price_4
	Escribir "Unit price article 5"
	Leer price_5
	Escribir "Unit price article 6"
	Leer price_6
	
	subtotal = (article_1 * price_1) + (article_2 * price_2) + (article_3 * price_3) + (article_4 * price_4) + (article_5 * price_5) + (article_6 * price_6)
	IVA = subtotal * 0.19
	total = subtotal + IVA
	
	Escribir "The total value of the invoice: ", total
FinAlgoritmo
