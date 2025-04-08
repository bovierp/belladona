/**
 * Bella Dona - Script principal
 * Este archivo contiene la funcionalidad JavaScript para el sitio web de la peluquería Bella Dona.
 * Incluye: cambio de idioma, menú responsive y preparación para el sistema de reservas (a implementar posteriormente).
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la funcionalidad del sitio
    initLanguageSelector();
    initMobileMenu();
    updateCopyrightYear();
    initBookingNotice();
});

/**
 * Actualiza el año del copyright con el año actual del sistema
 */
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    
    copyrightElements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/\d{4}/, currentYear);
    });
}

/**
 * Inicializa el selector de idiomas
 */
function initLanguageSelector() {
    // Obtener todos los enlaces del selector de idiomas
    const languageLinks = document.querySelectorAll('.language-selector a');
    
    // Establecer español como idioma predeterminado si no hay ninguno seleccionado
    if (!document.body.classList.contains('lang-es-active') && 
        !document.body.classList.contains('lang-ca-active') && 
        !document.body.classList.contains('lang-en-active')) {
        document.body.classList.add('lang-es-active');
    }
    
    // Añadir evento de clic a cada enlace de idioma
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el idioma seleccionado del atributo data-lang
            const lang = this.getAttribute('data-lang');
            
            // Eliminar la clase active de todos los enlaces
            languageLinks.forEach(l => l.classList.remove('active'));
            
            // Añadir la clase active al enlace seleccionado
            this.classList.add('active');
            
            // Actualizar las clases del body para mostrar el idioma seleccionado
            document.body.classList.remove('lang-es-active', 'lang-ca-active', 'lang-en-active');
            document.body.classList.add(`lang-${lang}-active`);
            
            // Guardar la preferencia de idioma en localStorage
            localStorage.setItem('bellaDonaLanguage', lang);
        });
    });
    
    // Cargar la preferencia de idioma guardada
    const savedLanguage = localStorage.getItem('bellaDonaLanguage');
    if (savedLanguage) {
        // Encontrar el enlace correspondiente al idioma guardado
        const langLink = document.querySelector(`.language-selector a[data-lang="${savedLanguage}"]`);
        if (langLink) {
            // Simular un clic en el enlace
            langLink.click();
        }
    }
}

/**
 * Inicializa la animación pulsante para los avisos de reservas
 */
function initBookingNotice() {
    // Seleccionar todos los elementos con la clase booking-notice
    const bookingNotices = document.querySelectorAll('.booking-notice');
    
    // Añadir la clase pulsate a cada elemento
    bookingNotices.forEach(notice => {
        notice.classList.add('pulsate');
    });
}

/**
 * Inicializa el menú móvil para dispositivos pequeños
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic en un enlace
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menu.classList.remove('active');
                }
            });
        });
        
        // Cerrar el menú al redimensionar la ventana a un tamaño mayor
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
            }
        });
    }
}

/**
 * Funciones para el sistema de reservas (a implementar posteriormente)
 * Estas funciones son solo placeholders y serán implementadas en el futuro
 */

// Función para inicializar el sistema de reservas
function initBookingSystem() {
    // Esta función se implementará posteriormente
    console.log('Sistema de reservas: pendiente de implementación');
}