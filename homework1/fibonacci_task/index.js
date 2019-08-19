//Написати функцiю, яка вичисляє число фiбоначi для заданої позицiї послiдовностi.

// let fibNumber = (position) => {
// //    n = (n-1) + (n-2);
//     let numberOne = 0;
//     let numberTwo = 1;
//     let numb;
//     for (let i = 2; i <= position; i++) {
//         numb = numberOne + numberTwo;

//         if (i%2 == 0){
//             numberOne = numb;
//         } else {
//             numberTwo = numb;
//         }
//     }
//     return numb;
// }


// console.log(fibNumber(77));

//Написати функцiю, яка вичисляє позицiю послiдовностi фiбоначi для заданого числа.

let findFibSeq = (sum) => {
    let fib;
    let partOne = 0;
    let partTwo = 1;
    let i = 0;
    while (i <= sum) {
        fib = partOne + partTwo;

        if (i % 2 == 0) {
            partOne = fib;
        } else {
            partTwo = fib;
        }

        i++;
        if (fib == sum) {
            return i;
        }
    }
}


console.log(findFibSeq(21));