const animateElements = document.querySelectorAll('.hidden')
const reviewsScroll = document.querySelector('.reviews-scroll')

function scrollReviews() {
}

const observer = new IntersectionObserver(entries =>
    entries.forEach(entry => entry.isIntersecting &&
        (entry.target.classList.remove('hidden'), entry.target.classList.add('animate'))))

animateElements.forEach(element => observer.observe(element))