'use strict';
///
/*
const bmv = {
    color: "black",
    doors: 4,
    year: 2018,
    speed: 300,
    isRace: true,
    country: "germany",

};


console.log(bmv);
bmv.color = "red";
console.log(bmv);


bmv.eye = "blue";
console.log(bmv);


delete bmv.eye;
console.log(bmv);



*/
///
/*function sayHi(user) {
    console.log("Hi, my name is ", user.firstName + "!");

}


const userTom = {
    firstName: "Tom",
    lastName: "Cruise",

    sayHi: function (){
        console.log("Hi, my name is ", this.firstName + "!")
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }


}

sayHi(userTom);
console.log (userTom.getFullName());*/
///
/*
function Engine(volume, power) {
    this.volume = volume;
    this.power = power;

}

function Car(engine) {
    this.engine = engine;

}
const engine = new Engine(2, 150)
console.log(engine);
*/

//////////////////////////////////////////////
/*function Engine(volume, power) {
    console.log(this)

}
const engine = Engine();*/
///////////////////////////////////////

/*
const userValue = prompt("Please input your value");

switch (userValue) {
    case '1':{
        const test = 10;
    }
    break;
    case '2':{
        console.log(test);
    }
        break;
    case '3':{

    }
        break;
    case '4':{

    }
        break;

}*/
///
/*
for(var i =0; i < 10; i++){
    const test = i;
    console.log(test);
}
console.log(i); // НЕ выведет потому что не в фигурных скобках
*/

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

/*
const f2 = function () {
    console.log("Hello function \"f2\"")

}
f2(); // до функции вызывать нельзя




f(); // можна вызывать до до функциий
function f() {
    console.log("Hello function \"f\"")
}

f();  // и после*/

/*
(function () {
    console.log("Hello function \"f2\"")

})();
// задать и вызвать функцию сразу
*/


// Стрелочные функций

/*
const f = function () {
    console.log("Hello from simple function")

}


const arrowF = () => {
    console.log("Hello from simple function")
};

f();
arrowF();
*/

/*
const f2 = function (name) {
    console.log(`Hello ${name}`)

};


const arrowF2 = name => {
    console.log(`Hello ${name}`)
};

f2("Masha");
arrowF("Masha");
*/

/*
const sum1 = function (a,b) {
    return a +b;
};

// если стрелочная функция сразу возврощает параметры можна отказаться от ретурна
const sum2 = (a,b) => a +b;

console.log(sum1(4,7));
console.log(sum2(4,7));

const pow = a => a * a;
console.log(pow(4));
*/

// Замень одно имя на другое
/*
const swap = (a,b) =>{
    const buf = a;
    a = b;
    b = buf;
};

let x = {
    name: "Masha"
};

let y = {name: "Misha"};

console.log("X = ", x);
console.log("Y = ", y);
swap(x,y);
console.log("X = ", x);
console.log("Y = ", y);*/

////////////////////////////////////////////////////////////////////
/*let arr = [];
arr.push("item1"); // добавили элемент в массив
console.log(arr);
console.log(arr[0]);*/ // вызываем определённый элемент в массиве по индексу

/*let arr = [];
let arr2 = [1, "string", {}, [], () => {console.log('Hello')} ];
for (let i = 0; i < 5; i++){
    const  buf = prompt(`input item [${i}] of 5`)
    arr.push(buf);
}
console.log(arr);

arr.unshift("56");
console.log(arr);
arr.shift(); // удалить первый элемент
arr.pop(); // Удалить последний элемент
arr2[4]();*/

/*///// посчитать зарплату 3 сотрудников в массиве
let arr = [1245, 5643, 56788];
let sum = 0;
for (let i = 0; i<arr.length; i++){
    sum+=arr[i];
}
console.log(sum);*/

/// SET GET

/*// Меняем цвет у машины перекрашиваем
const car = {
    _color: "white",
    _isRepainted: false,

    get color(){
        return this._color;
    },
    set color(value){
        this._color = value;
        this._isRepainted = true;

    }

};
console.log(car);
car.color = "black"

console.log(car);*/

/*function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sayHi = function sayHi() {
        alert(`Hi my name is ${this.name}`)

    }
}

function Employee(name, surname, age,salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.salary = salary;


}
Employee.prototype = new Person();

/!*const employee1 = new Employee('Test','Testovic',30, 12345);*!/
/!*employee1.__proto__ = person1; // добавили в Эмплуе sayHi*!/

// Создаём 10 Employee
const employee = [];
for (let i = 0; i < 10; i++){
    employee.push(new Employee(`Test${i}`,`Testovich${i}`,30 + i, 1345676754 + i))
}*/

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////

/*// Прототиповое наследование
function MyArray() {
    this.length = 0;
}
// функция добовляет в массив
const myArrayProto = {};
myArrayProto.push = function push(value) {
    this[this.length++] = value;

};
// на удаление с массива функция если длина больше
myArrayProto.pop = function pop(){
    if(this.length > 0){
        const result = this[--this.length];
        delete this[this.length];
        return result;
    }
};

MyArray.prototype = myArrayProto;*/

/*// Прототиповое наследование
function MyArray() {
    this.length = 0;

    for (let i = 0; i < arguments.length; i++){
        this.push(arguments[i]);
    }


}
// функция добовляет в массив
const myArrayProto = {};
myArrayProto.push = function push(value) {
    this[this.length++] = value;

};
// на удаление с массива функция если длина больше
myArrayProto.pop = function pop(){
    if(this.length > 0){
        const result = this[--this.length];
        delete this[this.length];
        return result;
    }
};

MyArray.prototype = myArrayProto;*/


// Методы ПЕРЕБОРА

/*const arr = [2,56,87,43,12,45,67,87,54,32,123,1,2,6,8,9,4,3,67,55,44,33,22];
console.log(arr);
// перезаписываем масив и умножаем на 2
arr.forEach( (currentValue, index, arr ) => { arr[index] *= 2 } );
console.log(arr);

const arr2 = [{name: 'Vasy'}, {name: 'Test'}, {name:'Test2'}];
console.log(arr2);
// перезаписываем масив и умножаем на 2
arr2.forEach( (currentValue) => { currentValue.name = "FORACH";} );
console.log(arr2);*/
//////////////////////////////////////////
// Cоздали 20 человек
function User(name, age) {
    this.name = name;
    this.age = age;

}

let i = 0;

const users = [];

while (i++ < 20){
    users.push(new User(`User #${i}`, 10+i))
}

/*!// Filter
const AGE_OF_MAJ = 18;
// Отобрали созершенолетних
const minorsUsers = users.filter(elem => elem.age < AGE_OF_MAJ);
// Отбирали несовершинолетних
const adultUsers = users.filter(user => user.age >= AGE_OF_MAJ);
// изменяя minorUser будет изменяться user ///////
// minorsUsers[6].age = 30 меняем возраст 6 User меняеть во всех масивах

//Недостежимое значение, найти пользывателей со значением тест, вернет ПУСТОЙ МАССИВ
const test = users.filter( user => user.age === "TEST");*/
/*
//EVERY
// все совершинолетние если все пользыватели старше 18 то тогда ТРУ если нет то ФОЛС
const isEveryAdult = users.every(checkEveryArrayItem);

function checkEveryArrayItem(currentValue, index, arr) {
    return currentValue.age > 18;

}
*/
/*// SOME
// Хотя бы одит пользыватель должен быть 18+ тогда ТРУ если нет то ФОЛС
const isSomeUserAdult = users.some(checkUserItem);

function checkUserItem(user) {
    return user.age > 18;
}*/
// MAP
/*// создать массив чисто с возрастом, новый масив с возрастом людей
const result  = users.map(
    (currentValue) => {
        return currentValue.age;
    }
);*/








