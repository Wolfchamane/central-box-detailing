const _loadData = async () => {
    let url = window.location.href;
    if (url.endsWith('/')) {
        url = url.substring(0, Number(url.length - 1));
    }
    url = [url, 'data.json'].join('/');
    const res = await fetch(new URL(url), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    return await res.json();
};

const otherQueriesWATextTemplate = ({ name = '', text = '' }) => `Hola, soy ${name}.

${text}

Muchas gracias`;

const OTHER_QUERIES_FORM_INPUTS = {
    name: {
        required: true,
        kind: 'input',
        type: 'text',
        placeholder: 'Tú nombre'
    },
    'other-questions': {
        required: true,
        kind: 'textarea',
        placeholder: 'Escribe aquí tú mensaje ...',
        rows: 4
    }
};

const CONTACT_FORM_INPUTS = DATA => ({
    service: {
        required: true,
        kind: 'select',
        type: '',
        options: [{ value: '', title: '-- Elige un servicio --' }, ...DATA.services]
    },
    date: {
        required: true,
        kind: 'input',
        type: 'date'
    },
    name: {
        required: true,
        kind: 'input',
        type: 'text',
        placeholder: 'Tú nombre'
    },
    email: {
        required: true,
        kind: 'input',
        type: 'email',
        placeholder: 'Tú email de contacto'
    },
    phone: {
        required: true,
        kind: 'input',
        type: 'tel',
        placeholder: 'Tú teléfono de contacto'
    },
    'accept-checkbox': {
        required: true,
        kind: 'input',
        type: 'checkbox',
        className: 'checkbox-wrapper',
        children: parent => {
            const link = document.createElement('A');
            link.setAttribute('href', './politica-de-privacidad.html');
            link.innerText = 'política de protección de datos';
            const text = document.createTextNode('He léido y acepto la ');
            const span = document.createElement('SPAN');
            span.appendChild(text);
            span.appendChild(link);
            parent.appendChild(span);
        }
    }
});

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

const _bindContactFormCheckboxWithButton = ({ checkbox, button }) => {
    if (checkbox && button) {
        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            if (isChecked) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', 'disabled');
            }
        });
    }
};

const _injectForm = ({ parent, props = {}, inputs = [], submitButton }) => {
    const form = document.createElement('FORM');
    Object.keys(props).forEach(prop => form.setAttribute(prop, props[prop]));
    form.style.marginTop = '1em';

    Object.keys(inputs).forEach(key => {
        const { required, kind, type, options, placeholder, children, className, ...rest } = inputs[key];
        const label = document.createElement('LABEL');
        label.setAttribute('for', key);
        const input = document.createElement(kind);
        input.setAttribute('id', key);
        input.setAttribute('required', `${!!required}`);
        Object.keys(rest).forEach(attr => input.setAttribute(attr, rest[attr]));

        switch (kind) {
            case 'select':
                (options || []).forEach(({ value, title }) => {
                    const option = document.createElement('OPTION');
                    option.setAttribute('value', value);
                    option.innerText = title;
                    input.appendChild(option);
                });
                break;
            case 'input':
            default:
                input.setAttribute('name', key);
                input.setAttribute('type', type || 'text');
                input.setAttribute('placeholder', placeholder || '');
                break;
        }

        label.appendChild(input);

        if (className) {
            label.classList.add(className);
        }

        if (children instanceof Function) {
            children(label);
        }

        form.appendChild(label);
    });

    if (submitButton instanceof Function) {
        submitButton(form);
    }

    parent.appendChild(form);
};

document.addEventListener('DOMContentLoaded', async () => {
    const DATA = await _loadData();
    const WHATSAPP_LINK = `https://wa.me/${DATA.phoneNumber}`;

    _setBusinessData([
        {
            query: '[data-ref="phone"]',
            attributes: { href: `tel:+${DATA.phoneNumber}` },
            innerText: DATA.phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '(+$1) $2 $3 $4')
        },
        {
            query: '[data-ref="whatsapp"]',
            attributes: { href: WHATSAPP_LINK }
        },
        {
            query: '[data-ref="email"]',
            attributes: { href: `mailto:${DATA.email}` },
            innerText: `${DATA.email}`
        },
        {
            query: '[data-ref="address"]',
            children: () => {
                const link = document.createElement('a');
                const text = document.createTextNode(DATA.address);
                link.setAttribute('href', DATA.mapsUrl);
                link.setAttribute('target', '_blank');
                link.setAttribute('aria-label', 'Goggle Maps');
                link.append(text);

                return link;
            }
        },
        {
            query: '[data-ref="facebook"]',
            attributes: { href: DATA.facebook }
        },
        {
            query: '[data-ref="instagram"]',
            attributes: { href: DATA.instagram }
        },
        {
            query: '[data-ref="maps-iframe"]',
            attributes: { src: DATA.mapsIframeUrl }
        }
    ]);

    _injectForm({
        parent: document.querySelector('#contacto #contact-form-wrapper'),
        props: {
            id: 'booking-form',
            href: `https://formsubmit.co/${encodeURIComponent(DATA.email)}`,
            method: 'POST'
        },
        inputs: CONTACT_FORM_INPUTS(DATA),
        submitButton: form => {
            const button = document.createElement('BUTTON');
            button.setAttribute('id', `${form.getAttribute('id')}-submit`);
            button.setAttribute('type', 'submit');
            button.setAttribute('disabled', 'disabled');
            button.classList.add('cta-button');
            button.innerText = 'Solicitar Reserva';
            form.appendChild(button);
        }
    });
    _bindContactFormCheckboxWithButton({
        checkbox: document.querySelector('#accept-checkbox'),
        button: document.querySelector(`#booking-form-submit`)
    });
    _injectForm({
        parent: document.querySelector('#contacto #other-queries'),
        props: {
            id: 'booking-form',
            href: `https://formsubmit.co/${encodeURIComponent(DATA.email)}`,
            method: 'POST'
        },
        inputs: OTHER_QUERIES_FORM_INPUTS,
        submitButton: form => {
            const div = document.createElement('DIV');
            div.classList.add('form-buttons');
            const submitButton = document.createElement('BUTTON');
            submitButton.setAttribute('type', 'submit');
            submitButton.classList.add('cta-button-secondary');
            submitButton.innerText = 'Enviar consulta por email';
            div.appendChild(submitButton);
            const waButton = document.createElement('BUTTON');
            waButton.classList.add('cta-button-whatsapp');
            waButton.addEventListener('click', () => {
                const userMessage = otherQueriesWATextTemplate({
                    name: form.name.value,
                    text: form['other-questions'].value
                });
                const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(userMessage)}`;
                window.open(whatsappUrl, '_blank');
            });
            const waIcon = document.createElement('I');
            waIcon.classList.add('fab');
            waIcon.classList.add('fa-whatsapp');
            const waText = document.createTextNode(' Enviar por WhatsApp');
            waButton.appendChild(waIcon);
            waButton.appendChild(waText);
            div.appendChild(waButton);
            form.appendChild(div);
        }
    });

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
});
