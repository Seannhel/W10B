
"use strict";

// W10B - LONESTAR Airlines

// 1. querySelector - Change heading color
let title = document.querySelector("#page-title");
title.style.color = "blue";

// 2. querySelectorAll - Update flight text
let flights = document.querySelectorAll(".flight");
for (let i = 0; i < flights.length; i++) {
    flights[i].innerText += " - Now Booking!";
}

// 3. getElementById - Add a new flight
let flightList = document.getElementById("flight-list");
flightList.insertAdjacentHTML("beforeend", "<li>Dallas to Paris</li>");

// 4. getElementsByClassName - Add paragraphs
let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].insertAdjacentHTML(
        "beforebegin", "<p>Welcome to our airline section!</p>"
    );
}

// BONUS 1 - Replace short content
function checkContent(selector) {
    let elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.length < 30) {
            elements[i].innerHTML = "NOT ENOUGH";
        }
    }
}
checkContent(".bonus-short");

// BONUS 2 - Find happy text
function addHappyTags(selectors) {
    for (let i = 0; i < selectors.length; i++) {
        let elements = document.querySelectorAll(selectors[i]);
        let hasHappy = false;

        // Check for happy
        for (let j = 0; j < elements.length; j++) {
            if (elements[j].innerHTML.includes("happy")) {
                hasHappy = true;
            }
        }

        // Add paragraph after matching elements
        if (hasHappy) {
            for (let j = 0; j < elements.length; j++) {
                elements[j].insertAdjacentHTML(
                    "afterend", "<p>happy tag above</p>"
                );
            }
        }
    }
}
addHappyTags([".happy-message", ".travel-note"]);

// BONUS 3 - Employee profiles
let profiles = [
    {
        username: "pilot_alex",
        bio: "Golly, flying is darn amazing!",
        profile_image_url: "https://placehold.co/100?text=Alex"
    },
    {
        username: "pilot_sam",
        bio: "Frick, I love working for LONESTAR!",
        profile_image_url: "https://placehold.co/100?text=Sam"
    },
    {
        username: "crew_jordan",
        bio: "Darn, this is fun! Golly, what a great job!",
        profile_image_url: "https://placehold.co/100?text=Jordan"
    }
];

// Display profiles and censor words
let container = document.getElementById("profiles");
for (let i = 0; i < profiles.length; i++) {
    let bio = profiles[i].bio.replace(/frick|darn|golly/gi, "****");

    container.insertAdjacentHTML("beforeend", `
        <div class="profile">
            <img src="${profiles[i].profile_image_url}" width="100" alt="Profile">
            <h3>${profiles[i].username}</h3>
            <p>${bio}</p>
        </div>
    `);
}
