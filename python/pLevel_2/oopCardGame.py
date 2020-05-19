from random import shuffle

SULTE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:

    def __init__(self):
        print ('Creating new ordered Deck!')
        self.allCards = [(s, r) for s in SULTE for r in RANKS]

    def shuffle(self):
        print ('Shuffling Deck')
        shuffle(self.allCards)
    
    def split_in_half(self):
        print ('Shuffling Deck')
        return (self.allCards[:26], self.allCards[26:])


class Hand:

    def __init__(self, cards):
        self.cards = cards

    def __str__(self):
        return "Contains {} cards".format(len(self.cards))

    def add(self, addedCards):
        self.cards.extend(addedCards)
    
    def removeCard(self):
        return self.cards.pop()

class Player:

    def __init__(self, name, hand):
        self.name = name
        self.hand = hand

    def playCard(self):
        drawnCard = self.hand.removeCard()
        print ("{} has placed: {}\n".format(self.name, drawnCard))
        return drawnCard

    def removeWarCards(self):
        warCards = []
        if len(self.hand.cards) < 3:
            return self.hand.cards
        else:
            for x in range(3):
                warCards.append(self.hand.cards.pop())
            return warCards
    
    def stillHasCards(self):
        return len(self.hand.cards) != 0 # return true if player still has cards left     

### Game Zone ###
print ('Welcome to war :) ')

# create new deck and split in the half
myDeck = Deck()
myDeck.shuffle()
half1, half2 = myDeck.split_in_half()

# create both players
computer = Player('computer', Hand(half1))

#name = input("What is your name ?")
user = Player('name', Hand(half2))

totalRounds = 0
warCount = 0

while user.stillHasCards() and computer.stillHasCards():
    totalRounds += 1
    print ('Time for a new round!')
    print ('Here are the current standings')
    print (user.name + " has the count " + str(len(user.hand.cards)))
    print (computer.name + " has the count " + str(len(computer.hand.cards)))
    print ('Play a card!\n')

    tableCards = []

    cCard = computer.playCard()
    uCard = user.playCard()

    tableCards.append(cCard)
    tableCards.append(uCard)

    if cCard[1] == uCard[1]:
        warCount += 1

        print ('War!!!')

        tableCards.extend(user.removeWarCards())
        tableCards.extend(computer.removeWarCards())

        if RANKS.index(cCard[1]) < RANKS.index(uCard[1]):
            user.hand.add(tableCards)
        else:
            computer.hand.add(tableCards)
    else:
        if RANKS.index(cCard[1]) < RANKS.index(uCard[1]):
            user.hand.add(tableCards)
        else:
            computer.hand.add(tableCards)
    
print ('Game over, number of rounds: ' + str(totalRounds))
print ('A war happened ' + str(warCount) + 'times')
print ('Does the computer still have cards ?')
print (str(computer.stillHasCards()))
print ('Does the user still have cards ?')
print (str(user.stillHasCards()))



### Output Game  ###
# Welcome to war :) 
# Creating new ordered Deck!
# Shuffling Deck
# Shuffling Deck
# Time for a new round!
# Here are the current standings
# name has the count 26
# computer has the count 26
# Play a card!

# computer has placed: ('S', '2')

# name has placed: ('S', '7')

# Time for a new round!
# Here are the current standings
# name has the count 27
# computer has the count 25
# Play a card!

# computer has placed: ('C', '2')

# name has placed: ('S', '7')

# Time for a new round!
# Here are the current standings
# name has the count 28
# computer has the count 24
# Play a card!

# computer has placed: ('C', '4')

# name has placed: ('S', '7')

# Time for a new round!
# Here are the current standings
# name has the count 29
# computer has the count 23
# Play a card!

# computer has placed: ('D', '4')

# name has placed: ('S', '7')

# Time for a new round!
# Here are the current standings
# name has the count 30
# computer has the count 22
# Play a card!

# computer has placed: ('D', 'J')

# name has placed: ('S', '7')

# Time for a new round!
# Here are the current standings
# name has the count 29
# computer has the count 23
# Play a card!

# computer has placed: ('S', '7')

# name has placed: ('D', '4')

# Time for a new round!
# Here are the current standings
# name has the count 28
# computer has the count 24
# Play a card!

# computer has placed: ('D', '4')

# name has placed: ('C', '4')

# War!!!
# Time for a new round!
# Here are the current standings
# name has the count 24
# computer has the count 28
# Play a card!

# computer has placed: ('S', 'Q')

# name has placed: ('S', '5')

# Time for a new round!
# Here are the current standings
# name has the count 23
# computer has the count 29
# Play a card!

# computer has placed: ('S', '5')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 24
# computer has the count 28
# Play a card!

# computer has placed: ('S', 'Q')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 25
# computer has the count 27
# Play a card!

# computer has placed: ('D', 'J')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 26
# computer has the count 26
# Play a card!

# computer has placed: ('S', '7')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 27
# computer has the count 25
# Play a card!

# computer has placed: ('S', '10')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 28
# computer has the count 24
# Play a card!

# computer has placed: ('S', '2')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 29
# computer has the count 23
# Play a card!

# computer has placed: ('C', '2')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 30
# computer has the count 22
# Play a card!

# computer has placed: ('C', '4')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 31
# computer has the count 21
# Play a card!

# computer has placed: ('D', '4')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 32
# computer has the count 20
# Play a card!

# computer has placed: ('D', '3')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 33
# computer has the count 19
# Play a card!

# computer has placed: ('D', '8')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 34
# computer has the count 18
# Play a card!

# computer has placed: ('S', '8')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 35
# computer has the count 17
# Play a card!

# computer has placed: ('D', '9')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 36
# computer has the count 16
# Play a card!

# computer has placed: ('D', '10')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 37
# computer has the count 15
# Play a card!

# computer has placed: ('C', '6')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 38
# computer has the count 14
# Play a card!

# computer has placed: ('H', '10')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 39
# computer has the count 13
# Play a card!

# computer has placed: ('C', '5')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 40
# computer has the count 12
# Play a card!

# computer has placed: ('H', '9')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 41
# computer has the count 11
# Play a card!

# computer has placed: ('C', 'K')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 42
# computer has the count 10
# Play a card!

# computer has placed: ('D', '5')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 43
# computer has the count 9
# Play a card!

# computer has placed: ('H', '8')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 44
# computer has the count 8
# Play a card!

# computer has placed: ('D', '6')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 45
# computer has the count 7
# Play a card!

# computer has placed: ('S', 'K')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 46
# computer has the count 6
# Play a card!

# computer has placed: ('H', '2')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 47
# computer has the count 5
# Play a card!

# computer has placed: ('H', '4')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 48
# computer has the count 4
# Play a card!

# computer has placed: ('C', '9')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 49
# computer has the count 3
# Play a card!

# computer has placed: ('S', '4')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 50
# computer has the count 2
# Play a card!

# computer has placed: ('H', 'Q')

# name has placed: ('S', 'A')

# Time for a new round!
# Here are the current standings
# name has the count 51
# computer has the count 1
# Play a card!

# computer has placed: ('C', '7')

# name has placed: ('S', 'A')

# Game over, number of rounds: 37
# A war happened 1times
# Does the computer still have cards ?
# False
# Does the user still have cards ?
# True