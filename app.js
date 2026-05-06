// Student data Object

const student = {
    name: "BARACK",
    class: "Level 3 Software Development",
    year: 2026
}


// Updating The DOM's With Student

function initHomePage() {
    // Update name In Hero Page
    const nameEl = document.getElementById("student-name")
    if (nameEl) {
        nameEl.textContent = `${student.name}`;
    }

    // Update greeting If Element exist
    const greetEl = document.getElementById("greeting");
    if (greetEl) {
        greetEl.textContent = `${getGreeting()}, ${student.name}!`;
    }

}

document.addEventListener("DOMContentLoaded", initHomePage);

// Methods

// Regular function
function greet() {
    console.log("Hello");
}

// Method — function inside an object
const person = {
    name: "Ketty",
    greet: function () {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet();  // "Hello, I'm Ketty"



