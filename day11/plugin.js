// var x = 3;
// Number
// convert datatype
//   console.log(Number(true));
//   console.log(Number(false));
//   console.log(Number("10")); 
//   console.log(Number("  10"));
//   console.log(Number("10  "));
//   console.log(Number(" 10  "));
//   console.log(Number("10.33")); 
//   console.log(Number("10,33")); //NAN
//   console.log(Number("10 33"));//NAN
//   console.log(Number("John"));//NAN
//   console.log(Number("J"));
//   console.log("hellow"/5); //NaN
//   console.log(10/0);// infinity
/////////////////////////////////////////////////////////
// console.log(parseInt(true));  // NAN
// console.log(parseInt(false)); // NAN
// console.log(parseInt("10")); 
// console.log(parseInt("  10"));
// console.log(parseInt("10  "));
// console.log(parseInt(" 10  "));
// console.log(parseInt("10.33")); 
// console.log(parseInt("10,33"));
// console.log(parseInt("10 33"));
// console.log(parseInt("John")); // NAN
// console.log( parseFloat("10.33")); // decimal number
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log(Number.isInteger("10"));
// console.log(Number.isFinite(123/0));
// console.log(Number.isNaN("John") == Number.isNaN(123)); // not fact
// console.log(Number.isNaN(123));
// Number.isSafeInteger(10);
// Number.isSafeInteger(12345678901234567890);

// number properties
////////////////////////////////////////////////////

// Array --->list of elements, ordered, indexed, Heterogeneous, dynamic size

// let x = 2;
// let y = 5;
// let z = 7;
// let arr = [2, 5, "ahmed", false, null];
// let arr2 = [1, 2, 3 ,6]; 
// // console.log(arr[0]); // get element
// // arr[0] = 10; // edit value
// // console.log(arr) 
// arr[5] = "essam";
// console.log(arr);
// console.log(typeof(arr2));// object

// const cars = new Array("Saab", "Volvo", "BMW");
// const cars2 = new String("Saab");
// const cars3 = new Number(20);

// const fruits = ["Banana", "Orange", "apple", "Mango"];
// console.log(typeof(fruits));
// console.log(Array.isArray(fruits)); //true
// console.log(fruits instanceof Array); //true
// console.log(fruits); //array

// console.log(typeof(fruits.toString()));
// console.log(fruits.toString()); //string
// console.log(fruits.length);

// fruits[fruits.length+1] = "Kiwi"
// console.log(fruits)
// console.log(fruits[5]); //undefined
// console.log(fruits[-1]);//undefined
// fruits[fruits.length] = 'kiwi'; //fruits[4]
// console.log(fruits)

// fruits.sort(); //original
// console.log(fruits);
// const numbers =[20, 3, 17, 13, 9];
// console.log(numbers.sort())
// js donot include associtive array
// const x = [
//     id : 5;
//     fname: 'ahmed'; 
// ]

// const x = [4, 2, 3 ,[1, 5, 7]];
// console.log(x[3][0]);
// const y = [5, 'ahmed', 'omar', [2, 'demiana', 8] , [true, 'fatima']]
// // console.log(y[4][1]);
// console.log(y.at(-1).at(-1));

// const fruits =['banana', 'apple', 'kiwi'];
// console.log(fruits.toString())
// console.log(fruits.join("*"))
// fruits.pop(); // remove last element
// fruits.shift(); // remove first element

// fruits.push('orange'); // add in the last of array
// fruits.unshift('orange'); // add in the first of array
// delete fruits[0];
// console.log(fruits);
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const x = myBoys.concat(myGirls);
// console.log(x);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// months.toSpliced(0, 1);
// console.log(months.toSpliced(0, 1));
// const spliced = months.toSpliced(0, 1);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log(citrus);
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

// search, find , filter
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(function (value, index, array) {
//   return value > 18;
// });
// Math

// console.log(Math.round(5.35));
// console.log(Math.round(5.55));
// console.log(Math.round(5.75));

// console.log(Math.floor(5.35));
// console.log(Math.floor(5.55));
// console.log(Math.floor(5.75));


// console.log(Math.ceil(5.35));
// console.log(Math.ceil(5.55));
// console.log(Math.ceil(5.75));

// console.log(Math.trunc(5.35));
// console.log(Math.trunc(5.55));
// console.log(Math.trunc(5.75));

// const mydate= new Date();
// console.log(mydate);

/////////////////////////////////////////////////

// statments types 
// 1) conditional statments 
// if  --> condition true ---> result
// complex conditional, logical operators
// 50%,50%
// if(5 > 10){
//     console.log('success');
// }else{
//     console.log('faild')
// }
// var temp = 30;
// if(temp >0 && temp <= 20){
//     // var x=20;
//     console.log('cold');
// }else if(temp>20 && temp<=30){
//     console.log('warm');
// }else if(temp>30 && temp<=40){
//     console.log('hot');
// }else{
//     console.log('blablabla');
// }
// console.log(x);
// if( 3> 3){
//     console.log('omar')
// }
// console.log('ali');
// equility
// let type ="mkkkk";
// switch(type){
//     case 'bird':
//         console.log('bird');
//         break;

//     case 'animal':
//         console.log('animal');
//         break;

//     case 'human':
//         console.log('human');
//         break;

//     default:
//         console.log('please write correct type');
// }
// ternary operator --> simple code(readable), performane
// (5<10) ? console.log('success'): console.log('faild');
// (5>10) ? console.log('success'): null;
// nested if

// if( num1 > num2){
//     if(num1 == 5){
//         console.log('fgtfd')
//     }
// }


// let x = "0";
// // console.log(x == 0);
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);

// console.log('ebrahim');
// console.log('ebrahim');
// console.log('ebrahim');
// console.log('ebrahim');
// console.log('ebrahim');
// console.log('ebrahim');

// let arr = ['banana', 'apple', 'kiwi', 'orange'];
// arr[0]+=' fruit';
// arr[1]+=' fruit';
// arr[2]+=' fruit';
// arr[3]+=' fruit';

// console.log(arr)
//1) forloop
// let arr = ['banana', 'apple', 'kiwi', 'orange'];
// for(intial value ; condition ; step)
// for(let i = 0; i < arr.length; i++){
//     arr[i]+=' fruit';
// }

// for(let i = arr.length-1; i >= 0; i--){
//     arr[i]+=' fruit';
// }
// console.log(arr)
// let i =0;
// while(i< arr.length){
//     arr[i]+=' fruit';
//     i++;
// }
// console.log(arr)

// let i =0;
// do{
//     arr[i]+=' fruit';
//     i++;
// }
// while(i<arr.length);
// console.log(arr)

// let i = 0;
// do{
//    console.log('ok');
//    i++;
// }
// while(i == 1);

// let i = 0;
// while(i == 1){
//    console.log('ok');
//    i++;
// }
// break, continue
let arr = ['banana', 'apple', 'kiwi', 'orange'];
// for(let i = arr.length-1; i >= 0; i--){
    
//     if(i === 2){
//         // continue;['banana fruit', 'apple fruit', 'kiwi', 'orange fruit']
//         // break;['banana', 'apple', 'kiwi', 'orange fruit']
//     }
//     arr[i]+=' fruit';
// }
// console.log(arr);
// Create a Set
// const letters = new Set();
// letters.add('a');
// letters.add('b');
// letters.add('c');
// const letters = new Set(['a','b','c','a','m']);

// console.log(letters[0]);//undefined
// console.log(letters);
//for of, for in

// Create a Set
const letters = new Set(["a","b","c"]);
console.log(letters instanceof Set);

// Create an Iterator
const myIterator = letters.values();
console.log(myIterator instanceof Object);//object
