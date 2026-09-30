/* ==========================================
   DATOS DE PROYECTOS
   ========================================== */

const projects = [
    {
        id: 1,
        title: 'Para Mi Reina Hermosa',
        description: 'Web romántica con 15 secciones (Mensajes, Diario, Fotos, Canciones, etc). Una experiencia completa para tu amor. ❤️‍🩹',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://joelsanti5623.github.io/para-mi-reina-hermosa/',
        repo: 'https://github.com/joelsanti5623/para-mi-reina-hermosa'
    },
    {
        id: 2,
        title: 'Bombu-Mania',
        description: 'E-commerce de dulces. Vende los famosos Bon Bon Bum con carrito de compras y catálogo interactivo. 🍭',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://joelsanti5623.github.io/bombu-mania/',
        repo: 'https://github.com/joelsanti5623/bombu-mania'
    },
    {
        id: 3,
        title: 'Ejercicios',
        description: 'Repo con ejercicios de programación y rutinas. Código limpio y bien documentado. 💪',
        tech: ['Git'],
        link: 'https://github.com/joelsanti5623/ejercicios',
        repo: 'https://github.com/joelsanti5623/ejercicios'
    }
];

/* ==========================================
   CARGAR PROYECTOS
   ========================================== */

function cargarProyectos() {
    const contenedor = document.querySelector('.projects-grid');
    
    if (!contenedor) {
        console.error('No encontré .projects-grid');
        return;
    }
    
    contenedor.innerHTML = '';
    
    projects.forEach(project => {
        const html = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" class="project-link">Ver Proyecto</a>
                    <a href="${project.repo}" target="_blank" class="project-link github">GitHub</a>
                </div>
            </div>
        `;
        contenedor.innerHTML += html;
    });
    
    console.log('✅ Proyectos cargados');
}

/* ==========================================
   NAVEGACION SUAVE
   ========================================== */

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ==========================================
   BOTON VER PROYECTOS
   ========================================== */

const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

/* ==========================================
   EFECTO FOTO DE PERFIL
   ========================================== */

const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    profilePic.addEventListener('mouseenter', () => {
        profilePic.style.boxShadow = '0 0 60px rgba(0, 255, 0, 0.8)';
    });

    profilePic.addEventListener('mouseleave', () => {
        profilePic.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.5)';
    });
}

/* ==========================================
   EFECTO SKILLS
   ========================================== */

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.05)';
        card.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.8)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'none';
    });
});

/* ==========================================
   SCROLL - DETECTAR POSICION
   ========================================== */

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--color-primary)';
            link.style.textShadow = '0 0 10px var(--color-primary)';
            link.style.borderBottom = '2px solid var(--color-primary)';
        } else {
            link.style.color = 'var(--color-text)';
            link.style.textShadow = 'none';
            link.style.borderBottom = '2px solid transparent';
        }
    });
});

/* ==========================================
   EJECUTAR AL CARGAR
   ========================================== */

document.addEventListener('DOMContentLoaded', cargarProyectos);

console.log('✅ Portafolio listo - Joel Santiago');