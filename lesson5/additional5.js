//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let fn = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};
fn(12);

console.log('-----------------')
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let fnNum = (A, B) => {
    if (A < B) {
       for (let i = A; i <= B; i++) {
           console.log(i);
    }
    }else if (A > B) {
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }else {
        console.log(0);
    }
};
fnNum(95, 65);

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = [9,8,0,4];
//
// let fooIndex = (arr, i) => {
//     let index = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = index;
//     console.log(arr)
// };
// fooIndex(foo, 0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let array = [2,0,8,6,45,0,32,1,0,9,5];
let b=array.length;
let v=b
for(let i=0;i<b;i++){
    if (array[i]===0){
                array[v++]=array[i]
        console.log(i)
        console.log(b)
for (let c=i;c<b;c++){
    let q=c

    array[q]=array[++q]

    console.log(array)

}
        array.length--


             }

}
document.write(array);











// array[b]=i;
//
// let fnZeroEnd = (arr) => {
//     let splice = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             splice= arr.splice(arr[i], i);
//     }
// }
//         console.log(arr)
// };
// fnZeroEnd(array)