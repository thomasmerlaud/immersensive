window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
}

const poster = document.getElementById('poster');
const artwork1 = document.getElementById('artwork1');
const artwork2 = document.getElementById('artwork2');

window.addEventListener('scroll', () => {
    if (isInViewport(poster)) {
        poster.classList.add('visible');
    }
    if (isInViewport(artwork1)) {
        artwork1.classList.add('visible');
    }
    if (isInViewport(artwork2)) {
        artwork2.classList.add('visible');
    }
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelector(".gallery").addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "img") {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
