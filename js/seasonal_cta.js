/**
 * Seasonal CTA Manager for Peluquería Belladona
 * Manages dynamic Call-to-Action messages based on season and special events
 */

class SeasonalCTA {
    constructor() {
        console.log('Inicializando SeasonalCTA...');
        
        // Elementos del CTA principal (botón grande en el hero)
        this.heroCtaLink = document.querySelector('.hero-cta .cta-button');
        this.heroCtaText = this.heroCtaLink ? this.heroCtaLink.querySelector('.cta-text') : null;
        
        console.log('Elementos del CTA:', {
            heroCtaLink: this.heroCtaLink,
            heroCtaText: this.heroCtaText
        });
        
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.initialize();
    }

    initialize() {
        if (!this.ctaElement) return;
        
        const cta = this.getCurrentCTA();
        if (cta) {
            this.updateCTA(cta);
        }
    }

    getCurrentCTA() {
        // Forzar mensaje de verano para pruebas
        return "Prepara tu cabello para el verano: Protege y repara con nuestros tratamientos post-sol. ¡Reserva ya!";
        
        // Código original (comentado para pruebas)
        // const specialEvent = this.checkSpecialEvents();
        // if (specialEvent) return specialEvent;
        // return this.getSeasonalCTA();
    }

    checkSpecialEvents() {
        // Format: { name: string, startDate: Date, endDate: Date, cta: string }
        const events = [
            // January
            {
                name: 'Año Nuevo',
                startDate: new Date(this.currentYear, 0, 1),
                endDate: new Date(this.currentYear, 0, 1, 23, 59, 59),
                cta: 'Empieza el año con un nuevo look: ¡Reserva tu cita para un cambio de imagen en peluquería Belladona!'
            },
            // January - Reyes (with 10-day anticipation)
            {
                name: 'Reyes',
                startDate: new Date(this.currentYear - 1, 11, 27), // 10 days before
                endDate: new Date(this.currentYear, 0, 6, 23, 59, 59),
                cta: 'El regalo perfecto para Reyes: Sorprende con una cita en peluquería Belladona. ¡Compra aquí!'
            },
            // February - San Valentín
            {
                name: 'San Valentín',
                startDate: new Date(this.currentYear, 1, 4), // 10 days before
                endDate: new Date(this.currentYear, 1, 14, 23, 59, 59),
                cta: 'Enamórate de tu cabello este San Valentín: Peinados románticos y tratamientos especiales para dos. ¡Reserva!'
            },
            // April - Semana Santa
            {
                name: 'Viernes Santo',
                startDate: new Date(this.currentYear, 3, 8), // 10 days before
                endDate: new Date(this.currentYear, 3, 18, 23, 59, 59), // Easter Monday
                cta: 'Relájate esta Semana Santa: Aprovecha para cuidar tu cabello con nuestros tratamientos. ¡Agenda tu cita!'
            },
            // April - Sant Jordi
            {
                name: 'Sant Jordi',
                startDate: new Date(this.currentYear, 3, 13), // 10 days before
                endDate: new Date(this.currentYear, 3, 23, 23, 59, 59),
                cta: 'Regala una rosa y un cambio de look: Sorprende este Sant Jordi con una experiencia única en peluquería Belladona.'
            },
            // May - Día del Trabajo
            {
                name: 'Día del Trabajo',
                startDate: new Date(this.currentYear, 3, 21), // 10 days before
                endDate: new Date(this.currentYear, 4, 1, 23, 59, 59),
                cta: 'Día del Trabajo, día para ti: Desconecta y revitaliza tu cabello en peluquería Belladona. ¡Reserva tu momento!'
            },
            // June - San Juan
            {
                name: 'San Juan',
                startDate: new Date(this.currentYear, 5, 14), // 10 days before
                endDate: new Date(this.currentYear, 5, 24, 23, 59, 59),
                cta: 'Noche de San Juan, cabello radiante: Peinados festivos y tratamientos de brillo para una noche mágica. ¡Reserva!'
            },
            // August - Asunción
            {
                name: 'La Asunción',
                startDate: new Date(this.currentYear, 7, 5), // 10 days before
                endDate: new Date(this.currentYear, 7, 15, 23, 59, 59),
                cta: 'Agosto, mes de relax: Cuida tu cabello después del sol con nuestros tratamientos reparadores. ¡Reserva!'
            },
            // September - Diada
            {
                name: 'Diada Nacional de Cataluña',
                startDate: new Date(this.currentYear, 8, 1), // 10 days before
                endDate: new Date(this.currentYear, 8, 11, 23, 59, 59),
                cta: 'Celebra la Diada con un nuevo estilo: ¡Reserva tu cita y luce un look espectacular!'
            },
            // September - La Mercè
            {
                name: 'Mare de Déu de la Mercè',
                startDate: new Date(this.currentYear, 8, 14), // 10 days before
                endDate: new Date(this.currentYear, 8, 24, 23, 59, 59),
                cta: 'Fiestas de la Mercè, cabello impecable: Peinados y tratamientos para brillar en Barcelona. ¡Agenda tu cita!'
            },
            // December - Christmas (all month)
            {
                name: 'Navidad',
                startDate: new Date(this.currentYear, 10, 20), // December 1st
                endDate: new Date(this.currentYear, 11, 31, 23, 59, 59),
                cta: 'Brilla en tus fiestas de invierno: Peinados elegantes y tratamientos de brillo para un cabello deslumbrante. ¡Reserva!'
            }
        ];

        // Check if current date falls within any event period
        for (const event of events) {
            if (this.currentDate >= event.startDate && this.currentDate <= event.endDate) {
                console.log(`Mostrando CTA para: ${event.name}`);
                return event.cta;
            }
        }

        return null;
    }

    getSeasonalCTA() {
        const month = this.currentDate.getMonth() + 1; // 1-12
        
        // Spring: March 21 - June 20
        if ((month === 3 && this.currentDate.getDate() >= 21) || 
            (month > 3 && month < 6) || 
            (month === 6 && this.currentDate.getDate() <= 20)) {
            return this.getRandomCTAPool('spring');
        }
        // Summer: June 21 - September 22
        else if ((month === 6 && this.currentDate.getDate() >= 21) || 
                 (month > 6 && month < 9) || 
                 (month === 9 && this.currentDate.getDate() <= 22)) {
            return this.getRandomCTAPool('summer');
        }
        // Autumn: September 23 - December 20
        else if ((month === 9 && this.currentDate.getDate() >= 23) || 
                 (month > 9 && month < 12) || 
                 (month === 12 && this.currentDate.getDate() <= 20)) {
            return this.getRandomCTAPool('autumn');
        }
        // Winter: December 21 - March 20
        else {
            return this.getRandomCTAPool('winter');
        }
    }

    getRandomCTAPool(season) {
        const ctaPools = {
            spring: [
                "Renueva tu look esta primavera: ¡Reserva tu cita para un cambio de color o corte!",
                "Despierta la belleza de tu cabello: Descubre nuestros tratamientos revitalizantes para la primavera. ¡Reserva ya!",
                "Frescura y color para tu cabello: Agenda tu balayage primaveral y luce radiante. ¡Agenda ahora!"
            ],
            summer: [
                "Prepara tu cabello para el verano: Protege y repara con nuestros tratamientos post-sol. ¡Reserva ya!",
                "Luce un cabello perfecto en tus vacaciones: Peinados veraniegos y coloración duradera. ¡Agenda tu cita!",
                "Adiós al encrespamiento veraniego: Descubre nuestros alisados con keratina. ¡Agenda ahora!"
            ],
            autumn: [
                "Colores de otoño para tu cabello: Atrévete con un cambio de tono cálido y sofisticado. ¡Reserva tu cita!",
                "Repara tu cabello tras el verano: Nuestros tratamientos nutritivos te esperan. ¡Agenda ahora!",
                "Bienvenido otoño, nuevo look: Descubre las tendencias en corte y color para esta temporada. ¡Reserva ya!"
            ],
            winter: [
                "Brilla en tus fiestas de invierno: Peinados elegantes y tratamientos de brillo para un cabello deslumbrante. ¡Reserva!",
                "Protege tu cabello del frío: Tratamientos intensivos para un invierno saludable. ¡Agenda tu sesión!",
                "Regala belleza esta Navidad: Descubre nuestras tarjetas regalo para un cambio de look. ¡Reserva tu cita!"
            ]
        };

        const pool = ctaPools[season] || [];
        return pool.length > 0 
            ? pool[Math.floor(Math.random() * pool.length)]
            : "¡Reserva tu cita en peluquería Belladona y luce espectacular!";
    }

    updateCTA(text) {
        // Actualizar el CTA del hero (botón grande)
        if (this.heroCtaText) {
            this.heroCtaText.textContent = text;
            
            // Actualizar clases según la temporada
            if (this.heroCtaLink) {
                // Eliminar clases de temporada anteriores
                this.heroCtaLink.classList.remove('summer-promo', 'winter-promo', 'spring-promo', 'autumn-promo');
                
                // Añadir la clase correspondiente a la temporada actual
                const month = this.currentDate.getMonth() + 1;
                if ((month >= 3 && month <= 5) || (month === 6 && this.currentDate.getDate() <= 20)) {
                    this.heroCtaLink.classList.add('spring-promo');
                } else if ((month >= 6 && month <= 8) || (month === 9 && this.currentDate.getDate() <= 22)) {
                    this.heroCtaLink.classList.add('summer-promo');
                } else if ((month >= 9 && month <= 11) || (month === 12 && this.currentDate.getDate() <= 20)) {
                    this.heroCtaLink.classList.add('autumn-promo');
                } else {
                    this.heroCtaLink.classList.add('winter-promo');
                }
            }
        }
        
        // Actualizar el CTA de la sección de reservas (si existe)
        if (this.reservasCtaText) {
            this.reservasCtaText.textContent = text;
            
            if (this.reservasCtaLink) {
                this.reservasCtaLink.classList.remove('summer-promo', 'winter-promo', 'spring-promo', 'autumn-promo');
                this.heroCtaLink.classList.add(this.heroCtaLink.classList[1]); // Copiar la clase de temporada del hero
            }
        }
    }
}

// Forzar cambio de texto directamente
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado');
    
    // Seleccionar el elemento del CTA
    const ctaText = document.querySelector('.hero-cta .cta-button .cta-text');
    console.log('Elemento CTA encontrado:', ctaText);
    
    if (ctaText) {
        console.log('Cambiando texto del CTA...');
        ctaText.textContent = 'Prepara tu cabello para el verano: Protege y repara con nuestros tratamientos post-sol. ¡Reserva ya!';
        
        // Actualizar clase para el estilo de verano
        const ctaButton = document.querySelector('.hero-cta .cta-button');
        if (ctaButton) {
            ctaButton.classList.remove('summer-promo');
            ctaButton.classList.add('summer-promo');
        }
    } else {
        console.error('No se encontró el elemento del CTA');
    }
    
    // Inicializar el sistema completo
    new SeasonalCTA();
});
