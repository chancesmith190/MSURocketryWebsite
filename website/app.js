const observer = new IntersectionObserver((entries) => { /*creates scrolling animation*/
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); /*indicates when animation should start*/
        }
        else{
            entry.target.classList.remove('show'); /*allows animation to continue running after being seen once*/
        }
    });
});


const hiddenElements = document.querySelectorAll('.box'); /*creates scrolling animation*/
hiddenElements.forEach((e1) => observer.observe(e1));