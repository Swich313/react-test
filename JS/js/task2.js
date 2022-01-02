// Задание 1
for(let i=10;i<51;i=i+2){
    console.log(i);
}

// Задание 2
const person = {
    firstName: "Андрей",
    lastName: "Пальцун",
    age: 29,
    hasPet: true
};

// Задание 3
const array = [
    'я в Симбирск,',                    //0
    'в трактире.',                      //1
    'с утра',                           //2
    'В ту же ночь',                     //3
    'Я остановился',                    //4
    'для закупки',                      //5
    'что и было поручено Савельичу.',   //6
    'приехал,',                         //7
    'где должен был',                   //8
    'нужных вещей',                     //9
    'отправился по лавкам',             //10
    'пробыть сутки',                    //11
    'Савельич'                          //12
]
array[7] = 'приехал ';
array[9] = 'нужных вещей,';
const result = (array[3] + " " + array[7] + array[0] + array[8] +" " +
 array[11] + " " + array[5] + " " + array[9] + " " + array[6] + array[4] + " " + array[1] + 
" " + array[12] + " " + array[2] + " " + array[10]);
console.log(result);

// Задание 4
const printName = (firstName, lastName) =>{
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
printName(person.firstName, person.lastName);

// Задание 5
let number = 21;
while(number < 68){
console.log(number);
number+=2
}
