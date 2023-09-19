// DOM Elements
const time = document.getElementById("time"),
    title = document.getElementById("name"),
    greeting = document.getElementById("greeting");
    plan = document.getElementById("plan");

// Showing time
function showTime() {
    let today = new Date();

// Extract hour, min, and seconds from time
let hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// finding AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// Convert to local format
hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}:${addZeros(min)}:${addZeros(sec)} ${amPm}`;

setTimeout(showTime, 1000);
}

// Add zeros
function addZeros(n) {
    return (n<10 ? '0' : '')+n ;
}

showTime();

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        document.body.style.background = "#FFC0CB"; //pink
        greeting.innerText = "Good Morning";
    } else if(hour < 18) {
        document.body.style.background = "#0000FF"; //blue
        greeting.innerText = "Good Afternoon";
    } else {
        document.body.style.background = "#FFA500"; //orange
        greeting.textContent = 'Good Evening';
    }
}

setBgGreet();

// Change Name and Locally Store in localStorage


// Name
title.addEventListener('keypress', setName);
title.addEventListener('blur', setName);

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which === 13 || e.keyCode === 13) {
        localStorage.setItem("name", e.target.innerText);
        title.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

function getName() {
    if(localStorage.getItem("name") === null){
        title.innerText = '[Enter Name]';
    } else {
        title.innerText = localStorage.getItem("name");
    }
}

getName();

// Plan

plan.addEventListener('keypress', setPlan);
plan.addEventListener('blur', setPlan);

function setPlan(e) {
    if(e.type === 'keypress'){
        if(e.which === 13 || e.keyCode === 13){
        localStorage.setItem("plan", e.target.innerText);
        plan.blur();
        }
    } else {
        localStorage.setItem("plan", e.target.innerText);
    }
}

function getPlan() {
    if(localStorage.getItem('plan') === null) {
        plan.innerText = '[Enter Plan]';
    } else {
        plan.innerText  = localStorage.getItem('plan');
    }
}

getPlan();
