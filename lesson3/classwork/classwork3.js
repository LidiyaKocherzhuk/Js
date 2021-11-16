// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let b = 0;
while (b < array2.length) {
    console.log(array2[b]);
    b++;
}
console.log(`------------------`);

//     2. перебрати його циклом for
for (let c = 0; c < array2.length; c++) {
    console.log(array2[c])
}
console.log(`------------------`);

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let d = 0;
while (d < array2.length) {
    if (d % 2 !== 0) {
    console.log(`Index ${d} - ${array2[d]}`);
    }
    d++;
}
console.log(`------------------`);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let e = 0; e < array2.length; e++) {
    if (e % 2 !== 0) {
    console.log(`Index ${e} - ${array2[e]}`);
    }
}
console.log(`------------------`);

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let f = 0;
while (f < array2.length) {
    if (array2[f] % 2 === 0) {
        console.log(array2[f])
    }
    f++;
}
console.log(`------------------`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(array2[i]);
    }
}
console.log(`------------------`);

// 7. замінити кожне число кратне 3 на слово "okten"
for (let g = 0; g < array2.length; g++) {
    let array2Element = array2[g];
    if (array2Element % 3 === 0) {
        array2Element = "okten";
    console.log(array2Element);
    }
    console.log(array2[g])
}
console.log(`------------------`);

// 8. вивести масив в зворотньому порядку.
for (let i = array2.length - 1; i >= 0; i--) {
    console.log(array2[i])
}
console.log(`------------------`);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//     1. перебрати його циклом while
let h = array2.length - 1;
while (h >= 0) {
    console.log(array2[h]);
    h--;
}
console.log(`------------------`);

// 2. перебрати його циклом for
for (let i = array2.length - 1; i >= 0; i--) {
    console.log(array2[i])
}
console.log(`------------------`);

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = array2.length - 1;
while (j >= 0) {
    if (j % 2 !== 0) {
    console.log(`Index ${j} - ${array2[j]}`);
    }
        j--;
}
console.log(`------------------`);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = array2.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(`Index ${i} - ${array2[i]}`);
    }
}
console.log(`------------------`);

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let k = array2.length-1;
while (k >= 0) {
    if (array2[k] % 2 === 0) {
        console.log(array2[k]);
    }
    k--;
}
console.log(`------------------`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = array2.length - 1;i>=0;i--){
    if (array2[i] % 2 === 0) {
        console.log(array2[i]);
    }
}
console.log(`------------------`);

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = array2.length - 1; i >= 0; i--) {
    if (array2[i] % 3 === 0) {
        array2[i] = "okten";
    }
    console.log(array2[i]);
}
console.log(`------------------`);
