tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            colors: {
                primary: '#062448',
                secondary: '#137cbd',
                accent: '#246084',
                light: '#f3fbfd',
                textdark: '#13405d'
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    links.forEach(link => link.addEventListener('click', () => menu.classList.add('hidden')));

    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'scale-95');
                entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
});