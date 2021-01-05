//console.log(document.getElementById('header'));
//console.log(document.getElementsByClassName('tab-navigation'));
//console.log(document.getElementsByTagName('li'));
//console.log(document.querySelectorAll('.social li'));
//document.querySelectorAll('.tab-navigation li')[3].innerHTML='замененный текст';
//document.write('привет джэЭсс');

/*
var number = 5;
var number_1 = 6;
// через доп переменную res
//var res = number + number_1;
//console.log("сложение " + res);
console.log("cложение " + (number / number_1));
//console.log("вычитание " + )

var num = 3;
//num = num + 1;
num += 10;
console.log("Result " + num);

//при сложении строк и цифр - строка всегда главная
var str1 = Number("12");
//var str1 = 12;
var str2 = Number("22");
console.log("cложение " + (str1 + str2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.E);
console.log("Math: " + Math.min(4,6,7,7,8,2,3,4,0))
console.log("Math: " + Math.max(4,6,7,7,8,2,3,4,0))


// булевые выражения проверяются короткой 
//записью без равно:просто название is на ТРУ
//записью без нарвно, но перед именем переменной
//вослицательный знак на ФЕЛС

var num = 15;
var is = true;
if(num == 5 || is) {
    console.log("ok")
} else if(num < 15){
    console.log("its bad")
} else if(num == 15){
    console.log("ALL GOOD");
} else {
    console.log("no ne strashno");
}



var stro ="slovo1";
switch(stro){
    case "4":
      console.log("ne");  
    case "slovo":
      console.log("no ne strashno"); 
    break;
    default:
      console.log("err");
}


//массивы
var arr = [5,6,"bukvyy", 11, 098];
console.log(arr.length);

var matr = [[5,6], ["bukvyy", 33], [11, 098]
]
matr[1][0] = "900";
console.log(matr);


//циклы

for(var i = 0; i < 10; i++){
    console.log(i)
}

var j = 1000;
while(j > 100){
    console.log(j);
    j -= 100; 
}

var x = 0;
do {
    console.log(x);
    x++
}while(x < 50);

for(var i = 10; i <=20; i += 2){
    if(i >15)
    break;
    console.log(i)
}

for(var i = 10; i <=20; i++){
    if(i % 2 == 0)
    continue;
    console.log(i)
}

var arr = [5,6,7,8,9,0];
for(var i = 0; i< arr.length; i++)
console.log("Element " + i + ": " + arr[i])

alert("lksndfvdnfdldl lfmnm");

var data = confirm("вы готовы?");
console.log(data);

prompt("cjnsjvnwejvnrskjdvnrnv", 20)



// функции
  

function info(word){
    console.log(word + "!");
}

info("hello");


function summa(arr){
    var sum = 0;
    for(var i=0; i < arr.length; i++)
      sum += arr[i];
    
    console.log(sum);

}
var arr = [5,6,7,9];

summa(arr);


// переменные

var num = 10;
function info(){
    console.log(num);
}
info();



//события
var cont = 0;
function onClickButton(el) {
 cont++;
 el.innerHTML = "вы нажали на кнопку " + cont;
}
function onInput(el) {
    console.log(el.value);
}
*/


// формы и ДЖЭЭСС

var text = document.getElementById('text');
text.style.color = 'red';

text.innerHTML = "New <br> str"
// другая форма записи
// document.getElementById('text').style.color = 'blue';

//выбор по айди с выводом в консоль
var spans = document.getElementsByTagName('span');
for(var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}

