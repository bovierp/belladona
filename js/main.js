// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado, inicializando aplicación...');
    
    // Inicializar todas las funcionalidades
    initNavigation();
    initLanguageSelector();
    initSmoothScrolling();
    initNavbarScrollEffect();
    initFAQ();
    initBackToTop();
    
    console.log('Aplicación inicializada correctamente');
});

// ===== NAVEGACIÓN MÓVIL =====
function initNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mainNavigation = document.querySelector('.main-navigation');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    if (!mobileMenuToggle || !mainNavigation) {
        console.warn('Elementos de navegación no encontrados');
        return;
    }
    
    // Toggle del menú móvil
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!mainNavigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNavigation.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNavigation.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    function toggleMobileMenu() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        
        mobileMenuToggle.setAttribute('aria-expanded', newState);
        mainNavigation.classList.toggle('active', newState);
        
        // Prevenir scroll del body cuando el menú está abierto
        document.body.style.overflow = newState ? 'hidden' : '';
        
        // Crear/remover overlay
        if (newState) {
            createMenuOverlay();
        } else {
            removeMenuOverlay();
        }
        
        console.log('Menú móvil', newState ? 'abierto' : 'cerrado');
    }
    
    function closeMobileMenu() {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mainNavigation.classList.remove('active');
        document.body.style.overflow = '';
        removeMenuOverlay();
    }
    
    function createMenuOverlay() {
        let overlay = document.querySelector('.menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            overlay.addEventListener('click', closeMobileMenu);
            document.body.appendChild(overlay);
        }
        overlay.classList.add('active');
    }
    
    function removeMenuOverlay() {
        const overlay = document.querySelector('.menu-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    }
}

// ===== SELECTOR DE IDIOMA =====
function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    if (!langButtons.length) {
        console.warn('Botones de idioma no encontrados');
        return;
    }
    
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = this.getAttribute('data-lang');
            if (!lang) return;
            
            // Actualizar estado activo
            langButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-current', 'false');
            });
            
            this.classList.add('active');
            this.setAttribute('aria-current', 'true');
            
            // Cambiar idioma si i18n está disponible
            if (typeof i18n !== 'undefined' && i18n.setLanguage) {
                i18n.setLanguage(lang);
            }
            
            console.log('Idioma cambiado a:', lang);
        });
    });
}

// ===== SCROLL SUAVE =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== EFECTO DE SCROLL EN NAVBAR =====
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Actualizar enlaces activos
        updateActiveNavLink();
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// ===== ACTUALIZAR ENLACE ACTIVO EN NAVEGACIÓN =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu-link');
    
    if (!sections.length || !navLinks.length) return;
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
    // Esperar a que i18n esté disponible
    function waitForI18n(attempts = 0) {
        if (typeof i18n !== 'undefined' && i18n.languages) {
            renderFAQ();
            setupLanguageChangeListener();
        } else if (attempts < 20) {
            setTimeout(() => waitForI18n(attempts + 1), 100);
        } else {
            console.error('No se pudo cargar i18n después de varios intentos');
            renderFallbackFAQ();
        }
    }
    
    waitForI18n();
}

function renderFAQ() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) {
        console.warn('Contenedor de FAQ no encontrado');
        return;
    }
    
    const currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'es';
    const faqData = i18n.languages[currentLang]?.faq?.categories;
    
    if (!faqData) {
        console.error('Datos de FAQ no encontrados para el idioma:', currentLang);
        renderFallbackFAQ();
        return;
    }
    
    // Limpiar contenido existente
    faqContainer.innerHTML = '';
    
    // Renderizar categorías
    faqData.forEach((category, catIndex) => {
        // Título de categoría
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'faq-category-title';
        categoryTitle.textContent = category.title;
        faqContainer.appendChild(categoryTitle);
        
        // Preguntas de la categoría
        category.questions.forEach((item, itemIndex) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            
            const questionId = `faq-${catIndex}-${itemIndex}`;
            
            faqItem.innerHTML = `
                <button class=\"faq-question\" aria-expanded=\"false\" aria-controls=\"${questionId}\">
                    <span class=\"faq-question-text\">${item.question}</span>
                    <span class=\"faq-icon\" aria-hidden=\"true\">+</span>
                </button>
                <div class=\"faq-answer\" id=\"${questionId}\">
                    <div class=\"faq-answer-content\">${item.answer}</div>
                </div>
            `;
            
            faqContainer.appendChild(faqItem);
        });
    });
    
    // Agregar event listeners
    setupFAQEventListeners();
    console.log('FAQ renderizado correctamente');
}

function renderFallbackFAQ() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;
    
    const fallbackData = [
        {
            question: '¿Cómo puedo pedir cita?',
            answer: 'Puedes pedir tu cita llamándonos al 931 249 086 o visitándonos en Aribau 271, Barcelona.'
        },
        {
            question: '¿Cuál es vuestro horario?',
            answer: 'Nuestro horario es de Martes a Viernes de 10:00 a 19:00. Los Lunes permanecemos cerrados.'
        },
        {
            question: '¿Qué servicios ofrecéis?',
            answer: 'Ofrecemos cortes, coloración, tratamientos capilares, peinados y mucho más.'
        }
    ];
    
    faqContainer.innerHTML = '';
    
    fallbackData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        
        faqItem.innerHTML = `
            <button class=\"faq-question\" aria-expanded=\"false\" aria-controls=\"faq-fallback-${index}\">
                <span class=\"faq-question-text\">${item.question}</span>
                <span class=\"faq-icon\" aria-hidden=\"true\">+</span>
            </button>
            <div class=\"faq-answer\" id=\"faq-fallback-${index}\">
                <div class=\"faq-answer-content\">${item.answer}</div>
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });
    
    setupFAQEventListeners();
    console.log('FAQ fallback renderizado');
}

function setupFAQEventListeners() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // Cerrar todas las otras preguntas
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherQuestion.nextElementSibling.style.maxHeight = '0';
                    otherQuestion.querySelector('.faq-icon').textContent = '+';
                    otherQuestion.closest('.faq-item').classList.remove('active');
                }
            });
            
            // Toggle pregunta actual
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
                this.closest('.faq-item').classList.add('active');
            } else {
                this.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
                icon.textContent = '+';
                this.closest('.faq-item').classList.remove('active');
            }
        });
    });
}

function setupLanguageChangeListener() {
    // Escuchar cambios de idioma
    document.addEventListener('languageChanged', function(event) {
        if (event.detail && event.detail.newLang) {
            setTimeout(() => {
                renderFAQ();
            }, 100);
        }
    });
    
    // Observer para cambios en el atributo lang
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'lang') {
                setTimeout(() => {
                    renderFAQ();
                }, 100);
            }
        });
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang']
    });
}

// ===== BOTÓN VOLVER ARRIBA =====
function initBackToTop() {
    // Crear botón
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class=\"fas fa-arrow-up\"></i>';
    backToTop.setAttribute('aria-label', 'Volver arriba');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(backToTop);
    
    // Mostrar/ocultar según scroll
    let ticking = false;
    
    function updateBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateBackToTop);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Funcionalidad de click
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
}

// ===== UTILIDADES =====

// Función para manejar errores de carga de imágenes
function handleImageError(img) {
    img.style.display = 'none';
    console.warn('Error al cargar imagen:', img.src);
}

// Función para lazy loading de imágenes
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading=\"lazy\"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Función para optimizar el rendimiento de scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Función para detectar si el usuario prefiere movimiento reducido
function respectsReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Inicializar lazy loading cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
});

// Manejar errores globales de JavaScript
window.addEventListener('error', function(e) {
    console.error('Error de JavaScript:', e.error);
});

// Manejar promesas rechazadas
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promesa rechazada:', e.reason);
});

console.log('main.js cargado correctamente');

