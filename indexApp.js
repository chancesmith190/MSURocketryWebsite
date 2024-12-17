// Redirect to homepage when the logo is clicked
document.getElementById("logo-button").addEventListener("click", handleClick);
function handleClick() {
    window.location.href = "/"; // Redirect to the root/homepage
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Persist animation state for twinkling
const twinklingElement = document.querySelector('.twinkling');

const animationStartTime = localStorage.getItem('animationStartTime') || Date.now();
localStorage.setItem('animationStartTime', animationStartTime);

const elapsedTime = (Date.now() - animationStartTime) / 1000; // seconds
twinklingElement.style.animationDelay = `-${elapsedTime}s`;