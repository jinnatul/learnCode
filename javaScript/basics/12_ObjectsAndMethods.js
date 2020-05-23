/* Objects and Methods */

let myInfo = {
    name: "Morol",
    birthYear: 1997,
    family: ['i', 'me', 'my'],
    job: "Programmer",
    isMarried: false,
    calAge: function() {
        this.age = 2020 - this.birthYear;
    }
}

myInfo.calAge()
console.log(myInfo)
/*
    name: "Morol"
    birthYear: 1997
    family: (3) ["i", "me", "my"]
    job: "Programmer"
    isMarried: false
    calAge: ƒ ()
    age: 23
*/
