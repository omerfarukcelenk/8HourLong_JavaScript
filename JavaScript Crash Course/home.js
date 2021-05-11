/*

    console.log("Hello");

    console.log("Hello");
    alert("hello this is faruk basgan");

*/

/*
                        Variables
*/

/*

    var b = "coffe";
    console.log(b);

    var someNumber = 32;
    console.log(someNumber);

    document.getElementById('someText').innerHTML = 'Hello Git puller'

    var age = prompt("What is your age?");

    document.getElementById('someText').innerHTML = "My age is " + age;

*/

/*
                    Numbers in JavaScript
*/

/*

    var num1 = 10;

        // Increment num1 by 1
    num1++;

        // Decrement num1 by 1
    num1--;

        // Divide, Multiply *, remainder %

    console.log(num1 % 7);

        // Increment/decrement by 10

    num1 += 10;
    console.log(num1);

*/

/*
                    Functions in JavaScript
*/

/*

    function fun() {
        console.log("this is a function");
    }

    // Call
    fun();

*/

/*  let's create a function that take in a name and says hello followed by your name
    for Example

    Name: "Faruk"
    Return: "Hello Faruk"
*/

/*
    function greeting(yourName) {
        var result = "Hello" + " " + yourName; // String Concatenation
        console.log(result);
    }
    var name = prompt("what is your name?");

    greeting(name);

            // How do arguments work in functions?
            // How do we add 2 numbers together in a function?

    function sumNumbers(num1, num2) {
        var result = num1 + num2;
        console.log(result);
    }

    sumNumbers(5, 8);
*/


/*
                While and For in JavaScript
*/

/*

// WHILE

    var num = 0;

    while (num < 100){
        num +=5;
        console.log(num);
    }

// FOR

    for (let num = 0; num <= 100; num++) {
        console.log(num);
    }

*/

/*
                DATATYPES in JavaScript
*/

/*

    let yourAge = 18; // number
    let yourName = 'Faruk'; // string
    let name = { first: 'Faruk', last: 'Çelenk' } // object
    let truth = false; // boolean
    let groceries = ["Apple", "Banana", "Oranges"] // array
    let random; // undifined
    let nothing = null // value null

*/

/*
                Strings methods in JavaScript
*/

/*
    let fruit = 'Banana,Apple,Orange,BlackBery';
    let moreFruits = 'banana\napple'; // new line

    console.log(fruit.length);
    console.log(fruit.indexOf('nan'));
    console.log(fruit.slice(2, 5));
    console.log(fruit.replace('ban', '123'));
    console.log(fruit.toUpperCase(fruit));
    console.log(fruit.toLowerCase(fruit));
    console.log(fruit.toUpperCase());
    console.log(fruit.toLowerCase());
    console.log(fruit.charAt(2));
    console.log(fruit[2]);
    console.log(fruit.split(',')); // split by a comma
    console.log(fruit.split('')); // split by a characters
*/

/*
                Arrays in JavaScript
*/


/*
    let fruits = ["Banana", "Apple", "Orange", "Pineapples"]

    fruits = new Array("Banana", "Apple", "Orange", "Pineapples");

    console.log(fruits[0]); // access value at index 0nd

    fruits[0] = "Pear";
    console.log(fruits);

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

// array common methods

    console.log("to string", fruits.toString());
    console.log(fruits.join(' | '));
    console.log(fruits.pop(), fruits); // removes last item
    console.log(fruits.push("Blackberries"), fruits); // appends
    console.log(fruits[4]);
    fruits[fruits.length] = "New Fruits";
    console.log(fruits);
    fruits.shift(); // remove first element from a array
    console.log(fruits);
    fruits.unshift("Kiwi"); // add first element to a array
    console.log(fruits);
    let vegatables = ["Asparagus", "Tomato", "Broccoli"];
    let allGroceries = fruits.concat(vegatables);  // combine arrays
    console.log(allGroceries);
    console.log(allGroceries.slice(5, 8));
    console.log(allGroceries.reverse());
    console.log(allGroceries.sort());


    let someNumbers = [5, 10,2, 25,3,255,1,2,5,334,321,2];

    console.log(someNumbers.sort(function(a,b) {return a - b})); // sorted in ascending order
    console.log(someNumbers.sort(function(a,b) {return b - a})); // sorted in descending order


    let emptyArray = new Array();
    for(let num = 0; num <= 10; num++){
        emptyArray.push(num);
    }
    console.log(emptyArray);

*/

/*
                Objects in JavaScripts
*/

//      Dictionaries in Python

    // let student = {
    //     first: 'Melih',
    //     last: "Gündoğan",
    //     age: 21,
    //     height: 178,
    //     studentInfo: function () {
    //         return this.first + "\n" + this.last + "\n" + "age : " +
    //             this.age + "\n" + "height: " + this.height;
    //     }
    // };

    // console.log(student.first);
    // console.log(student.last);
    // student.first = 'Faruk'; // change value
    // console.log(student.first);
    // student.age++;
    // console.log(student.age);
    // console.log(student.studentInfo());


//     Conditionals, Control flows (if else)
//     18-35 is my target demographic 
//     && => AND
//     || => OR

    // var age = 45;

    // if ((age >= 18) && (age <= 35)) {
    //     status = "target demo;"
    //     console.log(status);
    // } else {
    //     status = "not my audience"
    //     console.log(status);
    // }

// Switch statements
// differentiate between weekday vs. weekend
// day 0 => Sunday => weekday
// day 1 => Monday => weekday
// day 2 => Tuesday => 
// day 3 => Wednesday => 
// day 4 => Thursday => weekday
// day 5 => Friday => weekend
// day 6 => Saturday => weekend

    // switch (2) {
    //     case 0:
    //         text = "weekend";
    //         break;
    //     case 5:
    //         text = "weekend";
    //         break;
    //     case 6:
    //         text = "weekend";
    //         break;

    //     default:
    //         text = "weekday"
    // }

    // console.log(text);