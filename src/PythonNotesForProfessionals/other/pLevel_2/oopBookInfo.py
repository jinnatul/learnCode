class Book():
    def __init__(self, title, author, page): # Like constractor
        self.title = title
        self.author = author
        self.page = page

    def __str__(self): # return some string
        return "Book Title: {}\nBook Author: {}\nBook Page: {}".format(
            self.title, 
            self.author, 
            self.page
        )

    def __len__(self): # Overwrite len method
        return self.page
    
    def __del__(self): # Delete data from memory
        print ("Delete this book info from memory ")

myBook = Book('Python', 'Morol', 100)

print (myBook)
# Book Title: Python
# Book Author: Morol
# Book Page: 100

print (len(myBook)) # 100

del myBook # Delete this book info from memory 