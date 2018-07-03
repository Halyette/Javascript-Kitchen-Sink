//JS kitchen sink objective 3.

var name = "Halyette";
    console.log(name);

//JS kitchen sink objective 4.

const NUMBER_OF_STATES = 50;
    console.log(NUMBER_OF_STATES);

//JS kitchen sink objective 5.

var result = 5 + 4;
    console.log(result);

//JS kitchen sink objective 6.

function FirstName(L) {

if (FirstName.charCodeAt(0) == 76) {
  alert("Back of the line!");
} else {
  alert("You're Next!");
}
}

//JS kitchen sink objective 7.

//Add comments to code

//JS kitchen sink objective 8 & 9.

function sayHello() {
  alert("Hello World!");
}
console.log(sayHello());

//JS kitchen sink objective 10 & 11.

function checkAge (name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

console.log(checkAge("Charles", 21));
console.log(checkAge("Abby", 27));
console.log(checkAge("James", 18));
console.log(checkAge("John", 17));

//JS kitchen sink objective 12 &13.

let list = ["mushrooms", "cucumber", "eggplant", "corn"]
    for (veggies in list) {
        console.log(list[veggies]);
    }

//JS kitchen sink objective 14 & 15.

var names = [
    {
        name: "Leah",
        age: 21
    },
    {
        name: "Gail",
        age: 33
    },
    {
        name: "Jaden",
        age: 17
    },
    {
        name: "Mike",
        age: 23
    },
    {
        name: "Joe",
        age: 18
    }
];

for ( var i = 0; i < names.length; i++) {
    checkAge(names[i].name, names[i].age);
}

//JS kitchen sink objective 16.

let getLength = "length";
    console.log(getLength.length);

//JS kitchen sink objective 17 & 18.

let greeting = "Hello World";

    console.log(greeting.length);


    if (greeting % 2 == 0){
        console.log("The world is nice and even!");
    } else {
        console.log("The world is an odd place!");
    }
