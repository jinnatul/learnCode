# P Print list
myList = [1, 2, 3]
print (myList) # [1, 2, 3]

myList = [1, 2, 3, 'string', ['one', 4, ['another', 'Morol'], 8], 'hm']
print (myList) # [1, 2, 3, 'string', ['one', 4, ['another', 'Morol'], 8], 'hm']

print (len(myList)) # 6

print (myList[0]) # 1

print (myList[4]) # ['one', 4, ['another', 'Morol'], 8]

print (myList[4][0]) # one

print (myList[4][2]) # ['another', 'Morol']

print (myList[4][2][1]) # Morol


# Print Range numbers
myList = [1, 2, 3, 4, 5]

print (myList[0]) # 1

print (myList[-1]) # 5

print (myList[:2]) # [1, 2]

print (myList[2:]) # [3, 4, 5]

print (myList[1:4]) # [2, 3, 4]

print (myList[-2: len(myList)]) # [4, 5]

# Insert List
myList[0] = 'Morol'
print (myList) # ['Morol', 2, 3, 4, 5]

myList.append('Morol')
print (myList) # ['Morol', 2, 3, 4, 5, 'Morol']

myList2 = ['x', 'y', 'z']
myList.append(myList2)
print (myList) # ['Morol', 2, 3, 4, 5, 'Morol', ['x', 'y', 'z]]

myList2 = ['a', 'b', 'c']
myList.extend(myList2)
print (myList) # ['Morol', 2, 3, 4, 5, 'Morol', ['x', 'y', 'z'], 'a', 'b', 'c']


# Remove list
myList = [1, 2, 3, 4, 5]
element = myList.pop()
print (myList) # [1, 2, 3, 4]
print(element) # 5

element = myList.pop(0)
print (myList) # [2, 3, 4]
print(element) # 1

# Reverse & sort list
myList = [5, 2, 3, 4, 1]
myList.reverse()
print (myList) # [1, 4, 3, 2, 5]

myList.sort()
print (myList) # [1, 2, 3, 4, 5]

# Print Matrix
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print (matrix) # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

first_column = [row[0] for row in matrix]
print (first_column) # [1, 4, 7]

# Define list range
myList = list(range(5))
print (myList) # [0, 1, 2, 3, 4]

# Even numbers 0 to 10
myList = list(range(0,11, 2))
print (myList) # [0, 2, 4, 6, 8, 10]
