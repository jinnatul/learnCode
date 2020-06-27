import testNameMain1

print ('Hi, Morol from testNameMain2.py')
testNameMain1.myFun()

if __name__ == '__main__':
    print ('testNameMain2.py run directly')
else:
    print ('testNameMain2.py has been Imported')


## python testNameMain2.py ##
# Hi, Morol from testNameMain1.py
# testNameMain1.py has been Imported
# Hi, Morol from testNameMain2.py
# Print myFun() from testNameMain1.py
# testNameMain2.py run directly