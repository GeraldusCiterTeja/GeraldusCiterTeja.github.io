// project 

document.addEventListener('DOMContentLoaded', function() {
    const project = document.querySelectorAll('.project-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once it's visible
            }
        });
    }, observerOptions);

    project.forEach(project => {
        observer.observe(project);
    });
});


// certificate 

document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.certificate-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once it's visible
            }
        });
    }, observerOptions);

    certificates.forEach(certificate => {
        observer.observe(certificate);
    });
});

// Hamburger Menu

const listIcons = document.getElementById('navList');
const menuList = document.getElementById('menu-list')

listIcons.addEventListener("click", (e) => {
    menuList.classList.toggle('hidden')
    e.stopPropagation();
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    menuList.classList.add('hidden');
}))

document.addEventListener('click', (e) => {
    if(!menuList.contains(e.target) && !listIcons.contains(e.target)){
        menuList.classList.add('hidden')
    }
})