// Persist animation state for twinkling
const twinklingElement = document.querySelector('.twinkling');

const animationStartTime = localStorage.getItem('animationStartTime') || Date.now();
localStorage.setItem('animationStartTime', animationStartTime);

const elapsedTime = (Date.now() - animationStartTime) / 1000; // seconds
twinklingElement.style.animationDelay = `-${elapsedTime}s`;



const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); /* Indicates when animation should start */
        } else {
            entry.target.classList.remove('show'); /* Allows animation to continue running after being seen once */
        }
    });
});

// Select both .box1 and .box2 elements
const hiddenElements = document.querySelectorAll('.hidden, .titleLeadership, .underline, .person');
hiddenElements.forEach((el) => observer.observe(el));

/* Enable Click-to-Expand Dropdowns on Mobile */
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active")) {
            if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
                menu.classList.remove("active");
            }
        }
    });

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

function changeContent(team) {
    const contentBox = document.getElementById("content");
    const contentContainer = document.querySelector(".content-box");
    const contentImage = document.getElementById("content-image");
    const teamInfo = {
        "Text1": {
            text: "Text1",
            color: "#18453b",
            image: ""
        },
        "Text2": {
            text: "Text2",
            color: "#18453b",
            image: ""
        },
        "Text3": {
            text: "Text3",
            color: "#18453b",
            image: ""
        },
        "Text4": {
            text: "Text4",
            color: "#18453b",
            image: ""
        }
    };

    if (teamInfo[team]) {
        contentBox.textContent = teamInfo[team].text;
        contentImage.src = teamInfo[team].image;
        contentImage.classList.remove("hidden");

        document.querySelectorAll(".team-buttons li").forEach((btn) => {
            btn.classList.remove("active");
        });

        event.target.classList.add("active");
    }
}


window.onload = function () {
    changeContent('Text1');
};











