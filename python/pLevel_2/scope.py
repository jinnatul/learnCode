# Example - 1
num = 25
def myFun1():
    num = 100
    return num

print (myFun1()) # 100
print (num) # 25


# Example - 2
num = 25
def myFun2():
    global num
    num = 100
    return num

print (myFun2()) # 100
print (num) # 100


# Example - 3
name = "I am global"
def myFun3():
    name = "Morol"
    def callFun():
        print ("Hello, " + name)
    callFun()

myFun3() # Hello, Morol
print (name) # I am global


# Example - 4
name = "I am global"
def myFun4():
    def callFun():
        print ("Hello, " + name)
    callFun()

myFun4() # Hello, I am global
print (name) # I am global
