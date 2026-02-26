// READ MORE TOGGLE
function toggleContent(button){
    const content = button.previousElementSibling;

    if(content.style.display === "block"){
        content.style.display = "none";
        button.innerText = "Read More";
    } else {
        content.style.display = "block";
        button.innerText = "Read Less";
    }
}

// SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".scroll");

function checkScroll(){
    const triggerBottom = window.innerHeight * 0.85;

    scrollElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < triggerBottom){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);