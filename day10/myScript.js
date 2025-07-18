// "use strict"
// low level lanaguge  
// machine lang. high performance , difficult to learn

// high level language 
// human lang. easy to learn
// JS

// js --> interpreter code
// external file
//1) variable --> container store data
// decleration + intialization varible
// var x = 5;
// var x = 5.3; //number
// var y = "ahmed"; //string
// var z = true; //boolean
// var m = null; // object, null
// var m = "";
// Dynamic Type
// var x; // undefined, undefined
// x = 3; 
// x= "naglaa";

// var y = 123e5;
// // var y = 123* 10 ** 5;
// console.log(typeof(x));
// console.log(x);

// var n$ =5555;

// var Fname = "omar";
// var fname = "ali";
// console.log(Fname)

// redcleration
/* fgjj
gfhgfh
gfhghf */
// var carName = "Volvo";
// var carName;
// console.log(carName);
// console.log(typeof(carName));

// var carName = "Volvo";
// carName = "mai";

// name conventions
// pascal case FirstName
// camel case firstName // js
// snake case first_name
// css notation  first-name

////////////////////////////////////////////////////////////////
// operations
// 1) Arithmetic
// var x = 5;
// var y = 7;
// var z = x + y;

// console.log(x%3);

// increment
// var x = 5;
// console.log(x);
// x++; //postfix
// // console.log(x);
// ++x //prefix
// console.log(x);

// decrement
// var x = 5;
// console.log(x);
// x--; //postfix
// console.log(x);
// --x //prefix
// console.log(x);

// var x = 7;
// // console.log(x**3);
// console.log(Math.pow(x, 3));
// 2) Assignment
// var x = 5;

// var y = x;

// x = 7;

// console.log(x)
// console.log(y)


// var x = 5;
// // x = x + 3;
// x += 3;

// console.log(x)
// + concatenation
// var y = 1;
// var z = 9;
// var x = " omar ";

// console.log(y+z+x);

// 3) comparison
// var y = "0"; // string
// var z = 5; // number

// var x = 10;

// // console.log(y == z); // boolean  value true
// // console.log(y === z); // boolean value, datatype false


// console.log(y != z); // boolean  value false
// console.log(y !== z); // boolean value, datatype true

// 4)Logical Operators
// and or not
// and the two condition is true --> true
// console.log(5 > 13 && 7< 10)

// or only one condition is true --> true
// console.log(5 > 71 || 7< 0)

// //not
// console.log(5 != 4)
//////////////////////////////////////
// falsy and truthy

// console.log("0" == 0);

///////////////////////////////////////////////////////
// string method
// index--> 0 1 2 3 4 
// index -->     -3 -2 -1
// var x = "hello world";
// console.log(x[-1]);
// console.log(x[12]);
// console.log(x[(x.length)-1]);
// console.log(x.length-1);
// console.log(x.at(-3));


// console.log(x.length); // 11

// index-->position 0--->...
// console.log(x.charAt(6));
// var x = "Hello" ;
// var y = "World!" ;
// var text = x+ " " + y;

// var text = "Apple, Banana, Kiwi";
// var part1 = text.slice(7,13);    // 7 ---->12
// var part2 = text.slice(7);       // 7 to the end of string
// var part3 = text.slice(-7);     //-1 ---> -7
// var part4 = text.slice(-12,-6)      //-12 --> -7

// var part5 = text.substr(7,6);
//  var convert1 = text.toLowerCase();
// console.log(convert1);
// var text = "Hello world \uD800";
// console.log(text.isWellFormed());

// console.log(text);
// console.log(text.toWellFormed());

// var text1 = "     Hello           World!     ";
// var text2 = text1.trim();
// console.log(text1);
// console.log(text2);

// var text = "reem";
// text = text.padEnd(4,"!llll");


// var numb = 1019063981;
// var newText = numb.toString(); //"5"
// console.log(typeof(numb))
// console.log(typeof(numb.toString()))
// console.log(newText.padStart(11,"0"));

// var text = "Hello world! ";
// var result = text.repeat(2);
// console.log(result)

// var text = "Please visit Microsoft, and Microsoft!";
// // var newText = text.replace("Microsoft", "w3");
// var newText = text.replaceAll("Microsoft", "w3");
// console.log(newText)

// let text = "Please locate where 'locate' occurs!";
// console.log(text.lastIndexOf("locate"));
// console.log(text.indexOf("locate"));

// string template
// var x = "hello 'ahmed'";
// var x = `hello "ahmed" he's very ....`;
// // var x = `hello 
// // "ahmed" he's 
// // very ....`;
// // console.log(x);

// var y = ' good day!';
// var age = 30;
// // console.log(x + y +" your age is "+age+" goodbye");
// console.log(`${x} ${y} your age is ${age} goodbye`);
// let, const, var

// 1) reassigne value let, var /// no const 
// var x = 6;
// x= 5;
// console.log(x);
// let x = 6;
// x= 5;
// console.log(x);
// const x = 6;
// x= 5;
// console.log(x);
// 2) redecleration var // no let , const
// var x = 6;
// var x = 'ahmed';
// console.log(x);

// let x = 6;
// let x = 5;
// console.log(x);

// const x = 6;
// const x = 5;
// console.log(x);

// hoisting var// let, const no hoisting
// x = 10;
// var x ;
// console.log(x)

// y = 20;
// const y ;
// console.log(y)

// x = 5;
// console.log(x)

// let x = {'name1' : 6};
// console.log(typeof(x))
// console.log(typeof(x.toString()))
// value of 

var x = 2;
// let x = 2;
// console.log(x);