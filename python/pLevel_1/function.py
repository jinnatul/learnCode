# Function call
def myFun():
    print ("Hi, Morol") # Hi, Morol

myFun()

# Return data from Function 
def retMyFun():
    return "Hi, Morol"

result = retMyFun()
print (result)  # Hi, Morol

# Calculate number
def calculate(num1, num2):
    if (type(num1) == type(num2) == type(10)):
        return num1 + num2
    else:
        return "Sorry, need Int"

result = calculate(2, 3)
print (result) # 5
print (type(result)) # <type 'int'>

result = calculate("2", 3)
print (result) # Sorry, need Int


# Filter function
myList = [1,2,3,4,5,6,7,8,9,10]

# Even check
def evenCheck(num): 
    return num % 2 == 0
evens = filter(evenCheck, myList)
print (evens) # [2, 4, 6, 8, 10]

evens = filter(lambda num: num % 2 == 0, myList)
print (evens) # [2, 4, 6, 8, 10]


# Odd check
def oddCheck(num): 
    return num & 1
odds = filter(oddCheck, myList)
print (list(odds)) # [1, 3, 5, 7, 9]

odds = filter(lambda num: num & 1, myList)
print (list(odds)) # [1, 3, 5, 7, 9]
