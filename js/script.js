const list1 =document.getElementById("name").innerHTML ="Heloo"
console.log(list1);

const list2 =document.getElementsByClassName('footer-menu-items');
console.log(list2);

const list3 = document.getElementsByName('h5').innerHTML = "Hi"
console.log(list3)

const list = document.getElementsByTagName('h5').innerHTML ="Lishu"
console.log(list)

const  list4 =document.getElementsByClassName('footer-container');
console.log(list4)

const  list5 =document.getElementsByClassName('footer');
console.log(list5)

const  list6 =document.getElementsByTagName('ul');
console.log(list6)

const  list7 =document.getElementsByTagName('li');
console.log(list7)

const  list8 =document.getElementsByTagName('a');
console.log(list8)

const  list9 =document.getElementsByTagName('h4');
console.log(list9)

const  list10 =document.getElementsByTagName('h2');
console.log(list10)

const  list11 =document.querySelectorAll('ul');
console.log(list11)

const  list12 =document.querySelectorAll('h2');
console.log(list12)



var newElement = document.createElement('li')
newElement.textContent = "This my first web"
console.log(newElement);

// var listen = document.getElementById('list');
// listen.appendChild(newElement);
// console.log(newElement);

// var listen = document.getElementById('list');
// listen.insertBefore(newElement,listen.firstElementChild);
// console.log(newElement);

// var listen = document.getElementById('list');
// listen.insertBefore(newElement,listen.firstElementChild);
// listen.removeChild(newElement)
// console.log(newElement);

var replaceElement = document.createElement('li');
replaceElement.textContent = 'i am replce you';

// list.replaceChild(replaceElement);
console.log(replaceElement);















function Myfunction(a,b){
    console.log("Hi this is Geetha s k")
    sum = a+b;
    console.log(sum);
}

Myfunction(10,20);













var arr = [1,2,3,4,5,6,7,8];
const mul = arr.map(function(n){
    return n*2;
})
console.log(mul)

// const arr1 =[2,3,5,4,8];
const even = arr.filter(function(val){
    return val%2===0;
})
console.log(even)

// const Simple = [1,2,3,4,5,6];
const Reduce = arr.reduce(function(n,value){
    return n+value;
})
console.log(Reduce)

const reduce = arr.reduce((n,value)=>{
    return n-value;
})
console.log(reduce)
arr.pop();
function ArrayOperations(){
    {
    var arr2 = [1,2,3];
    console.log(arr2)
    arr2 = [1,2,3,4];
    console.log("127",arr2)
    }
    console.log("129",arr2);
}
ArrayOperations();
// arr2 = [2];
var finalarr = 10;
console.log("134",arr2)



