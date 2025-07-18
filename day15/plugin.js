// OOP -> object oriented programming style code ---> clean code 

// if(num1>num2){
//     console.log('num1 is greater than num2')
// }

// function compare(num1, num2){
//     if(num1>num2){
//         console.log('num1 is greater than num2')
//     }
// }
// compare(5, 7)
// compare(3, 2)

// class --->( blueprint, structure ), object ( use--> instance  of class, more than one object)
// class User{
//     // class scope
//     fname = "mohamed"; //properties
//     lname = "emad";    //properties
//     create(){ //methods
//         console.log('create user');
//     }
// }

// global scope
// let newUser = new User(); //object
// console.log(newUser.fname);
// newUser.fname="essam"; // object
// console.log(newUser.fname);
// newUser.create();
// let x = new User();
// console.log(x.fname);
///////////////////////////////////////////////////
// 1) Inheritance --> class extends class
// reduce code , duplication , easy to maintance

// user ---> login , delete, edit, update profile
// admin ---> all jops the user ,delete user
class User{
    fname;
    lname;
    constructor(x, y){ // the first action when you create instance of it
        this.fname = x;
        this.lname = y;
    }
    print(){
        demo.innerHTML =`your first name is ${this.fname}, your last name is ${this.lname} `
    }
    test(){
        console.log('test 1')
    }
}

// let newUser = new User("Essam", "Ahmed");
// newUser.print();
class Admin extends User{
    constructor(x, y, age){
        super(x,y);
        this.age = age;
    }
    test(z){
        console.log('test 2', z) 
    }
    deleteUser(){
        console.log('delete user')
    }
}

let newAdmin = new Admin("ebrahim", "mohamed", 50);
// newAdmin.print();
// newAdmin.deleteUser();
newAdmin.test(5);
// let newUser = new User("mohamed" ,"omar");
// newUser.deleteUser();//error
///////////////////////////////////////////////////
// 2) Encapsulation --> security --> properties

// class Media{
//     #image;
//     getImage(){return this.#image;}
//     setImage(img){this.#image = img;}
// }
// let media = new Media();

// // media.image = "example.jpg"
// // console.log(media.image)
// media.setImage('example.jpg');
// console.log(media.getImage());

/////////////////////////////////
// polymorphizm ---> method do the same task , has the same name ---> override, overload
    // override --> content method
    // overload--> content , No parameters

// abstruction
//////////////////////////////////////////////

// html, css, js 
// sass ---> simple writting css 
// js --> advanced js , ajax, asynchoronous, jquery ---> simple writting js
// document.getElementById('lll')
// $('#lll')

// C++

// software enginner
// OOP ---> codezilla
// Solid principle
// Design pattern, Algorithm 
// Datat structure
