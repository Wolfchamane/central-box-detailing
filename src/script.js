const _setBusinessData = (map = []) => {
    map.forEach(({ query, attributes, innerText, children }) => {
        const node = document.querySelector(query);
        if (node instanceof HTMLElement) {
            (attributes || []).forEach(({ attribute, value }) => {
                node.setAttribute(attribute, value);
            });
            if (innerText) {
                node.innerText = innerText;
            }
            if (children) {
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
        mapsUrl: 'https://maps.app.goo.gl/zj8d2UYqNztSHBR49'
    });

    const WHASTAPP_LINK = `https://wa.me/${data.phoneNumber}`;

    _setBusinessData([
        {
            query: '[data-ref="phone"]',
            attributes: [{ attribute: 'href', value: `tel:+${data.phoneNumber}` }],
            innerText: data.phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '(+$1) $2 $3 $4')
        },
        {
            query: '[data-ref="whatsapp"]',
            attributes: [{ attribute: 'href', value: WHASTAPP_LINK }]
        },
        {
            query: '[data-ref="email"]',
            attributes: [{ attribute: 'href', value: `mailto:${data.email}` }],
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
            attributes: [{ attribute: 'href', value: data.facebook }]
        },
        {
            query: '[data-ref="instagram"]',
            attributes: [{ attribute: 'href', value: data.instagram }]
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
