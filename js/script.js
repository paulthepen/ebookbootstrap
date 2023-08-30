function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('opacity-90');
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('opacity-90');
            navbar.classList.remove('shadow-sm');
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll);