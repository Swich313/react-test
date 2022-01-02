// Задание 1:
const city = "Zaporizhzhia",
      country = "Ukraine", 
      population = 722713,
      isStadium = true;

// Задание 2:
let height = 40;
let width = 70;
let square = height*width;
console.log(square + " кв.см");

// Задание 3:
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const distance = time*(speedOfFirst+speedOfSecond);

// Задание 4:
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
if(randomNumber<20){
    console.log("randomNumber меньше 20");
} else if (randomNumber>50){
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}

// Задание 5:
switch(true){
    case randomNumber<20:
    console.log("randomNumber меньше 20");
    break;
    case randomNumber>50:
    console.log("randomNumber больше 50");
    break;
    default:
    console.log("randomNumber больше 20, и меньше 50");
}

let string = "Some NOT important text and NOT useful methods";
let newNum = "1.992";
let x=Number("1.992");
console.log(string);
console.log(x);

// let company = prompt('Какая компания создала JavaScript?', '');

// if (company == 'Netscape') {
//     alert('Верно!')
// }
//   alert('Неправильно.');
// const answer = confirm('Are you 18?');
// console.log(answer);
const isTrue = true,
      isFalse = true,
      res =  !!isFalse;
      console.log(res);