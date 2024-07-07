const navDialog = document.getElementById("navDialog");

function handleMenu() {
    navDialog.classList.toggle("hidden");
}

function setupIntersectionObserver(element, isLTR, speed, initialTranslate) {
    const intersectionCallBack = (entries) => {
        const intersecting = entries[0].isIntersecting;
        if (intersecting) {
            document.addEventListener('scroll', scrollHandler)
        } else {
            document.removeEventListener('scroll', scrollHandler)
        }
    }
    const ele = element;

    const intersectionObserver = new IntersectionObserver(intersectionCallBack);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslate;
        } else {
            totalTranslate = -(translateX + initialTranslate);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15, -48 * 4);
setupIntersectionObserver(line2, false, 0.15, 36 * 4);
setupIntersectionObserver(line3, true, 0.15, -48 * 4);
setupIntersectionObserver(line4, true, 0.5, -120 * 4);

const dtElement = document.querySelectorAll('dt');

dtElement.forEach(element => {
    element.addEventListener('click', () => {

        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const arrow = element.querySelector('i');

        ddElement.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    })
});