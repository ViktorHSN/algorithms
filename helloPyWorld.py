# primitive types
import math

a_number = 1000
a_float = 4.99
a_boolean = True | False
a_string = "Python Programming"
print(a_boolean)

# Strings
course_name = "Python Programming"
print(len(course_name))
print(course_name[0])
print(course_name[-1])
print(course_name[0:3])
print(course_name[0:])
print(course_name[:3])

scaped_course = "Python \"Programming"
print(scaped_course)

first = "Victor"
last = "Nascimento"
full = f"{first} {last}"
print(f"My fullname is {full.upper()} and i have {10+18} years old")
print(full)

print(first.find("icto"))
print("Nasc" in full)

print(10 + 3)
print(10 - 3)
print(10 * 3)
print(10 / 3)
print(10 // 3)  # augmented division -> returns the positive part of the operation
print(10 % 3)
print(10 ** 3)


print(math.log10(10))


print("BAG" == "bag".upper())

temp = 23
if temp > 40:
    print("its f** hot in here")
    print("turn air conditioning unit on")
elif temp < 10:
    print("its cold")
    print("turning air conditioning unit off")
else:
    print("temp is fine")


age = 17
print("allowed" if age >= 18 else "not allowed punk")

if 15 <= age or age >= 18:
    print("Eligible")
else:
    print("not Eligible")

for number in range(1, 10, 2):
    print("Attempt", number, number * ".")
    break

succesfull = False

for i in range(1, 10, 2):
    print("Attempt", i, i * ".")
    if succesfull:
        print("success")
        break
else:
    print(f"failed {i} times")

a = [1, "2"]

for j in a:
    print(j*3)

number_visiting = 100
while number_visiting > 0:
    print(number_visiting)
    number_visiting //= 2
