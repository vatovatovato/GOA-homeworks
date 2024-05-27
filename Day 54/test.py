# hw1
num1 = 5
num2 = 10
print(num1 + num2)
print(num1 - num2)
print(num1 * num2)
print(num2 / num1)

#hw2 

#შემოვიტან 4 წიგნს და აქედან 2 გავუკეთებ 10% ფასდაკლებას და 2-ს 20%-იანს

# Define variables for book names and prices
book1_name = "Book 1"
book1_price = 20

book2_name = "Book 2"
book2_price = 25

book3_name = "Book 3"
book3_price = 30

book4_name = "Book 4"
book4_price = 35

discount_10_books = [book1_name, book2_name]
discount_20_books = [book3_name, book4_name]

for book in discount_10_books:
    if book == book1_name:
        book1_price *= 0.9
    elif book == book2_name:
        book2_price *= 0.9

for book in discount_20_books:
    if book == book3_name:
        book3_price *= 0.8
    elif book == book4_name:
        book4_price *= 0.8

print(f"{book1_name}: ${book1_price}")
print(f"{book2_name}: ${book2_price}")
print(f"{book3_name}: ${book3_price}")
print(f"{book4_name}: ${book4_price}")

#hw3
mom = 40
dad = 40
mom_future = mom + 25
dad_future = dad + 25
print(mom_future)
print(dad_future)

#hw 4
person_name = input('what is your name')
person_lastname = input('what is your lastname')
person_age = input('what is your age')
person_liveplace = input('where you live')
person_profesion = input('what is your profesion')
person_hobby = input('what is your hobby')

print(person_name + ' ' + person_lastname + ' is ' + person_age + ' years old, he lives in ' + person_liveplace + ' he working in ' + person_profesion + ', hes favourite hobby is ' + person_hobby)

#hw 5
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")
