/* ==========================================
   DATOS DE PROYECTOS
   ========================================== */

const projects = [
    {
        id: 1,
        title: 'Para Mi Reina Hermosa',
        description: 'Plataforma web modular con más de 15 secciones interactivas, gestión de experiencias dinámicas, componentes personalizados y diseño responsivo. ✨',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'solo',
        link: 'https://joelsanti5623.github.io/para-mi-reina-hermosa/',
        repo: 'https://github.com/joelsanti5623/para-mi-reina-hermosa'
    },
    {
        id: 2,
        title: 'Bombu-Mania',
        description: 'E-commerce de dulces. Vende los famosos Bon Bon Bum con carrito de compras y catálogo interactivo. 🍭',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'solo',
        link: 'https://joelsanti5623.github.io/bombu-mania/',
        repo: 'https://github.com/joelsanti5623/bombu-mania'
    },
    {
        id: 3,
        title: 'Al fogolar - Restaurante',
        description: 'Aplicación web desarrollada para el restaurante de fusión italiano-santandereano en Barichara. Gestión de menú, secciones interactivas y diseño responsivo. 🍝',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL'],
        category: 'solo',
        link: ' https://joelsanti5623.github.io/web--restaurante/',
        repo: 'https://github.com/joelsanti5623/web--restaurante'
    },
    {
        id: 4,
        title: 'Ejercicios',
        description: 'Repo con ejercicios de programación y rutinas. Código limpio y bien documentado. 💪',
        tags: ['Git', 'GitHub'],
        category: 'git',
        link: 'https://github.com/joelsanti5623/ejercicios',
        repo: 'https://github.com/joelsanti5623/ejercicios'
    },
    
    {
        id: 5,
        title: 'Taller Campuslands',
        description: 'Repositorio práctico enfocado en el desarrollo de ejercicios de lógica, manipulación de datos con JSON y estructuración web limpia. 🚀',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
        category: 'solo',
        link: 'https://joelsanti5623.github.io/taller_campusland/',
        repo: 'https://github.com/joelsanti5623/taller_campusland.git'
    },
    
    {
        id: 6,
        title: 'Tienda de Relojes',
        description: 'Plataforma web de comercio electrónico enfocada en la exhibición y catálogo de relojes. Desarrollada en equipo con diseño responsivo y estructuración limpia en HTML y CSS. ⌚',
        tags: ['HTML5', 'CSS3', 'JSON'],
        category: 'equipo',
        link: 'https://davidsierra12-22.github.io/TIenda-relojes-HTML-Y-CSS/',
        repo: 'https://github.com/Davidsierra12-22/TIenda-relojes-HTML-Y-CSS.git'
    },
    
    {
        id: 7,
        title: 'Proyecto SQL (Joel y David)',
        description: 'Proyecto colaborativo enfocado en la estructuración de bases de datos relacionales, consultas avanzadas y gestión óptima de esquemas en MySQL. 🗄️',
        tags: ['MySQL', 'SQL', 'Database'],
        category: 'mysql',
        repo: 'https://github.com/joelsanti5623/proyecto-SQL_joel_david.git'
    },
    
    {
        id: 8,
        title: 'Examen de Python',
        description: 'Evaluación práctica enfocada en la resolución de problemas lógicos, estructuras de datos y persistencia o manipulación de información con archivos JSON en Python. 🐍',
        tags: ['PYTHON', 'JSON'],
        category: 'python',
        repo: 'https://github.com/joelsanti5623/examen_python_joel.git'
    },
    
    {
        id: 9,
        title: 'Examen de SQL',
        description: 'Prueba técnica y evaluación práctica enfocada en consultas complejas, diseño de esquemas relacionales y manipulación de bases de datos en MySQL. 🗄️',
        tags: ['MySQL', 'SQL'],
        category: 'mysql',
        repo: 'https://github.com/joelsanti5623/examen_SQL_joel.git'
    },
    
    {
        id: 10,
        title: 'Proyecto de Python',
        description: 'Desarrollo de software en Python enfocado en la modularidad, gestión de lógica de negocio y estructuración de datos utilizando archivos JSON. 🐍',
        tags: ['PYTHON', 'JSON'],
        category: 'python',
        repo: 'https://github.com/joelsanti5623/proyecto_python_vargasjoel.git'
    },
    
    { 
        id: 11,
        title: 'Examen MySQL 2',
        description: 'Segunda evaluación práctica de bases de datos relacionales, enfocada en optimización de consultas, gestión de restricciones y consultas avanzadas en MySQL. 🗄️',
        tags: ['MySQL', 'SQL'],
        category: 'mysql',
        repo: 'https://github.com/joelsanti5623/examen_MYSQL-2.git'
    },
    
    {
        id: 12,
        title: 'Rutas Seguras para Niños',
        description: 'Plataforma web colaborativa orientada a la planificación y visualización de recorridos seguros para el desplazamiento infantil. Desarrollada en equipo con diseño responsivo y lógica interactiva en JavaScript. 🗺️',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'equipo',
        repo: 'https://github.com/Figueroa1252/PROYECTO_RUTAS_SEGURAS_KIDS.git'
    },

    {
        id: 13,
        title: 'Examen 1 - Lógica y Algoritmos',
        description: 'Evaluación práctica de fundamentos y algoritmos en PSeInt. Enfocada en el uso de estructuras de datos, validaciones y control de flujos lógicos. 🧠',
        tags: ['Lógica de Programación', 'Algoritmos', 'PSeInt', 'Estructuras de Datos'],
        category: 'pseint', // O 'solo' según prefieras que se filtre en tu interfaz
        repo: 'https://github.com/joelsanti5623/examen-1-joel.git'
    },

    {
        id: 14,
        title: "Coach Financiero (App Web)",
        description: "Aplicación web modular orientada a la gestión financiera personal. Cuenta con simuladores, metas de ahorro, asistente de chat y arquitectura frontend/backend organizada.",
        tags: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
        category: "equipo", 
        link: 'https://davidsierra12-22.github.io/Coach-financiero/', 
        github: 'https://github.com/Davidsierra12-22/Coach-financiero.git'
    },

    {
        id: 15,
        title: 'Modelado y Normalización de Bases de Datos',
        description: 'Ejercicio práctico enfocado en la transición de tablas no normalizadas a modelos relacionales estructurados, optimizando la gestión de entidades, registros y atributos. 📊',
        tags: ['Excel', 'MySQL', 'Modelado de Datos'],
        category: 'mysql',
        repo: 'https://github.com/joelsanti5623/ejercicio-base-de-datos.git'
    },
    
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
                    ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
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

/* ==========================================
   LÓGICA DE FILTRADO DE PROYECTOS
   ========================================== */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active del botón actual y ponérsela al presionado
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

/* ==========================================
   LÓGICA DE LA TERMINAL INTERACTIVA
   ========================================== */

const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

if (terminalInput && terminalOutput) {
    // Comandos disponibles y sus respuestas
    const commands = {
        'help': 'Comandos disponibles: <span class="cmd-highlight">about</span>, <span class="cmd-highlight">skills</span>, <span class="cmd-highlight">proyectos</span>, <span class="cmd-highlight">contacto</span>, <span class="cmd-highlight">clear</span>',
        'about': 'Joel Santiago Carreño Vargas | Desarrollador Web enfocado en HTML, CSS, JavaScript, Python y MySQL.',
        'skills': 'Habilidades principales: HTML5 (95%), CSS3 (90%), JavaScript (85%), Python (80%), MySQL (80%), Git & GitHub (85%).',
        'proyectos': 'Proyectos destacados: Al Fogolar (Web Full-Stack), Eventos Premier S.A.S. (Base de Datos MySQL) y Para Mi Reina Hermosa.',
        'contacto': 'GitHub: joelsanti5623 | WhatsApp: +57 3244212293 | Email: joelsantiagocarrenovargas45@gmail.com',
        'whoami': 'Eres un visitante genial explorando el portafolio de Joel. 🚀'
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const inputVal = terminalInput.value.trim().toLowerCase();
            
            if (inputVal === '') return;

            // Crear línea con el comando ingresado
            const userLine = document.createElement('p');
            userLine.className = 'line';
            userLine.innerHTML = `<span class="prompt">joel@dev:~$</span> ${inputVal}`;
            terminalOutput.appendChild(userLine);

            // Procesar comando
            if (inputVal === 'clear') {
                terminalOutput.innerHTML = '';
            } else if (commands[inputVal]) {
                const responseLine = document.createElement('p');
                responseLine.className = 'response';
                responseLine.innerHTML = commands[inputVal];
                terminalOutput.appendChild(responseLine);
            } else {
                const errorLine = document.createElement('p');
                errorLine.style.color = '#ff5555';
                errorLine.innerHTML = `Comando no reconocido: '${inputVal}'. Escribe <span class="cmd-highlight">'help'</span> para ver opciones.`;
                terminalOutput.appendChild(errorLine);
            }

            // Limpiar input y hacer autoscroll hacia abajo
            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
}

/* ==========================================
   LÓGICA DE SELECCIÓN DIRECTA DE TEMAS
   ========================================== */

const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los botones
        themeButtons.forEach(b => b.classList.remove('active'));
        
        // Agregar 'active' al botón cliqueado
        btn.classList.add('active');

        // Limpiar clases previas del body
        document.body.classList.remove('theme-gold', 'theme-red');

        // Aplicar el tema seleccionado
        const selectedTheme = btn.getAttribute('data-theme');
        if (selectedTheme === 'gold') {
            document.body.classList.add('theme-gold');
        } else if (selectedTheme === 'red') {
            document.body.classList.add('theme-red');
        }
        // Si es 'default', se queda con el verde original por defecto
    });
});