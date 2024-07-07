const upAnimationElements = document.querySelectorAll("#animation-u, #animation-d, #animation-r, #animation-l, #pop-up");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);

upAnimationElements.forEach(element => {
    observer.observe(element);
});


const texts = [ "Frontend Development", "Web Development",  "Creative Coding"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('animated-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, 50); 
    }
})();









