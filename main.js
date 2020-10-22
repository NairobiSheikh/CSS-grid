// // E2 Write a function that shows a greeting in an HTML div.
// function greeting() {
//   document.querySelector('.item1').innerHTML = 'Hello World';
// }
// greeting();
// // E3
// function greet(name) {
//   document.querySelector('.item2').innerHTML = 'Hello ' + name;
// }
// greet('Mellow');
// // E4
// function showColor(color) {
//   document.querySelector('.item3').innerHTML = 'your shirt color is ' + color;
// }
// showColor('blue');
// // E6
// function num(a,b,c) {
//   return a * b * c;
// }
// document.querySelector('.item4').innerHTML = num(12, 3, 67);


//need to grab div and both buttons
let item1 = document.querySelector('.item1');
let btn1 = document.querySelector('#btn1');
let two = document.querySelector('#two');

//btn.eventlistener to target the div

btn1.addEventListener('click', function(){
  //hide the div by using if statement
  if(item1.style.display === 'none'){
    item1.style.display = 'block';
  } 
  else {
    item1.style.display = 'none';
  }
});
btn2.addEventListener('click', function(){
  //hide the div by using if statement
  if(item1.style.display === 'block'){
    item1.style.display = 'none';
  } 
  else {
    item1.style.display = 'block';
  }
});

//input:click a button, 
//and see a greeting in a div with 
//the format:
//“Hello [name goes here].”
// document.querySelector('#mybutton').addEventListener('click', function() {
//   let text = document.querySelector('#mytext').value;
//   document.querySelector('#output').innerHTML = 'Hello ' + text;
// });
let a = 5;
let b = 7;
document.querySelector('#mybutton').addEventListener('click', function(){add(a,b)});
function add(a,b){
   let result = a + b;
   document.querySelector('.item3').innerHTML = result;
}
//using a for loop show all unmber from 1 
//to 100
for(let i = 0; i<101; i++){
  document.querySelector('.item2').innerHTML = i;
};