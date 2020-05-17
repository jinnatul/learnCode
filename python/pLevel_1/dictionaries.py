# Print dictionaries
myDiction = {
    "key1": "Jinnat",
    "key2": "Morol"
}

print (myDiction) # {'key2': 'Morol', 'key1': 'Jinnat'}

print (myDiction['key2']) # Morol

myDiction = {
    "key1": "Jinnat",
    "key2": "Morol",
    "key3": {
        "key": [1, 2, "Morol"]
    }
}
print (myDiction['key3']) # {'key': [1, 2, 'Morol']}

print (myDiction['key3']['key']) # [1, 2, 'Morol']

print (myDiction['key3']['key'][2]) # Morol

print (myDiction['key3']['key'][2].upper()) # MOROL

myDiction['key3'] = 'Jinnat Morol'
print (myDiction) # {'key3': 'Jinnat Morol', 'key2': 'Morol', 'key1': 'Jinnat'}