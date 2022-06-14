# Morning Beverages

- Coffee, Captain Haddock Mug, Milk, No sugar
- Vodka, Mug, 100ml, Milk
- Water, Bottle, 1L, No Milk, No Sugar
- Kombucha, Glass, 15oz, No Milk, No sugar
- Mint Tea, Mug, 400ml, No Milk, No sugar

Express project with DB

All Urls <- View (EJS) <- Route (TemplateVars) <- urlDatabase (obj)
All Urls <- View (EJS) <- Route (TemplateVars) <- SELECT \* FROM urls

All Urls <- View (EJS) <- Route (TemplateVars) <- getAllUrls() <- SELECT

SELECT \* FROM students WHERE id = 5;

SELECT \*
FROM students
WHERE
id = 5
;

SELECT \* FROM students WHERE id IN (SELECT id FROM students WHERE score > 90);

SELECT \*
FROM students
WHERE
id IN (
SELECT id
FROM students
WHERE score > 90
)
;

CREATE VIEW SELECT id FROM students WHERE score > 90 AS good_grade_students

SELECT \*
FROM students
WHERE
id IN (SELECT \* FROM good_grade_students )
;

SELECT \* FROM ordered_drinks
JOIN persons
ON persons.id = ordered_drinks.person_id
JOIN drinks
ON drinks.id = ordered_drinks.drink_id
