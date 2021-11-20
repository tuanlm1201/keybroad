const btn__scrollTop = document.querySelector('.btn__scrollTop');

//when scrolling down, show button scroll top
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        btn__scrollTop.classList.add('show-scroll');
    } else {
        btn__scrollTop.classList.remove('show-scroll');
    }

    //create button scroll top position
    btn__scrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;
    console.log(scrollY);
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
            section.classList.add('active-link');
        } else {
            section.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


