//BOM => Browser Object Model
// window.document.getElementById('');
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(screen.height)
// console.log(screen.width)
// console.log(screen.availHeight)
// console.log(screen.availWidth)
// console.log(screen.colorDepth)
// console.log(screen.pixelDepth)

// console.log(window.location.protocol)
// console.log(window.location.hostname)
// console.log(window.location.href)
// console.log(window.location.pathname)

function redirect(){

    // window.location.assign("www.google.com"); // still exist in history
    // window.location.replace("www.w3school.com"); // remove it from history
    
}

// function open(){
//     window.open("https://www.google.com", "_blank", "width=400,height=200,left=200,top=100")
// }
// history
// function forward(){
//     window.history.forward()
// }

// function back(){
//     window.history.back()
// }
// window.history.go(0)//reload
// window.history.go(-2)//back 2 step
// window.history.go(1)//forward 1 step

// navigator.language;
// navigator.onLine;

//Timming
// setTimeout(callbackfun, timemillisecond) => do code once after specific time
// let par = document.getElementById('demo');

// setTimeout(function(){
//     par.innerHTML ="blblablaaaa"
// }, 5000);

// setTimeout(test, 5000);
// function test(){
//     par.innerHTML = "dffffffffffff";
// }

// with parameters
// let x = 5;
// let y = 4;
// let handle1r= setTimeout(test, 5000, x, y);
// let handler2= setTimeout(test, 10000, x, y);
// // setTimeout(test(x,y), 5000); // dont execute the time
// function test(num1,num2){
//     par.innerHTML = num1*num2;
// }

// function clearTime(){
//     clearTimeout(handle1r);
//     console.log('successfuly clear')
// }


// set Interval => do code more than once , time interval = between 
// let iterval1 = setInterval(timer , 1000)
// function timer(){
//     const date = new Date();
//     par.innerHTML = date.toLocaleTimeString();
// }
// clearInterval(iterval1);
//////////////////////////////////////////////////
let par = document.getElementById('demo');
let section = document.getElementById('counter-section')
// counter
par.innerHTML = 0;
let x ;
function counter(){
    par.innerHTML = parseInt(par.innerHTML) + 1;//1,2,3
    if(parseInt(par.innerHTML) === 100 ){
        clearInterval(x);
    }
}


// call interval
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entery){
        if(entery.isIntersecting){
           x= setInterval(counter , 5);
        }
    })
}, {threshold:0.5}) 
observer.observe(section)










