/* The 'this' Keyword in Practice */

let info1 = {
    name: 'Morol',
    yearOfBirth: 1997,
    callAge: function() {
        console.log(this) // {name: "Morol", yearOfBirth: 1997, callAge: ƒ}
        console.log(2020 - this.yearOfBirth) // 23

        /*
        function innerFun() {
            console.log(this)
        }
        innerFun()
        */
    }
}

info1.callAge()

let info2 = {
    name: 'Jinnat',
    yearOfBirth: 1995
}

info2.callAge = info1.callAge;
info2.callAge() 
// {name: "Jinnat", yearOfBirth: 1995, callAge: ƒ}
// 25
