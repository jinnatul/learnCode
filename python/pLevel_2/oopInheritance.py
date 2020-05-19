class Animal():
    def __init__(self):
        print ('Animal created')
    
    def eat(self):
        print ('Eating')

class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print ('Doc create')

    def eat(self):
        print ('Dog Eating')

myDog = Dog()
myDog.eat()

## Before overrite eat method
# Animal created
# Doc create
# Eating

## After overrite eat method
# Animal created
# Doc create
# Dog Eating
