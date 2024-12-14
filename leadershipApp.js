const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); /* Indicates when animation should start */
        } else {
            entry.target.classList.remove('show'); /* Allows animation to continue running after being seen once */
        }
    });
});

const hiddenElements = document.querySelectorAll('.title, .underline, .person');
hiddenElements.forEach((el) => observer.observe(el));


