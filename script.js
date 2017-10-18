"use strict";

//alert("Hello, world!");

var myVariable;//создалли переменную, но не положили значениеб первая иструкция
myVariable=10; //вторая иструкция
console.log(myVariable);
var myString="hello";
console.log(myString);

var myBoolean=false;
console.log(myBoolean);

var myNull=null;
console.log(myNull);

var myUndefined=undefined;
console.log(myUndefined);

//условия
var season = 'autumn';
if (season==='autumn') { //если наш сезон осень, то
  console.log("Ура, осень!");
}
else{
  console.log("значит не осень");
}
// цикл loop
var number=10;
for (var number = 0; number < 10; number++) {
  console.log("Давайте посчитаем от нуля до девяти: " + number); //
}
//function
function multiply(number1, number2, number3) {//перемножение
  var result=number1*number2*number3;
  return result;
}
console.log(multiply(1,2,3));
console.log(multiply(2,3,4));
//DOM
var myArticle = document.getElementById("article-1");
myArticle.classList.add('myClass');

var showMe = document.getElementById('show-me');
showMe.onclick = function(){
  alert('TEXT after click');
}

var eventListener = document.getElementById('event-listener');
eventListener.addEventListener("click", function(){
  this.classList.toggle('toggled');
});
