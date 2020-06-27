## Probolem - 1
# Given a list of integer and return true if the sequence of numbers 1, 2, 3
def checkSequence(arr):
    for num in range(len(arr)-2):
        if arr[num] == 1 and arr[num + 1] == 2 and arr[num + 2] == 3:
            return True
    return False
    
print (checkSequence([1,2,3,4,4,5])) # True
print (checkSequence([1,2,7,4,4,5])) # False
print (checkSequence([1,2,6,1,2,3])) # True


## Probolem - 2
# Given a string, return a new string made from even index 
def makeNewString (str):
    myStr = ""
    for index in range(len(str)):
        if (index % 2 == 0):
             myStr += str[index]
    return myStr
    
print (makeNewString('Jinnatul')) # Jnau
print (makeNewString('Morol')) # Mrl
print (makeNewString('Hello')) # Hlo


## Probolem - 3
# Given 2 string and return true either of string appears at the very end of other string
def checkEachOther(str1, str2):
    str1 = str1.lower()
    str2 = str2.lower()
    return (str2.endswith(str1) or str1.endswith(str2))
    #return str1[-len(str2):] == str2 or str2[-len(str1):] == str1 

print (checkEachOther("Hiabc", "abc")) # True
print (checkEachOther("Morol", "mo")) # False
print (checkEachOther("Morol", "ol")) # True


## Probolem - 4
# Given a string, return a string where for every char in the original
def doubleChar(str):
    myStr = ""
    for char in str:
        myStr += char*2 
    return myStr

print (doubleChar('Morol')) # MMoorrooll
print (doubleChar('Jinnatul')) # JJiinnnnaattuull


## Probolem - 5
# Given a array and find even number count
def evenCount(arr):
    cnt = 0
    for num in arr:
        if num % 2 == 0:
            cnt+=1
    return cnt

print (evenCount([1, 2, 3, 4, 5])) # 2
print (evenCount([1, 2, 3, 4, 5, 6])) # 3
