console.log("JavaScript file loaded successfully!");


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeTextBtn");
    const heading = document.getElementById("heading");

    button.addEventListener("click", function () {
        heading.textContent = "You clicked the button!";
    });
});
