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