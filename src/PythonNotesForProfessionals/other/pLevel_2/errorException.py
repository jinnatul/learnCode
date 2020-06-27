### Normal case ###
myFile = open('test.txt', 'r')
myFile.write('Hi, This is Morol')
print ('Welcome Morol') 

## Output ## 
# IOError: [Errno 2] No such file or directory: 'test.txt'


### Error handling case ###
try:
    myFile = open('test.txt', 'r')
    myFile.write('Hi, This is Morol')
except IOError:
    print ('Error: could not find this file')
else:
    print ('Success :)')
    myFile.close()
print ('Welcome Morol')

## Output ## 
# Error: could not find this file
# Welcome Morol