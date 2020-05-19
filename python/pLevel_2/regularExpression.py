import re

patterns = ['Morol', 'Jinnatul']

text = 'Hi, I am Morol'

for pattern in patterns:
    print ("I'm searching for " + pattern)

    if re.search(pattern, text):
        print ('Match pattern :)')
    else:
        print ('Sorry not here !!!')

## Output ##
# I'm searching for Morol
# Match pattern :)
# I'm searching for Jinnatul
# Sorry not here !!!

match = re.search('Morol', text)
print (match.start()) # 9 (number index match)

splitItem = '@'
myString = 'test@gmail.com'

print (re.split(splitItem, myString)) # ['test', 'gmail.com']

print (re.findall('Morol', 'This is Morol, Morol is a one man army')) # ['Morol', 'Morol']

def findAllMatchItem(patterns, text):

    for pat in patterns:
        print ('Searching for patterns {}'.format(pat))
        print (re.findall(pat, text))
        print ('\n')

text = 'sdsd..sssddd...sdddsddd..s.d..sd..ds..dsds.sddd.dsss'
patterns = ['sd*']
findAllMatchItem(patterns, text)
# Searching for patterns sd*
# ['sd', 'sd', 's', 's', 'sddd', 'sddd', 'sddd', 's', 'sd', 's', 'sd', 's', 'sddd', 's', 's', 's']

patterns = ['sd+']
findAllMatchItem(patterns, text)
# Searching for patterns sd+
# ['sd', 'sd', 'sddd', 'sddd', 'sddd', 'sd', 'sd', 'sddd']

patterns = ['sd?']
findAllMatchItem(patterns, text)
# Searching for patterns sd?
# ['sd', 'sd', 's', 's', 'sd', 'sd', 'sd', 's', 'sd', 's', 'sd', 's', 'sd', 's', 's', 's']

patterns = ['sd{2}']
findAllMatchItem(patterns, text)
# Searching for patterns sd{2}
# ['sdd', 'sdd', 'sdd', 'sdd']

patterns = ['sd{1,3}']
findAllMatchItem(patterns, text)
# Searching for patterns sd{1,3}
# ['sd', 'sd', 'sddd', 'sddd', 'sddd', 'sd', 'sd', 'sddd']

patterns = ['s[sd]+']
findAllMatchItem(patterns, text)
# Searching for patterns s[sd]+
# ['sdsd', 'sssddd', 'sdddsddd', 'sd', 'sds', 'sddd', 'sss']

text = 'This is a string! but is has punctuation. How can we remove it ?'
patterns = ['[!.?]+']
findAllMatchItem(patterns, text)
# Searching for patterns [!.?]+
# ['!', '.', '?']

patterns = ['[^!.?]+']
findAllMatchItem(patterns, text)
# Searching for patterns [^!.?]+
# ['This is a string', ' but is has punctuation', ' How can we remove it ']

patterns = ['[a-z]+']
findAllMatchItem(patterns, text)
# Searching for patterns [a-z]+
# ['his', 'is', 'a', 'string', 'but', 'is', 'has', 'punctuation', 'ow', 'can', 'we', 'remove', 'it']

patterns = ['[A-Z]+']
findAllMatchItem(patterns, text)
# Searching for patterns [A-Z]+
# ['T', 'H']

text = 'This is a string with number 12345 and a symbol #Morol'
patterns = [r'\d+']
findAllMatchItem(patterns, text)
# Searching for patterns \d+
# ['12345']

patterns = [r'\D+']
findAllMatchItem(patterns, text)
# Searching for patterns \D+
# ['This is a string with number ', ' and a symbol #Morol']

patterns = [r'\s+']
findAllMatchItem(patterns, text)
# Searching for patterns \s+
# [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

patterns = [r'\S+']
findAllMatchItem(patterns, text)
# Searching for patterns \S+
# ['This', 'is', 'a', 'string', 'with', 'number', '12345', 'and', 'a', 'symbol', '#Morol']

patterns = [r'\w+']
findAllMatchItem(patterns, text)
# Searching for patterns \w+
# ['This', 'is', 'a', 'string', 'with', 'number', '12345', 'and', 'a', 'symbol', 'Morol']

patterns = [r'\W+']
findAllMatchItem(patterns, text)
# Searching for patterns \W+
# [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' #']
