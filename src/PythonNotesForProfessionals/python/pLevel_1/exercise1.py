## Probolem - 1
myStr = 'django'

print (myStr[0]) # d

print (myStr[-1]) # 0

print (myStr[:4]) # djan

print (myStr[-2: len(myStr)]) # go

print (myStr[::-1]) # ognajd (Reverse string using indexing)


## Probolem - 2
myList = [3, 7, [1, 4, 'Hello']] 
print (myList) # [3, 7, [1, 4, 'Hello']]

myList[2][2] = 'Morol' # Reassign 'Hello' to be 'Morol'
print (myList) # [3, 7, [1, 4, 'Morol']]


## Probolem - 3
myDec1 = {'key': 'Morol'}
print (myDec1['key']) # Morol

myDec2 = {'key': {'key1': 'Morol'}}
print (myDec2['key']['key1']) # Morol

myDec3 = {'key': [{'key1': ['This is ', ['Morol']]}]}
print (myDec3['key'][0]['key1'][1][0]) # Morol


## Probolem - 4
myList = [1, 2, 2, 3, 3, 3] # find unique value 
print (set(myList)) # set([1, 2, 3]) / {1, 2, 3}


## Probolem - 5
name = 'Morol'
num = '1'
myStr = "Hi, This's {name} and I'm {num} man army.".format(name=name, num=num)
print (myStr) # Hi, This's Morol and I'm 1 man army.
