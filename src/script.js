document.addEventListener('DOMContentLoaded', function() {

    // --- NAVEGACIÓN MÓVIL ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        navLinks.classList.toggle('active');
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- NAVEGACIÓN ACTIVA AL HACER SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.main-nav .nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - (document.querySelector('.main-header').offsetHeight + 50)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // --- BOTÓN DE WHATSAPP ---
    const whatsappButton = document.getElementById('whatsapp-button');
    const contactFormMessage = document.querySelector('#contact-form textarea[name="message"]');

    whatsappButton.addEventListener('click', () => {
        const userMessage = contactFormMessage.value;
        const phoneNumber = '34667798497'; // IMPORTANTE: Reemplaza con tu número de teléfono
        let whatsappUrl = `https://wa.me/${phoneNumber}`;

        if (userMessage) {
            whatsappUrl += `?text=${encodeURIComponent(userMessage)}`;
        }

        window.open(whatsappUrl, '_blank');
    });

    // --- MANEJO DE FORMULARIOS (PREVENCIÓN) ---
    // Muestra una alerta en lugar de enviar el formulario, ya que no hay backend
    const bookingForm = document.getElementById('booking-form');
    const emailContactForm = document.getElementById('contact-form');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu solicitud de reserva. Nos pondremos en contacto contigo pronto para confirmar los detalles.');
        bookingForm.reset();
    });

    emailContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te responderemos lo antes posible.');
        emailContactForm.reset();
    });

});