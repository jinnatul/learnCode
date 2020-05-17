# Print string
myString = "Hi, Morol"
print (myString) # Hi, Morol

# Print First character
print (myString[0]) # H

# Print First 2 characters
print (myString[:2]) #Hi

# Print Last charactert
print (myString[-1]) # l

# Print Last 2 charactert
print (myString[-2 : len(myString)]) # ol

# Print string without first 4 characters
print (myString[4:]) # Morol

# Print 4th to 6th characters
print (myString[4:6]) # Mo

# Print string with skip characters
myString = "JinnatMorol"
print (myString[:]) # JinnatMorol
print (myString[::]) # JinnatMorol
print (myString[::1]) # JinnatMorol
print (myString[::2]) # JnaMrl
print (myString[::3]) # JnMo

# python not support this (myString[0] = 'h')

# Print upper 
print (myString.upper()) # JINNATMOROL

# Print lower 
print (myString.lower()) # jinnatmorol

# Print capitalize 
print (myString.capitalize()) # Jinnatmorol

myString = "Jinnat Morol"
# Print split
print (myString.split()) # ['Jinnat', 'Morol']
print (myString.split('o')) # ['Jinnat M', 'r', 'l']
print (myString.split('n')) # ['Ji', '', 'at Morol']

# Print formatting
myString =  "Jinnatul Islam {}".format("Morol")
print (myString) # Jinnatul Islam Morol

myString =  "{} Islam {}".format("Jinnatul","Morol")
print (myString) # Jinnatul Islam Morol

myString =  "{x} Islam {y}".format(x = "Jinnatul", y = "Morol")
print (myString) # Jinnatul Islam Morol
