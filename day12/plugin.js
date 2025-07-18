// 'use strict'
// function --> block of code
//decleration
// multiplication(); // hoisting
// 3
// function multiplication(){
//     let x = 5;
//     let y = 8;
//     console.log(x*y);
// }
// Invocation
// multiplication();

// 1
// let code = 5666;
// function storeCode(code){
//     // store in database
//     console.log(code);
// }
// storeCode(code);


//2
// function multipy(){
//     let x = 5;
//     let y = 8;
//      return x*y;
// }
// multipy();
// 4)
// let x = 5;
// let y =2;
// function sum(number1, number2){
//     let z = number1+ number2;
//     return z;
// }

// console.log(sum(x, y));


// function sum() {
//     return 5 + 3
//     console.log("hello")
// }
 
// sum();
// console.log(typeof(sum))
 
// console.log(sum())
// console.log(sum)
// pramter decler
// argument invoc
 
// function multiply(num1, num2){
//     console.log(num1*num2)
// }
// // multiply(6, 7)
// let x = 6
// let y = 7
// multiply(x, y)
 
 
// scopping
// any variable declare in global can you see in all scopes
// var x = 1
// let y = 2
// const z = 3
// function test() {
//     // local scope
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// test()
 
// if (true) {
//     // Block Scope
//     console.log(x)
//     console.log(y)
//     console.log(z)
 
// }
// // Glouble Scope
// console.log(x)
// console.log(y)
// console.log(z)
 
// function test() {
//     var x = 1
//     let y = 2
//     const z = 3
//     // locale scope
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// test()
 
// if (true) {
//     // Block Scope
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// // // Glouble Scope
// // console.log(x)
// // console.log(y)
// // console.log(z)
 
// function test() {
//     // locale scope
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// test()
 
// if (true) {
//     // Block Scope
//     var x = 1
//     let y = 2
//     const z = 3
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// // // Glouble Scope
// console.log(x)
// // console.log(y)
// console.log(z)
 
// invocation type
// (function(){
//     console.log("hello")
// })();
 
 
// arrow function
// function multiply(num1, num2){
//     console.log(num1*num2)
// }
// multiply(6, 7)
 
// x(5, 2)
// let x = (num1, num2)=> {console.log(num1*num2)}
 
// let x = function (num1, num2) {console.log(num1*num2)}
// x(5, 2)
 
// let x = function test(num1, num2) {console.log(num1*num2)}
// x(5, 2)
 
// default prameter
// function test(a, b = 5, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// test(2, 4)
 
// rest prameter
// function sum(...args) {
//     let sum = 0
//     for(let arg of args){sum+=arg}
//     return sum
// }
// console.log(sum(4, 5, 6, 5, 5))
 
// function test(a, b, c, d){
//     return arguments.length
// }
// console.log(test(2, 4, 6, 8))
// by value , by referance
// let x = 5
// function test($x) {
//     x += 1
//     console.log(x)
// }
// test(x)
// // x += 1
// console.log(x)

// redeclaration
// var x = 7;
// var x = 'ali';
// console.log(x);

// shadowing
// let x = 'the key';

// function test() {
//     let x = 'the secret';
//     let z = 'the key'
//     console.log(x)
//     console.log(z)
// }
// test()
// console.log(x)

// recursive function
// function countDown(number){
//     console.log(number);//9
//     if(number>0){
//         countDown(number-1);// countDown(8)
//     }
// }
// countDown(10);

// findIndex => index
// find => the first element 
// filter => array of elements

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(function(value, index, array){
//     return value > 18;
// });
// console.log(first);
// let first = numbers.find(myFunction);
// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(first);

// let first = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(first);

// shadwing
// the secret
// the key 
// the key

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find((value, index, array)=> value > 18);
// console.log(first);

// var fruits = ['apple', 'banana', 'kiwi'];
// // fruits.forEach(callbackfun);
// fruits.map(function(val,ind){
//     val+=' fruit';
//     console.log(val);
// });
// console.log(fruits);


// let text = "Omar ahmed";
// const myArr = Array.from(text);
// console.log(myArr);

// spread operater
// const arr1 = [1, 2, 3];
// // const arr2 = [...arr1]; // copy value
// const arr2 = arr1; // refrence

// // arr1[2] = 10;
// console.log(arr1)
// console.log(arr2)
// console.log(Math.min(2));
// array -> store more than one value
// object -> store more than one value
// let arr=[5, 'black', 12345]
// arr[0]
// key value pairs
// literal
// var BMW ={
//     // properties
//     id: 5,
//     id: 8,
//     color: 'black',
//     code: 12345,
//     isFast: true,
//     move: function(){ // method
//         console.log('move');
//         console.log(this.id);
//         // BMW.id
//     }
// }
// accessing object notation
// console.log(BMW['color']); // access property
// console.log(BMW.color);
// BMW.move();
// BMW.id = 6; //edit property
// console.log(BMW.id);


// BMW.brand = 'BMW';
// console.log(BMW);

let userName = (prompt('enter your age'));
console.log(userName);
console.log(typeof(userName));
Number
// [20, 60]
// let x = new Map([
//     ['girls', 20],
//     ['boys', 30],
//     ['boys', 60],

// ]);
// x.set('instructors', 5);
// console.log(x instanceof Map);
// console.log(x.get('boys'))
// console.log(x.size)
// x.delete('girls');
// console.log(x)
// x.clear()
// console.log(x)


