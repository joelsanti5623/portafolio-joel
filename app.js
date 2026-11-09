/* ==========================================
   DATOS DE PROYECTOS
   ========================================== */

const projects = [
    {
        id: 1,
        title: 'Para Mi Reina Hermosa',
        description: 'Plataforma web modular con más de 15 secciones interactivas, gestión de experiencias dinámicas, componentes personalizados y diseño responsivo. ✨',
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
        title: 'Al fogolar - Restaurante',
        description: 'Aplicación web desarrollada para el restaurante de fusión italiano-santandereano en Barichara. Gestión de menú, secciones interactivas y diseño responsivo. 🍝',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL'],
        link: ' https://joelsanti5623.github.io/web--restaurante/',
        repo: 'https://github.com/joelsanti5623/web--restaurante'
    },
    {
        id: 4,
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
   SCROLL - DETECTAR POSICION
   ========================================== */

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 60) {
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
   EFECTO TIPEO EN LA TERMINAL
   ========================================== */

function escribirTerminal() {
    const lineas = document.querySelectorAll('.terminal-text p');
    const textos = [];

    lineas.forEach(linea => {
        textos.push(Array.from(linea.textContent));
        linea.textContent = '';
    });

    let i = 0;

    function escribirLinea() {
        if (i >= lineas.length) return;

        if (i > 0) lineas[i - 1].classList.remove('escribiendo');
        lineas[i].classList.add('escribiendo');

        let j = 0;
        const intervalo = setInterval(() => {
            lineas[i].textContent += textos[i][j];
            j++;

            if (j >= textos[i].length) {
                clearInterval(intervalo);
                i++;
                setTimeout(escribirLinea, 400);
            }
        }, 50);
    }

    escribirLinea();
}

/* ==========================================
   EJECUTAR AL CARGAR
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    cargarProyectos();
    escribirTerminal();
});

console.log('✅ Portafolio listo - Joel Santiago');

/* ==========================================
   MENÚ HAMBURGUESA MÓVIL
   ========================================== */

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================
   OBSERVADOR PARA ANIMACIONES AL HACER SCROLL
   ========================================== */

const observerOptions = {
    root: null,
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Si quieres que la animación solo ocurra una vez, descomenta la siguiente línea:
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionar todos los elementos con la clase .reveal
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

/* ==========================================
   EFECTO MATRIX EN CANVAS (GLOBAL)
   ========================================== */

const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 15, 13, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF41';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 33);
}

/* ==========================================
   LÓGICA DE LA BARRA DE PROGRESO DE SCROLL
   ========================================== */

const progressBar = document.getElementById('scrollProgress');

if (progressBar) {
    window.addEventListener('scroll', () => {
        // Altura total scrolleable de la página
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Posición actual del scroll
        const progress = (window.scrollY / totalHeight) * 100;
        
        // Actualizar el ancho en %
        progressBar.style.width = `${progress}%`;
    });
}