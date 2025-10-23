// Script para navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe ativa ao link de navegação ao rolar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada para elementos
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe para animação de entrada
    const addAnimationClass = () => {
        const elements = document.querySelectorAll('.section');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Executar uma vez no carregamento
    addAnimationClass();
    
    // Executar ao rolar a página
    window.addEventListener('scroll', addAnimationClass);
    
    // Animação para os cartões de tecnologia
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, 200 * index);
});
});

// Efeito de hover para os cartões de tecnologia
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        techCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});