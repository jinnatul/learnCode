/* Scoping and the Scope Chain */


let a = 'hello '
first()

function first() {
    let b = 'hi '
    second()

    function second() {
        let c = 'hey'
        console.log(a + b + c)
    }
}
// hello hi hey

let aa = 'hello '
first()

function first() {
    let bb = 'hi '
    second()

    function second() {
        let cc = 'hey'
        third();
    }
}

function third() {
    let dd = 'Morol'
    // console.log(cc) // Uncaught ReferenceError: cc is not defined
    // console.log(aa + ' ' + dd) // Uncaught ReferenceError: Cannot access 'aa' before initialization
}
