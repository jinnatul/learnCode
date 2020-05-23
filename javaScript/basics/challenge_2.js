/* challenge_2 how is the big avg */
let avgMorol = (90, 80, 70) / 3;
let avgJinnat = (80, 70, 60) / 3;
let avgArif = (70, 60, 50) / 3;

avgMorol == avgJinnat 
    ? console.log('Both are same')
    : avgMorol > avgJinnat 
        ?   console.log('Morol is Big')
        :   console.log('Jinnat is Big');

// Morol is Big

if (avgMorol > avgJinnat && avgMorol > avgArif) {
    console.log('Morol is Big')
}
else if (avgJinnat > avgMorol && avgJinnat > avgArif) {
    console.log('Jinnat is Big')
}
else if (avgArif > avgMorol && avgArif > avgJinnat) {
    console.log('Arif is Big')
}
else {
    console.log('There is a draw')
}
// Morol is Big


