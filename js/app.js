// js/i18n.js
const i18n = {
    currentLang: 'es',
    languages: {
        es: {
            nav: {
                home: 'Inicio',
                services: 'Servicios',
                reservas: 'Reservas',
                about: 'Sobre mí',
                testimonials: 'Testimonios',
                contact: 'Contacto',
                faq: 'FAQ'
            },
            hero: {
                title: 'Tu belleza, nuestra pasión',
                subtitle: 'Descubre la mejor experiencia de peluquería',
                cta: 'Reserva ahora',
                feature1: '15 años de experiencia en color y corte',
                feature2: 'Estilo transformador con técnicas avanzadas',
                feature3: 'Productos de alta gama no testados en animales',
                feature4: 'En Sarrià–Sant Gervasi (Zona Alta de Barcelona)',
                feature5: 'Satisfacción 100% garantizada',
                summer_cta: '🌞 LUCE TU MEJOR LOOK ESTE VERANO ☀️ PIDE TU CITA'
            },
            services: {
                title: 'Nuestros Servicios',
                subtitle: 'Descubre todo lo que podemos hacer por ti',
                haircut: {
                    title: 'Corte y Peinado',
                    description: 'Cortes personalizados que realzan tu belleza natural.'
                },
                color: {
                    title: 'Coloración',
                    description: 'Técnicas de color innovadoras para un look único.'
                },
                treatment: {
                    title: 'Tratamientos',
                    description: 'Revitaliza tu cabello con nuestros tratamientos especializados.'
                },
                cta_primary: 'Ver todos los servicios'
            },
            gallery: {
                title: 'Galería',
                subtitle: 'Algunos de nuestros trabajos'
            },
            reservas: {
                title: 'Reserva tu cita',
                subtitle: 'Agenda tu cita de forma rápida y sencilla',
                contact: {
                    title: 'Contacto directo',
                    phone_label: 'Teléfono',
                    phone: '931 249 086',
                    address_label: 'Dirección',
                    address: 'Peluquería Belladona | Calle Aribau, 271 | 08021 Barcelona'
                },
                hours: {
                    title: 'Horario de atención',
                    schedule: 'Martes a Viernes: 10:00 - 19:00',
                    closed: 'Lunes, Sábado y Domingo: Cerrado'
                },
                info: {
                    title: '¿Cómo reservar?',
                    step1: {
                        title: 'Llámanos',
                        description: 'Contacta con nosotros al 931 249 086'
                    },
                    step2: {
                        title: 'Elige tu servicio',
                        description: 'Te ayudamos a elegir el mejor tratamiento'
                    },
                    step3: {
                        title: 'Confirma tu cita',
                        description: 'Selecciona fecha y hora que mejor te convenga'
                    }
                }
            },
            testimonials: {
                title: 'Testimonios',
                subtitle: 'Lo que dicen nuestros clientes'
            },
            faq: {
                title: 'Preguntas Frecuentes',
                subtitle: '¿Tienes dudas? Aquí tienes algunas respuestas',
                categories: [
                    {
                        title: 'CITAS Y HORARIOS',
                        questions: [
                            {
                                question: '¿Cómo puedo pedir cita?',
                                answer: 'Puedes pedir tu cita de dos maneras: llamándonos directamente por teléfono al 931 249 086, o de forma presencial en nuestro local ubicado en la calle Aribau 271, 08021 BARCELONA.'
                            },
                            {
                                question: '¿Necesito pedir cita previa?',
                                answer: 'Sí, recomendamos encarecidamente pedir cita previa para asegurarte de que podemos atenderte a la hora que mejor te convenga. Si pasas por delante y tenemos un hueco, estaremos encantadas de atenderte, pero no podemos garantizarlo.'
                            },
                            {
                                question: '¿Cuál es vuestra política de cancelación?',
                                answer: 'Agradecemos que nos avises con al menos 24 horas de antelación si necesitas cancelar o cambiar tu cita. Esto nos permite ofrecerle el espacio a otro cliente. Las cancelaciones con menos de 24 horas de aviso podrían estar sujetas a un cargo.'
                            },
                            {
                                question: '¿Qué pasa si llego tarde a mi cita?',
                                answer: 'Haremos todo lo posible por atenderte. Sin embargo, si llegas más de 15 minutos tarde, puede que necesitemos acortar tu servicio o reagendar la cita para no afectar a los clientes que vienen después.'
                            },
                            {
                                question: '¿Cuál es vuestro horario?',
                                answer: 'Nuestro horario habitual es de Martes a Viernes de 10:00h a 19:00. Los Lunes permanecemos cerrados por descanso del personal.'
                            }
                        ]
                    },
                    {
                        title: 'SERVICIOS Y PRECIOS',
                        questions: [
                            {
                                question: '¿Qué servicios ofrecéis?',
                                answer: 'Ofrecemos una gama completa de servicios de peluquería, incluyendo cortes para mujer y hombre, todo tipo de técnicas de coloración (tinte, mechas, balayage), tratamientos de hidratación y keratina, peinados y recogidos para eventos especiales.'
                            },
                            {
                                question: '¿Dónde puedo consultar los precios?',
                                answer: 'Puedes encontrar una lista de precios orientativa en nuestro sitio web. Para servicios de coloración complejos, el precio final puede variar según la longitud y el estado del cabello. Siempre ofrecemos un diagnóstico y presupuesto personalizado gratuito antes de empezar.'
                            },
                            {
                                question: '¿Sois especialistas en alguna técnica en particular?',
                                answer: 'Nuestra estilista tiene una amplia formación en todas las áreas, pero nos sentimos especialmente orgullosas de nuestras técnicas de color, sobre todo el balayage y las mechas babylights, donde buscamos resultados naturales y que cuiden la salud de tu cabello.'
                            },
                            {
                                question: '¿Hacéis recogidos para bodas o eventos?',
                                answer: '¡Sí! Es uno de nuestros servicios favoritos. Ofrecemos packs especiales para novias que incluyen prueba de peinado. Recomendamos reservar este tipo de servicio con varias semanas de antelación.'
                            }
                        ]
                    },
                    {
                        title: 'PRODUCTOS Y OTROS',
                        questions: [
                            {
                                question: '¿Qué marcas de productos utilizáis?',
                                answer: 'Trabajamos exclusivamente con marcas profesionales de alta gama que garantizan los mejores resultados y cuidan la salud de tu cabello. También disponemos de líneas de productos orgánicos, sin sulfatos y/o sin parabenos, no testados en animales para los clientes que lo soliciten.'
                            },
                            {
                                question: '¿Puedo comprar los productos que usáis en mi pelo?',
                                answer: 'Sí, tenemos una selección de los productos que usamos y recomendamos a la venta en nuestro salón. Tu estilista estará encantada de asesorarte sobre cuáles son los mejores para mantener tu cabello perfecto en casa.'
                            },
                            {
                                question: '¿Puedo traer una foto del corte o color que quiero?',
                                answer: '¡Por supuesto! Traer fotos de referencia es una de las mejores maneras de ayudarnos a entender exactamente el estilo que estás buscando.'
                            },
                            {
                                question: '¿Qué métodos de pago aceptáis?',
                                answer: 'Aceptamos pagos en efectivo y con tarjeta de crédito/débito.'
                            }
                        ]
                    }
                ]
            },
            contact: {
                title: 'Contacto',
                subtitle: 'Visítanos o contáctanos',
                info: {
                    address: 'Peluquería Belladona | Calle Aribau, 271 | 08021 Barcelona',
                    title: 'Información de contacto',
                    phone: '931 249 086',
                    email: 'info@belladona.com'
                },
                hours: {
                    title: 'Horario',
                    weekdays: 'Martes a Viernes',
                    hours: '10:00 - 19:00',
                    monday: 'Lunes',
                    saturday: 'Sábado',
                    sunday: 'Domingo',
                    closed: 'Cerrado',
                    full_hours: 'Martes a Viernes: 10:00 - 19:00 | Sábado, Domingo y Lunes: Cerrado'
                }
            },
            footer: {
                brand: 'BellaDona',
                about: 'Tu peluquería de confianza en el corazón de la ciudad.',
                links: 'Enlaces rápidos',
                social: 'Síguenos',
                social_facebook: 'Síguenos en Facebook',
                social_instagram: 'Síguenos en Instagram',
                social_google: 'Visítanos en Google',
                copyright: ' 2025 BellaDona. Todos los derechos reservados.'
            },
            meta: {
                description: 'Descubre la mejor experiencia de peluquería en Barcelona. Cortes, coloración, tratamientos y más. ¡Reserva tu cita ahora!'
            }
        },
        ca: {
            nav: {
                home: 'Inici',
                services: 'Serveis',
                reservas: 'Reserves',
                about: 'Sobre mi',
                testimonials: 'Testimonis',
                contact: 'Contacte',
                faq: 'PMF'
            },
            hero: {
                title: 'La teva bellesa, la nostra passió',
                subtitle: 'Descobreix la millor experiència de perruqueria',
                cta: 'Reserva ara',
                feature1: '15 anys d\'experiència en color i tall',
                feature2: 'Estil transformador amb tècniques avançades',
                feature3: 'Productes d\'alta gamma no provats en animals',
                feature4: 'A Sarrià–Sant Gervasi (Zona Alta de Barcelona)',
                feature5: 'Satisfacció 100% garantida',
                summer_cta: '🌞 LLUÏUX EL TEU MILLOR LOOK AQUEST ESTIU ☀️ DEMANA LA TEVA CITA'
            },
            services: {
                title: 'Els Nostres Serveis',
                subtitle: 'Descobreix tot el que podem fer per tu',
                haircut: {
                    title: 'Tallat i Pentinat',
                    description: 'Tallats personalitzats que ressalten la teva bellesa natural.'
                },
                color: {
                    title: 'Coloració',
                    description: 'Tècniques de color innovadores per a un look únic.'
                },
                treatment: {
                    title: 'Tractaments',
                    description: 'Revitalitza el teu cabell amb els nostres tractaments especialitzats.'
                },
                cta_primary: 'Veure tots els serveis'
            },
            gallery: {
                title: 'Galeria',
                subtitle: 'Alguns dels nostres treballs'
            },
            reservas: {
                title: 'Reserva la teva cita',
                subtitle: 'Planifica la teva cita de forma ràpida i senzilla',
                contact: {
                    title: 'Contacte directe',
                    phone_label: 'Telèfon',
                    phone: '931 249 086',
                    address_label: 'Adreça',
                    address: 'Perruqueria Belladona | Carrer Aribau, 271 | 08021 Barcelona'
                },
                hours: {
                    title: 'Horari d\'atenció',
                    schedule: 'Dimarts a Divendres: 10:00 - 19:00',
                    closed: 'Dilluns, Dissabte i Diumenge: Tancat'
                },
                info: {
                    title: 'Com reservar?',
                    step1: {
                        title: 'Truca\'ns',
                        description: 'Contacta amb nosaltres al 931 249 086'
                    },
                    step2: {
                        title: 'Tria el teu servei',
                        description: 'T\'ajudem a triar el millor tractament'
                    },
                    step3: {
                        title: 'Confirma la teva cita',
                        description: 'Selecciona data i hora que millor et vagi'
                    }
                }
            },
            testimonials: {
                title: 'Testimonis',
                subtitle: 'El que diuen els nostres clients'
            },
            faq: {
                title: 'Preguntes Freqüents',
                subtitle: 'Tens dubtes? Aquí tens algunes respostes',
                categories: [
                    {
                        title: 'CITES I HORARIS',
                        questions: [
                            {
                                question: 'Com puc demanar cita?',
                                answer: 'Pots demanar la teva cita de dues maneres: trucant-nos directament al telèfon 931 249 086, o de forma presencial al nostre local situat al carrer Aribau 271, 08021 BARCELONA.'
                            },
                            {
                                question: 'Necessito demanar cita prèvia?',
                                answer: 'Sí, recomanem encaridament demanar cita prèvia per assegurar-te que et podem atendre a l\'hora que millor et vagi. Si passes per davant i tenim un forat, estarem encantades d\'atendre\'t, però no ho podem garantir.'
                            },
                            {
                                question: 'Quina és la vostra política de cancel·lació?',
                                answer: 'Agraïm que ens avisis amb un mínim de 24 hores d\'antel·lació si necessites cancel·lar o canviar la teva cita. Això ens permet oferir l\'espai a un altre client. Les cancel·lacions amb menys de 24 hores d\'avís podrien estar subjectes a un càrrec.'
                            },
                            {
                                question: 'Què passa si arribo tard a la meva cita?',
                                answer: 'Farem tot el possible per atendre\'t. No obstant això, si arribes més de 15 minuts tard, pot ser que necessitem escurçar el teu servei o reprogramar la cita per no afectar els clients que vénen després.'
                            },
                            {
                                question: 'Quin és el vostre horari?',
                                answer: 'El nostre horari habitual és de Dimarts a Divendres de 10:00h a 19:00. Els Dilluns romanguem tancats per descans del personal.'
                            }
                        ]
                    },
                    {
                        title: 'SERVEIS I PREUS',
                        questions: [
                            {
                                question: 'Quins serveis oferiu?',
                                answer: 'Oferim una gamma completa de serveis de perruqueria, incloent talls per a dona i home, tot tipus de tècniques de coloració (tint, ròssec, balayage), tractaments d\'hidratació i queratina, pentinats i recollits per a esdeveniments especials.'
                            },
                            {
                                question: 'On puc consultar els preus?',
                                answer: 'Pots trobar una llista de preus orientativa al nostre lloc web. Per a serveis de coloració complexos, el preu final pot variar segons la longitud i l\'estat del cabell. Sempre oferim un diagnòstic i pressupost personalitzat gratuït abans de començar.'
                            },
                            {
                                question: 'Sou especialistes en alguna tècnica en concret?',
                                answer: 'La nostra perruquera té una àmplia formació en totes les àrees, però ens sentim especialment orgullosos de les nostres tècniques de color, sobretot el balayage i les reflexos californians, on busquem resultats naturals i que cuidin la salut del teu cabell.'
                            },
                            {
                                question: 'Feu recollits per a casaments o esdeveniments?',
                                answer: 'Sí! És un dels nostres serveis preferits. Oferim paquets especials per a núvies que inclouen prova de pentinat. Recomanem reservar aquest tipus de servei amb diverses setmanes d\'antel·lació.'
                            }
                        ]
                    },
                    {
                        title: 'PRODUCTES I ALTRES',
                        questions: [
                            {
                                question: 'Quines marques de productes utilitzeu?',
                                answer: 'Treballem exclusivament amb marques professionals d\'alta gamma que garanteixen els millors resultats i tenen cura de la salut del teu cabell. També disposem de línies de productes orgànics, sense sulfats i/o sense parabens, no testats en animals per als clients que ho sol·licitin.'
                            },
                            {
                                question: 'Puc comprar els productes que feu servir al meu cabell?',
                                answer: 'Sí, tenim una selecció dels productes que utilitzem i recomanem a la venda al nostre saló. La teva perruquera estarà encantada d\'assessorar-te sobre quins són els millors per mantenir el teu cabell perfecte a casa.'
                            },
                            {
                                question: 'Puc portar una foto del tall o color que vull?',
                                answer: 'Per descomptat! Portar fotos de referència és una de les millors maneres d\'ajudar-nos a entendre exactament l\'estil que estàs buscant.'
                            },
                            {
                                question: 'Quins mètodes de pagament accepteu?',
                                answer: 'Acceptem pagaments en efectiu i amb targeta de crèdit/dèbit.'
                            }
                        ]
                    }
                ]
            },
            contact: {
                title: 'Contacte',
                subtitle: 'Visita\'ns o posa\'t en contacte',
                info: {
                    address: 'Perruqueria Belladona | Carrer Aribau, 271 | 08021 Barcelona',
                    title: 'Informació de contacte',
                    phone: '931 249 086',
                    email: 'info@belladona.com'
                },
                hours: {
                    title: 'Horari',
                    weekdays: 'Dimarts a Divendres',
                    hours: '10:00 - 19:00',
                    monday: 'Dilluns',
                    saturday: 'Dissabte',
                    sunday: 'Diumenge',
                    closed: 'Tancat',
                    full_hours: 'Dimarts a Divendres: 10:00 - 19:00 | Dissabte, Diumenge i Dilluns: Tancat'
                }
            },
            footer: {
                brand: 'BellaDona',
                about: 'La teva perruqueria de confiança al cor de la ciutat.',
                links: 'Enllaços ràpids',
                social: 'Segueix-nos',
                social_facebook: 'Segueix-nos a Facebook',
                social_instagram: 'Segueix-nos a Instagram',
                social_google: 'Visita\'ns a Google',
                copyright: ' 2025 BellaDona. Tots els drets reservats.'
            },
            meta: {
                description: 'Descobreix la millor experiència de perruqueria a Barcelona. Tallats, coloració, tractaments i més. Fes ara la teva reserva!'
            }
        },
        en: {
            nav: {
                home: 'Home',
                services: 'Services',
                reservas: 'Bookings',
                about: 'About Me',
                testimonials: 'Testimonials',
                contact: 'Contact',
                faq: 'FAQ'
            },
            hero: {
                title: 'Your Beauty, Our Passion',
                subtitle: 'Discover the best hairdressing experience',
                cta: 'Book Now',
                feature1: '15 years of experience in color and cutting',
                feature2: 'Transformative styling with advanced techniques',
                feature3: 'High-end, cruelty-free products',
                feature4: 'In Sarrià–Sant Gervasi (Barcelona\'s Zona Alta)',
                feature5: '100% satisfaction guaranteed',
                summer_cta: '🌞 SHOW OFF YOUR BEST LOOK THIS SUMMER ☀️ BOOK YOUR APPOINTMENT'
            },
            services: {
                title: 'Our Services',
                subtitle: 'Discover everything we can do for you',
                haircut: {
                    title: 'Haircut & Styling',
                    description: 'Custom haircuts that enhance your natural beauty.'
                },
                color: {
                    title: 'Coloring',
                    description: 'Innovative coloring techniques for a unique look.'
                },
                treatment: {
                    title: 'Treatments',
                    description: 'Revitalize your hair with our specialized treatments.'
                },
                cta_primary: 'View all services'
            },
            gallery: {
                title: 'Gallery',
                subtitle: 'Some of our work'
            },
            reservas: {
                title: 'Book Your Appointment',
                subtitle: 'Schedule your appointment quickly and easily',
                contact: {
                    title: 'Direct Contact',
                    phone_label: 'Phone',
                    phone: '+34 931 24 90 86',
                    address_label: 'Address',
                    address: 'Belladona Hairdresser | Aribau Street, 271 | 08021 Barcelona'
                },
                hours: {
                    title: 'Business Hours',
                    schedule: 'Tuesday to Friday: 10:00 AM - 7:00 PM',
                    closed: 'Monday, Saturday and Sunday: Closed'
                },
                info: {
                    title: 'How to Book?',
                    step1: {
                        title: 'Call Us',
                        description: 'Contact us at 931 249 086'
                    },
                    step2: {
                        title: 'Choose Your Service',
                        description: 'We\'ll help you select the best treatment'
                    },
                    step3: {
                        title: 'Confirm Your Appointment',
                        description: 'Select the date and time that works best for you'
                    }
                }
            },
            testimonials: {
                title: 'Testimonials',
                subtitle: 'What our clients say'
            },
            faq: {
                title: 'Frequently Asked Questions',
                subtitle: 'Got questions? Here are some answers',
                categories: [
                    {
                        title: 'APPOINTMENTS AND HOURS',
                        questions: [
                            {
                                question: 'How can I make an appointment?',
                                answer: 'You can book your appointment in two ways: by calling us directly at +34 931 249 086, or in person at our location at Aribau 271, 08021 BARCELONA.'
                            },
                            {
                                question: 'Do I need to make an appointment in advance?',
                                answer: 'Yes, we highly recommend making an appointment in advance to ensure we can accommodate you at your preferred time. Walk-ins are welcome if we have availability, but we cannot guarantee immediate service.'
                            },
                            {
                                question: 'What is your cancellation policy?',
                                answer: 'We appreciate at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to another client. Cancellations with less than 24 hours notice may be subject to a charge.'
                            },
                            {
                                question: 'What happens if I\'m late for my appointment?',
                                answer: 'We will do our best to accommodate you. However, if you are more than 15 minutes late, we may need to shorten your service or reschedule to avoid affecting other clients.'
                            },
                            {
                                question: 'What are your opening hours?',
                                answer: 'Our regular hours are Tuesday to Friday from 10:00 AM to 7:00 PM. We are closed on Mondays for staff rest.'
                            }
                        ]
                    },
                    {
                        title: 'SERVICES AND PRICES',
                        questions: [
                            {
                                question: 'What services do you offer?',
                                answer: 'We offer a full range of hairdressing services, including women\'s and men\'s cuts, all types of coloring techniques (tint, highlights, balayage), hydration and keratin treatments, and special occasion hairstyling.'
                            },
                            {
                                question: 'Where can I check your prices?',
                                answer: 'You can find a price guide on our website. For complex coloring services, the final price may vary depending on hair length and condition. We always provide a free personalized consultation and quote before beginning any service.'
                            },
                            {
                                question: 'Do you specialize in any particular techniques?',
                                answer: 'Our stylist has extensive training in all areas, but we take particular pride in our coloring techniques, especially balayage and babylights, where we focus on achieving natural-looking results while maintaining hair health.'
                            },
                            {
                                question: 'Do you do updos for weddings or events?',
                                answer: 'Yes! This is one of our favorite services. We offer special bridal packages that include a trial session. We recommend booking these services several weeks in advance.'
                            }
                        ]
                    },
                    {
                        title: 'PRODUCTS AND OTHER',
                        questions: [
                            {
                                question: 'What product brands do you use?',
                                answer: 'We work exclusively with professional, high-end brands that guarantee the best results while caring for your hair\'s health. We also offer organic, sulfate-free, and/or paraben-free product lines that are not tested on animals for clients who prefer them.'
                            },
                            {
                                question: 'Can I purchase the products you use on my hair?',
                                answer: 'Yes, we have a selection of the products we use and recommend available for purchase at our salon. Your stylist will be happy to advise you on which products are best for maintaining your perfect hair at home.'
                            },
                            {
                                question: 'Can I bring a photo of the haircut or color I want?',
                                answer: 'Absolutely! Bringing reference photos is one of the best ways to help us understand exactly the style you\'re looking for.'
                            },
                            {
                                question: 'What payment methods do you accept?',
                                answer: 'We accept cash and credit/debit card payments.'
                            }
                        ]
                    }
                ]
            },
            contact: {
                title: 'Contact',
                subtitle: 'Visit us or get in touch',
                info: {
                    address: 'Belladona Hairdresser | Aribau Street, 271 | 08021 Barcelona',
                    title: 'Contact Information',
                    phone: '+34 931 249 086',
                    email: 'info@belladona.com'
                },
                hours: {
                    title: 'Opening Hours',
                    weekdays: 'Tuesday - Friday',
                    hours: '10:00 AM - 7:00 PM',
                    monday: 'Monday',
                    saturday: 'Saturday',
                    sunday: 'Sunday',
                    closed: 'Closed',
                    full_hours: 'Tuesday - Friday: 10:00 AM - 7:00 PM | Saturday, Sunday & Monday: Closed'
                }
            },
            footer: {
                brand: 'BellaDona',
                about: 'Your trusted hair salon in the heart of the city.',
                links: 'Quick Links',
                social: 'Follow Us',
                social_facebook: 'Follow us on Facebook',
                social_instagram: 'Follow us on Instagram',
                social_google: 'Visit us on Google',
                copyright: ' 2025 BellaDona. All rights reserved.'
            },
            meta: {
                description: 'Discover the best hairdressing experience in Barcelona. Cuts, coloring, treatments and more. Book your appointment now!'
            }
        }
    },

    // Initialize the language
    init: function() {
        // Load saved language or default to browser language
        const savedLang = localStorage.getItem('language');
        const browserLang = navigator.language.substring(0, 2);
        
        // Check if saved language exists in our supported languages
        if (savedLang && this.languages[savedLang]) {
            this.currentLang = savedLang;
        } 
        // Check if browser language is supported
        else if (this.languages[browserLang]) {
            this.currentLang = browserLang;
        }
        
        // Set the initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.currentTarget.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    },
    
    // Set the current language
    setLanguage: function(lang) {
        console.log('Intentando cambiar el idioma a:', lang);
        
        if (!this.languages[lang]) {
            console.error('Idioma no soportado:', lang);
            return;
        }
        
        if (this.currentLang === lang) {
            console.log('El idioma ya está establecido a:', lang);
            return;
        }
        
        const oldLang = this.currentLang;
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        console.log('Idioma cambiado de', oldLang, 'a', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        console.log('Atributo lang del HTML actualizado a:', lang);
        
        // Dispatch language changed event
        const event = new CustomEvent('languageChanged', {
            detail: {
                oldLang: oldLang,
                newLang: lang
            }
        });
        
        console.log('Disparando evento languageChanged...');
        document.dispatchEvent(event);
        console.log('Evento languageChanged disparado');
        
        // Update the active state of language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-current', 'true');
            } else {
                btn.classList.remove('active');
                btn.removeAttribute('aria-current');
            }
        });
        
        // Update all text elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (!key) return;
            
            const keys = key.split('.');
            let value = this.languages[lang];
            
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    console.warn(`Missing translation for key: ${key} in language: ${lang}`);
                    value = '';
                    break;
                }
            }
            
            if (value !== '') {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'text' || element.type === 'email' || element.type === 'tel' || element.tagName === 'TEXTAREA') {
                        element.placeholder = value;
                    } else {
                        element.value = value;
                    }
                } else if (element.hasAttribute('title')) {
                    element.setAttribute('title', value);
                } else if (element.hasAttribute('alt')) {
                    element.setAttribute('alt', value);
                } else if (element.hasAttribute('aria-label')) {
                    element.setAttribute('aria-label', value);
                } else {
                    element.textContent = value;
                }
            }
        });
        
        // Update page title and meta description
        document.title = `BellaDona | ${this.languages[lang].nav.home}`;
        
        // Update meta description if exists
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && this.languages[lang].meta && this.languages[lang].meta.description) {
            metaDesc.setAttribute('content', this.languages[lang].meta.description);
        }
    }
};

// Initialize i18n when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// js/seasonal_cta.js
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

// js/main.js
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
