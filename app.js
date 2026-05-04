const studentName = {
    name: James,

}

const studentName = James;
/**
 * utilities, DOM's,
 * variables, data types, operators,
 * event listeners, functions, objects,
 * arrays,  if statements, loops, 
 * switch statements, classes
 * 
 */

// utilities: small helper we reuse in our code
function greet(name) {
    return "Hello"; 
}
 console.log(greet());

 // DOM: this is how we interact with HTML and CSS in JavaScript
 document.getElementById("add-note-btn").textContent = "Add Note";

 //variable: this is used to store data in JavaScript
 let age = 25;
 const name = "James";

 // data types: this is different kind of values
 let text = "Hello World"; // string
 let number = 42; // number
 let isStudent = true; // boolean
let person = { name: "James", age: 25 }; // object
let notes = ["Note 1", "Note 2", "Note 3"]; // array

// operators: this performs actions on values
let sum = 5 + 10; // addition
let isGreater = 10 > 5; // comparison

// event listeners: this is how we react to user actions
document.getElementById("add-note-btn").addEventListener("click", function() {
    console.log("Button clicked!");
});

// functions: this is a reusable block of code that performs a specific task
function addNote(note) {
    console.log("Note added: " + note);
}

// objects: this is a collection of related data 
let student = {
    name: "James", 
    subject: "Software Development",
    grade: "A",
};

// arrays: this is a list of values 
let notes = ["Note 1", "Note 2", "Note 3"];

// if statements: this is how we make decisions in our code
let grade = "A";
if (grade === "A") {
    console.log("Excellent!");
} else if (grade === "B") {
    console.log("Good job!");
} else {
    console.log("Keep trying!");
}

// loops: this is how we repeat code multiple times
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}

// switch statements: this is another way to make decisions in our code
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("End of the week!");
        break;
    default:
        console.log("It's just another day.");
}


