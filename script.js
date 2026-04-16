/**
 * Soft Step Cleaning - Main JavaScript
 * All functionality in vanilla JavaScript - No frameworks
 */

// ========================================
// TRANSLATIONS OBJECT
// ========================================
const translations = {
    en: {
        navHome: 'Home',
        navServices: 'Services',
        navAbout: 'About',
        navGallery: 'Gallery',
        navContact: 'Contact',
        getQuote: 'Get Quote',
        heroTitle: 'Professional Carpet & Upholstery Cleaning',
        heroSubtitle: 'Transform your home with our expert cleaning services. We bring new life to your carpets, sofas, mattresses, and more.',
        freeQuote: 'Get a Free Quote',
        viewServices: 'View Our Services',
        servicesTitle: 'Our Cleaning Services',
        servicesSubtitle: 'Professional solutions for every surface in your home',
        service1: 'Carpet Cleaning',
        service1Desc: 'Deep cleaning that removes dirt, allergens, and stains from your carpets, leaving them fresh and revitalized.',
        service2: 'Upholstery Cleaning',
        service2Desc: 'Gentle yet effective cleaning for all types of furniture fabrics, extending their life and beauty.',
        service3: 'Mattress Cleaning',
        service3Desc: 'Eliminate dust mites, allergens, and odors for a healthier night\'s sleep.',
        service4: 'Odor Removal',
        service4Desc: 'Neutralize unpleasant smells at their source, not just mask them.',
        service5: 'Stain Removal',
        service5Desc: 'Expert treatment for tough stains that others can\'t remove.',
        service6: 'Area Rug Cleaning',
        service6Desc: 'Specialized care for delicate and antique rugs of all materials.',
        aboutLabel: 'About Us',
        aboutTitle: 'Trusted Cleaning Professionals',
        aboutText1: 'With over 10 years of experience, Soft Step has been transforming homes across the region with our professional cleaning services.',
        aboutText2: 'We use eco-friendly products and advanced techniques to ensure the best results for your family and the environment.',
        learnMore: 'Learn More About Us',
        stat1: 'Years Experience',
        stat2: 'Happy Customers',
        stat3: 'Satisfaction Guarantee',
        galleryTitle: 'See the Difference',
        gallerySubtitle: 'Swipe to explore our transformation results',
        gallery1: 'Living Room Carpet',
        gallery2: 'Sofa Cleaning',
        gallery3: 'Mattress Restoration',
        gallery4: 'Area Rug',
        gallery5: 'Stain Removal',
        whyTitle: 'Why Choose Soft Step?',
        whySubtitle: 'We\'re committed to delivering exceptional results',
        feature1: 'Eco-Friendly Products',
        feature1Desc: 'Safe for your family and pets',
        feature2: 'Experienced Professionals',
        feature2Desc: 'Trained and certified team',
        feature3: 'Advanced Equipment',
        feature3Desc: 'Latest cleaning technology',
        feature4: 'Satisfaction Guaranteed',
        feature4Desc: '100% money-back guarantee',
        feature5: 'Flexible Scheduling',
        feature5Desc: 'Book at your convenience',
        feature6: 'Competitive Pricing',
        feature6Desc: 'Transparent, no hidden fees',
        badge1: 'Top Rated',
        badge2: '24/7 Service',
        badge3: 'Insured',
        testimonialsTitle: 'What Our Customers Say',
        testimonialsSubtitle: 'Real reviews from satisfied clients',
        testimonial1: '"Amazing service! My carpets look brand new. The team was professional and efficient. Highly recommend!"',
        testimonial2: '"Professional team, great results, fair price. They removed stains I thought were permanent. Very impressed!"',
        testimonial3: '"Best cleaning service I\'ve ever used! They were on time, thorough, and my house smells amazing. Will definitely use again!"',
        contactTitle: 'Get Your Free Quote',
        contactSubtitle: 'Fill out the form and we\'ll get back to you within 24 hours',
        labelName: 'Name *',
        labelPhone: 'Phone *',
        labelEmail: 'Email *',
        selectService: 'Select a Service *',
        optCarpet: 'Carpet Cleaning',
        optUpholstery: 'Upholstery Cleaning',
        optMattress: 'Mattress Cleaning',
        optOdor: 'Odor Removal',
        optStain: 'Stain Removal',
        optRug: 'Area Rug Cleaning',
        optOther: 'Other',
        labelMessage: 'Message',
        btnSubmit: 'Request a Quote',
        contactInfoTitle: 'Contact Information',
        infoPhone: 'Phone',
        infoEmail: 'Email',
        infoHours: 'Hours',
        infoLocation: 'Service Area',
        hoursText: 'Mon-Sat: 8AM - 6PM',
        locationText: 'Serving Salt Lake City & Surrounding Areas',
        footerTagline: 'Professional cleaning services for your home',
        footerQuickLinks: 'Quick Links',
        footerServices: 'Services',
        footerContact: 'Contact',
        footerRights: 'All rights reserved.'
    },
    es: {
        navHome: 'Inicio',
        navServices: 'Servicios',
        navAbout: 'Nosotros',
        navGallery: 'Galería',
        navContact: 'Contacto',
        getQuote: 'Cotizar',
        heroTitle: 'Limpieza Profesional de Alfombras y Tapicería',
        heroSubtitle: 'Transforma tu hogar con nuestros servicios de limpieza expertos. Damos nueva vida a tus alfombras, sofás, colchones y más.',
        freeQuote: 'Obtén Cotización Gratis',
        viewServices: 'Ver Servicios',
        servicesTitle: 'Nuestros Servicios de Limpieza',
        servicesSubtitle: 'Soluciones profesionales para cada superficie de tu hogar',
        service1: 'Limpieza de Alfombras',
        service1Desc: 'Limpieza profunda que elimina suciedad, alérgenos y manchas de tus alfombras, dejándolas frescas y revitalizadas.',
        service2: 'Limpieza de Tapicería',
        service2Desc: 'Limpieza suave pero efectiva para todo tipo de telas de muebles, extendiendo su vida y belleza.',
        service3: 'Limpieza de Colchones',
        service3Desc: 'Elimina ácaros del polvo, alérgenos y olores para un sueño más saludable.',
        service4: 'Eliminación de Olores',
        service4Desc: 'Neutraliza olores desagradables en su origen, no solo los enmascara.',
        service5: 'Eliminación de Manchas',
        service5Desc: 'Tratamiento experto para manchas difíciles que otros no pueden quitar.',
        service6: 'Limpieza de Alfombras',
        service6Desc: 'Cuidado especializado para alfombras delicadas y antiguas de todos los materiales.',
        aboutLabel: 'Sobre Nosotros',
        aboutTitle: 'Profesionales de Limpieza de Confianza',
        aboutText1: 'Con más de 10 años de experiencia, Soft Step ha estado transformando hogares en toda la región con nuestros servicios de limpieza profesionales.',
        aboutText2: 'Usamos productos ecológicos y técnicas avanzadas para garantizar los mejores resultados para tu familia y el medio ambiente.',
        learnMore: 'Más Sobre Nosotros',
        stat1: 'Años de Experiencia',
        stat2: 'Clientes Felices',
        stat3: 'Garantía de Satisfacción',
        galleryTitle: 'Ve la Diferencia',
        gallerySubtitle: 'Desliza para explorar nuestros resultados de transformación',
        gallery1: 'Alfombra de Sala',
        gallery2: 'Limpieza de Sofá',
        gallery3: 'Restauración de Colchón',
        gallery4: 'Alfombra de Área',
        gallery5: 'Eliminación de Manchas',
        whyTitle: '¿Por Qué Elegir Soft Step?',
        whySubtitle: 'Estamos comprometidos a ofrecer resultados excepcionales',
        feature1: 'Productos Ecológicos',
        feature1Desc: 'Seguros para tu familia y mascotas',
        feature2: 'Profesionales Experimentados',
        feature2Desc: 'Equipo capacitado y certificado',
        feature3: 'Equipos Avanzados',
        feature3Desc: 'Última tecnología en limpieza',
        feature4: 'Satisfacción Garantizada',
        feature4Desc: 'Garantía de devolución del 100%',
        feature5: 'Horario Flexible',
        feature5Desc: 'Reserva a tu conveniencia',
        feature6: 'Precios Competitivos',
        feature6Desc: 'Transparentes, sin cargos ocultos',
        badge1: 'Mejor Calificado',
        badge2: 'Servicio 24/7',
        badge3: 'Asegurados',
        testimonialsTitle: 'Lo Que Dicen Nuestros Clientes',
        testimonialsSubtitle: 'Reseñas reales de clientes satisfechos',
        testimonial1: '"¡Servicio increíble! Mis alfombras parecen nuevas. El equipo fue profesional y eficiente. ¡Altamente recomendado!"',
        testimonial2: '"Equipo profesional, grandes resultados, precio justo. Quitararon manchas que pensé que eran permanentes. ¡Muy impresionado!"',
        testimonial3: '"¡El mejor servicio de limpieza que he usado! Llegaron a tiempo, fueron minuciosos y mi casa huele increíble. ¡Definitivamente los usaré de nuevo!"',
        contactTitle: 'Obtén Tu Cotización Gratis',
        contactSubtitle: 'Completa el formulario y te contactaremos en 24 horas',
        labelName: 'Nombre *',
        labelPhone: 'Teléfono *',
        labelEmail: 'Correo *',
        selectService: 'Selecciona un Servicio *',
        optCarpet: 'Limpieza de Alfombras',
        optUpholstery: 'Limpieza de Tapicería',
        optMattress: 'Limpieza de Colchones',
        optOdor: 'Eliminación de Olores',
        optStain: 'Eliminación de Manchas',
        optRug: 'Limpieza de Alfombras',
        optOther: 'Otro',
        labelMessage: 'Mensaje',
        btnSubmit: 'Solicitar Cotización',
        contactInfoTitle: 'Información de Contacto',
        infoPhone: 'Teléfono',
        infoEmail: 'Correo',
        infoHours: 'Horario',
        infoLocation: 'Área de Servicio',
        hoursText: 'Lun-Sáb: 8AM - 6PM',
        locationText: 'Sirviendo Salt Lake City y Alrededores',
        footerTagline: 'Servicios de limpieza profesionales para tu hogar',
        footerQuickLinks: 'Enlaces Rápidos',
        footerServices: 'Servicios',
        footerContact: 'Contacto',
        footerRights: 'Todos los derechos reservados.'
    },
    pt: {
        navHome: 'Início',
        navServices: 'Serviços',
        navAbout: 'Sobre',
        navGallery: 'Galeria',
        navContact: 'Contato',
        getQuote: 'Orçamento',
        heroTitle: 'Limpeza Profissional de Carpetes e Estofados',
        heroSubtitle: 'Transforme sua casa com nossos serviços de limpeza especializados. Damos nova vida aos seus carpetes, sofás, colchões e mais.',
        freeQuote: 'Orçamento Grátis',
        viewServices: 'Ver Serviços',
        servicesTitle: 'Nossos Serviços de Limpeza',
        servicesSubtitle: 'Soluções profissionais para cada superfície da sua casa',
        service1: 'Limpeza de Carpetes',
        service1Desc: 'Limpeza profunda que remove sujeira, alérgenos e manchas dos seus carpetes, deixando-os frescos e revitalizados.',
        service2: 'Limpeza de Estofados',
        service2Desc: 'Limpeza suave mas eficaz para todos os tipos de tecidos de móveis, estendendo sua vida e beleza.',
        service3: 'Limpeza de Colchões',
        service3Desc: 'Elimine ácaros de poeira, alérgenos e odores para uma noite de sono mais saudável.',
        service4: 'Remoção de Odores',
        service4Desc: 'Neutralize odores desagradáveis na fonte, não apenas os mascara.',
        service5: 'Remoção de Manchas',
        service5Desc: 'Tratamento especializado para manchas difíceis que outros não conseguem remover.',
        service6: 'Limpeza de Tapetes',
        service6Desc: 'Cuidado especializado para tapetes delicados e antigos de todos os materiais.',
        aboutLabel: 'Sobre Nós',
        aboutTitle: 'Profissionais de Limpeza Confiáveis',
        aboutText1: 'Com mais de 10 anos de experiência, a Soft Step tem transformado casas em toda a região com nossos serviços de limpeza profissionais.',
        aboutText2: 'Usamos produtos ecológicos e técnicas avançadas para garantir os melhores resultados para sua família e o meio ambiente.',
        learnMore: 'Saiba Mais Sobre Nós',
        stat1: 'Anos de Experiência',
        stat2: 'Clientes Felizes',
        stat3: 'Garantia de Satisfação',
        galleryTitle: 'Veja a Diferença',
        gallerySubtitle: 'Deslize para explorar nossos resultados de transformação',
        gallery1: 'Carpete da Sala',
        gallery2: 'Limpeza de Sofá',
        gallery3: 'Restauração de Colchão',
        gallery4: 'Tapete de Área',
        gallery5: 'Remoção de Manchas',
        whyTitle: 'Por Que Escolher a Soft Step?',
        whySubtitle: 'Estamos comprometidos em oferecer resultados excepcionais',
        feature1: 'Produtos Ecológicos',
        feature1Desc: 'Seguros para sua família e pets',
        feature2: 'Profissionais Experientes',
        feature2Desc: 'Equipe treinada e certificada',
        feature3: 'Equipamentos Avançados',
        feature3Desc: 'Última tecnologia em limpeza',
        feature4: 'Satisfação Garantida',
        feature4Desc: 'Garantia de devolução de 100%',
        feature5: 'Agendamento Flexível',
        feature5Desc: 'Reserve na sua conveniência',
        feature6: 'Preços Competitivos',
        feature6Desc: 'Transparentes, sem taxas ocultas',
        badge1: 'Mais Bem Avaliado',
        badge2: 'Serviço 24/7',
        badge3: 'Segurados',
        testimonialsTitle: 'O Que Nossos Clientes Dizem',
        testimonialsSubtitle: 'Avaliações reais de clientes satisfeitos',
        testimonial1: '"Serviço incrível! Meus carpetes parecem novos. A equipe foi profissional e eficiente. Altamente recomendado!"',
        testimonial2: '"Equipe profissional, ótimos resultados, preço justo. Removeram manchas que achei que eram permanentes. Muito impressionado!"',
        testimonial3: '"Melhor serviço de limpeza que já usei! Chegaram na hora, foram minuciosos e minha casa cheira incrível. Definitivamente usarei novamente!"',
        contactTitle: 'Obtenha Seu Orçamento Grátis',
        contactSubtitle: 'Preencha o formulário e entraremos em contato em 24 horas',
        labelName: 'Nome *',
        labelPhone: 'Telefone *',
        labelEmail: 'Email *',
        selectService: 'Selecione um Serviço *',
        optCarpet: 'Limpeza de Carpetes',
        optUpholstery: 'Limpeza de Estofados',
        optMattress: 'Limpeza de Colchões',
        optOdor: 'Remoção de Odores',
        optStain: 'Remoção de Manchas',
        optRug: 'Limpeza de Tapetes',
        optOther: 'Outro',
        labelMessage: 'Mensagem',
        btnSubmit: 'Solicitar Orçamento',
        contactInfoTitle: 'Informações de Contato',
        infoPhone: 'Telefone',
        infoEmail: 'Email',
        infoHours: 'Horário',
        infoLocation: 'Área de Atendimento',
        hoursText: 'Seg-Sáb: 8h - 18h',
        locationText: 'Atendendo Salt Lake City e Região',
        footerTagline: 'Serviços de limpeza profissionais para sua casa',
        footerQuickLinks: 'Links Rápidos',
        footerServices: 'Serviços',
        footerContact: 'Contato',
        footerRights: 'Todos os direitos reservados.'
    }
};

// ========================================
// DOM ELEMENTS
// ========================================
const preloader = document.getElementById('preloader');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const backToTop = document.getElementById('backToTop');
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselDots = document.getElementById('carouselDots');
const quoteForm = document.getElementById('quoteForm');
const heroParticles = document.getElementById('heroParticles');

// ========================================
// PRELOADER
// ========================================
function initPreloader() {
    const loadingPercentage = document.querySelector('.loading-percentage');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
        loadingPercentage.textContent = Math.round(progress) + '%';
    }, 100);
    
    // Prevent scrolling during preload
    document.body.style.overflow = 'hidden';
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initHeaderScroll() {
    let lastScroll = 0;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide scroll indicator when scrolling down
        if (scrollIndicator) {
            if (currentScroll > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// LANGUAGE SWITCHER
// ========================================
function initLanguageSwitcher() {
    let currentLang = 'en';
    
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });
    
    // Language selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            currentLang = lang;
            
            // Update current language display
            document.querySelector('.current-lang').textContent = lang.toUpperCase();
            
            // Update all translatable elements
            updateLanguage(lang);
            
            // Close dropdown
            langDropdown.classList.remove('active');
        });
    });
}

function updateLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (texts[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = texts[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// HERO PARTICLES
// ========================================
function initHeroParticles() {
    if (!heroParticles) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 30 + 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        heroParticles.appendChild(particle);
    }
}

// ========================================
// CAROUSEL
// ========================================
let currentSlide = 0;
let autoSlideInterval;

function initCarousel() {
    if (!carouselTrack || !carouselDots) return;
    
    const slides = carouselTrack.children;
    const slideCount = slides.length;
    
    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }
    
    // Navigation buttons
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            goToSlide(currentSlide - 1);
            startAutoSlide();
        });
    }
    
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            goToSlide(currentSlide + 1);
            startAutoSlide();
        });
    }
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoSlideInterval);
    }, { passive: true });
    
    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToSlide(currentSlide + 1);
            } else {
                goToSlide(currentSlide - 1);
            }
        }
    }
    
    // Start auto-slide
    startAutoSlide();
}

function goToSlide(index) {
    const slides = carouselTrack.children;
    const dots = carouselDots.children;
    const slideCount = slides.length;
    
    // Wrap around
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    currentSlide = index;
    
    // Move track
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    Array.from(dots).forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

// ========================================
// COUNTER ANIMATION
// ========================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    requestAnimationFrame(update);
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.service-card, .about-content, .stat-item, .feature-item, ' +
        '.testimonial-card, .contact-form-wrapper, .contact-info, ' +
        '.footer-grid > div'
    );
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add revealed class styles
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(revealStyles);

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// FORM VALIDATION & SUBMISSION
// ========================================
function initFormValidation() {
    if (!quoteForm) return;
    
    const submitBtn = quoteForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');
    
    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData.entries());
        
        // Validate required fields
        const requiredFields = ['name', 'phone', 'email', 'service'];
        let isValid = true;
        let firstError = null;
        
        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            const value = data[field]?.trim();
            
            if (!value) {
                isValid = false;
                input.style.borderColor = '#ef5350';
                if (!firstError) firstError = input;
            } else {
                input.style.borderColor = '';
            }
        });
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email && !emailRegex.test(data.email)) {
            isValid = false;
            const emailInput = document.getElementById('email');
            emailInput.style.borderColor = '#ef5350';
            if (!firstError) firstError = emailInput;
        }
        
        if (!isValid) {
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Update button to "Sending..."
        submitBtn.disabled = true;
        btnText.textContent = 'Sending message...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        submitBtn.style.opacity = '0.8';
        
        try {
            // Send to Formspree (free form backend service)
            // User needs to create an account at formspree.io and replace the endpoint
            const response = await fetch('https://formspree.io/f/xaqaqgnz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });
            
            if (response.ok) {
                // Success - update button
                btnText.textContent = 'Message sent!';
                btnIcon.className = 'fas fa-check';
                submitBtn.style.background = 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)';
                
                showNotification('Quote request sent successfully!', 'success');
                
                // Reset form
                quoteForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    btnText.textContent = 'Request a Quote';
                    btnIcon.className = 'fas fa-paper-plane';
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error - update button
            btnText.textContent = 'Error! Try again';
            btnIcon.className = 'fas fa-exclamation-circle';
            submitBtn.style.background = 'linear-gradient(135deg, #ef5350 0%, #d32f2f 100%)';
            
            showNotification('Failed to send message. Please try again.', 'error');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btnText.textContent = 'Request a Quote';
                btnIcon.className = 'fas fa-paper-plane';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 3000);
        }
    });
    
    // Clear error styles on input
    quoteForm.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#66BB6A' : '#4FC3F7'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(150%);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ========================================
// PARALLAX EFFECT
// ========================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.about-image, .why-us-image');
    
    const observerOptions = {
        threshold: 0,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.addEventListener('scroll', () => updateParallax(entry.target), { passive: true });
            }
        });
    }, observerOptions);
    
    parallaxElements.forEach(el => observer.observe(el));
}

function updateParallax(element) {
    const rect = element.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const offset = (scrollPercent - 0.5) * 30;
    
    element.style.transform = `translateY(${offset}px)`;
}

// ========================================
// ACTIVE NAV LINK
// ========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
function initButtonRipple() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// ========================================
// KEYBOARD NAVIGATION
// ========================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            langDropdown.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
function initPerformanceOptimizations() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeaderScroll();
    initMobileMenu();
    initLanguageSwitcher();
    initSmoothScroll();
    initHeroParticles();
    initCarousel();
    initCounterAnimation();
    initScrollReveal();
    initBackToTop();
    initFormValidation();
    initParallax();
    initActiveNavLink();
    initButtonRipple();
    initKeyboardNavigation();
    initPerformanceOptimizations();
});

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
