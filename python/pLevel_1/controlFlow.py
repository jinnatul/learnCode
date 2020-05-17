# Comparison operations

print (2 == 2) # True

print (2 == "2") # False

print (2 != "2") # True

print ('hi' == 'Morol') # False


# If Else
if 3 > 4:
    print ('Yes')
else:
    print ("No") # No

if 3 > 4:
    print ('3 big')
elif 6 > 4:
    print ('6 big') # 6 big
else:
    print ("No")


# For Loops
myItems = [1, 2, 3, 4, 5]
for item in myItems:
    print (item) 
# 1 
# 2 
# 3 
# 4 
# 5

myItems = {'item1': 1, 'item2': 2, 'item3': 3}
for item in myItems:
    print (item) 
# item2 
# item3 
# item1

for item in myItems:
    print (myItems[item]) 
# 2
# 3 
# 1


myPair = [(1,2), (3,4), (5,6)]
for (p1, p2) in myPair:
    print ("{p1} {p2}".format(p1=p1, p2=p2))
# 1 2
# 3 4
# 5 6

for item in range(5):
    print (item)
# 0
# 1
# 2
# 3
# 4

myList = [1, 2, 3, 4, 5]
ans = []
for num in myList:
    ans.append(num**2)
print (ans) # [1, 4, 9, 16, 25]

print ([num**2 for num in myList]) # [1, 4, 9, 16, 25]

# While loop
pos = 1
while pos <= 5:
    print (pos) 
    pos += 1
# 1 
# 2
# 3
# 4
# 5