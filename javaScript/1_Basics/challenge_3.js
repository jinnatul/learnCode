/* challenge_3 */
function tipCalculator(bill) {
    let percentage;
    if (bill < 50) percentage = .2;
    else if (bill >= 50 && bill < 200) percentage = .15
    else percentage = .1
    return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

let finalAns = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips, finalAns);

// (3) [18.599999999999998, 9.600000000000001, 26.8] 
// (3) [142.6, 57.6, 294.8]
