// Finding elements
// let header= document.getElementById('mainHeader'); // one element
// let header= document.querySelector('#mainHeader'); // one element

// let header= document.getElementsByTagName('h1'); // htmlcollection
// let paras = document.getElementsByClassName('par') // html collection
// let par= document.querySelector('.par'); // first element
// let pars= document.querySelectorAll('.par'); // Node list

// let pars = document.getElementsByTagName('p');
// let pars = document.querySelectorAll('p');

// console.log(pars)
/////////////////////////////////////////////////////////////
// change content

// document.getElementById('mainHeader').innerHTML = "New text"
// document.getElementById('mainHeader').innerText = "New text"
// document.getElementById('mainHeader').textContent = "New text"
// document.getElementById('main').innerHTML ="<h2> kkkkk</h2>"

// console.log(document.getElementById('mainHeader').innerHTML) // space, tag comment
// console.log(document.getElementById('mainHeader').innerText)
// console.log(document.getElementById('mainHeader').textContent)

// document.getElementById('test').src = "2.png"
// let image = document.getElementsByTagName('img')[0];
// image.removeAttribute('width');
// console.log(image.hasAttribute('sdfdf'));
// image.hasAttributes
// console.log(image.src.nodeType);
// image.setAttribute('alt', 'cheif')
// image.src = "2.png"

// document.getElementById('main').innerHTML = Date();
// document.write('kkkkkk')
// let header= document.getElementById('mainHeader');
// header.style.color ="blue"


// let header= document.getElementById('mainHeader');
// console.log(header.firstChild.nodeValue); //value dom
// console.log(header.nodeName); // H1
// console.log(header.nodeType);

///create element
// const para = document.createElement("p");// create tag
// const text = document.createTextNode("Helloooooooooooo!"); // create text
// para.appendChild(text); // <p> hellooooo!</p>


// let parent = document.getElementById('main'); // find main
// parent.appendChild(para); // <div id="main"> <p> helloooooo</p></div>

// event 
// function test(){
//     let header= document.getElementById('mainHeader');
//     header.innerHTML =" ooopppss"
// }
let header= document.getElementById('mainHeader');
// header.addEventListener('click', function(event){
//     alert('helllo');
// });
// more than one event , donot exist
header.addEventListener('mouseover', test1)
header.addEventListener('mouseover', test2)
header.addEventListener('mouseover', test3)

function test1(){
    header.style.color = 'red';
}
function test2(){
    header.style.backgroundColor = 'black';
}
function test3(){
    header.innerHTML = "hhhhhh"
}

document.getElementById('removeEvent').addEventListener('click', remove);
function remove(){
    header.removeEventListener('mouseover',test2)
}