# Tuple

myTuple = (1, 2, 3, 4, 5)
print (myTuple) # (1, 2, 3, 4, 5)

print (myTuple[0]) # 1

myTuple = ('Morol', 2, True, 4, False)
print (myTuple) # ('Morol', 2, True, 4, False)

# Tuple not support this type of assign (myTuple[0] = 'Jinnat')

# Set
mySet = set()

# Insert on set
mySet.add(1)
mySet.add(2)
mySet.add(True)
mySet.add(2)
mySet.add(0.5)

print (mySet) # set([0.5, 1, 2]) / {0.5, 1, 2}

# Remove from set
item = mySet.pop()
print (mySet) # set([1, 2]) / {1, 2}
print (item) # 0.5