const _setBusinessData = (map = []) => {
    map.forEach(({ query = '', attributes = {}, innerText = '', children = null }) => {
        const node = document.querySelector(query);
        if (node instanceof HTMLElement) {
            Object.keys(attributes).forEach(attribute => {
                const value = attributes[attribute];
                node.setAttribute(attribute, value);
            });
            if (innerText) {
                node.innerText = innerText;
            }
            if (children instanceof Function) {
                node.append(children());
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const data = Object.freeze({
        phoneNumber: '34667798497',
        email: 'centralboxdetailing@gmail.com',
        address: 'Avenida del General Perón, 21, Parking Presidente Carmona Planta -1, 28020 Madrid',
        facebook: 'https://www.facebook.com/Centralbox-Detailing-Bernabéu-107181584752801/',
        instagram: 'https://www.instagram.com/centralboxdetailing',
        mapsUrl: 'https://maps.app.goo.gl/8kWw15X3ArqySUiy7',
        mapsIframeUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6072.06044302646!2d-3.6982179237255925!3d40.452468071434005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229d4bd3a32ef%3A0xa125bb7dfd05c972!2sCentralbox%20Detailing%20Bernab%C3%A9u!5e0!3m2!1ses!2ses!4v1753920211398!5m2!1ses!2ses"'
    });

    const WHASTAPP_LINK = `https://wa.me/${data.phoneNumber}`;

    _setBusinessData([
        {
            query: '[data-ref="phone"]',
            attributes: { href: `tel:+${data.phoneNumber}` },
            innerText: data.phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '(+$1) $2 $3 $4')
        },
        {
            query: '[data-ref="whatsapp"]',
            attributes: { href: WHASTAPP_LINK }
        },
        {
            query: '[data-ref="email"]',
            attributes: { href: `mailto:${data.email}` },
            innerText: `${data.email}`
        },
        {
            query: '[data-ref="address"]',
            children: () => {
                const link = document.createElement('a');
                const text = document.createTextNode(data.address);
                link.setAttribute('href', data.mapsUrl);
                link.setAttribute('target', '_blank');
                link.setAttribute('aria-label', 'Goggle Maps');
                link.append(text);

                return link;
            }
        },
        {
            query: '[data-ref="facebook"]',
            attributes: { href: data.facebook }
        },
        {
            query: '[data-ref="instagram"]',
            attributes: { href: data.instagram }
        },
        {
            query: '[data-ref="maps-iframe"]',
            attributes: { src: data.mapsIframeUrl }
        }
    ]);

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
        const whatsappUrl = `${WHASTAPP_LINK}?text=${encodeURIComponent(userMessage)}`;
        window.open(whatsappUrl, '_blank');
    });

    // --- MANEJO DE FORMULARIOS (PREVENCIÓN) ---
    // Muestra una alerta en lugar de enviar el formulario, ya que no hay backend
    const bookingForm = document.getElementById('booking-form');
    const emailContactForm = document.getElementById('contact-form');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert(
            'Gracias por tu solicitud de reserva. Nos pondremos en contacto contigo pronto para confirmar los detalles.'
        );
        bookingForm.reset();
    });

    emailContactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te responderemos lo antes posible.');
        emailContactForm.reset();
    });

    const acceptCheckbox = document.querySelector('#accept-checkbox');
    const formSubmitButton = document.querySelector('#form-submit-button');
    if (acceptCheckbox && formSubmitButton) {
        acceptCheckbox.addEventListener('change', () => {
            const isChecked = acceptCheckbox.checked;
            if (isChecked) {
                formSubmitButton.removeAttribute('disabled');
            } else {
                formSubmitButton.setAttribute('disabled', 'disabled');
            }
        });
    }
});
