class Circle():
    pi = 3.1416

    def __init__(self, radius):
        self.radius = radius

    def Area(self):
        return self.radius * self.radius * Circle.pi
    
    def setRadius(self, newRadious):
        self.radius = newRadious

myCircle = Circle(3)
print (myCircle.Area()) # 28.2744

myCircle.setRadius(5)
print (myCircle.Area()) # 78.54