¡Excelente\! A continuación, ejecuto el prompt que hemos construido.

Te proporcionaré el código fuente completo para los tres archivos que necesitarás (`index.html`, `style.css`, `script.js`) y, después, las instrucciones paso a paso para subir tu proyecto a GitHub y publicarlo online.

-----

### **1. Código Fuente del Proyecto**

Crea tres archivos vacíos en una carpeta en tu ordenador con los siguientes nombres exactos. Luego, copia y pega el contenido correspondiente en cada uno.

#### **`index.html`**

Este archivo contiene toda la estructura y el contenido de tu página web.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CentralBox Detailing - Cuidado Artesanal para tu Coche en Madrid</title>
    <meta name="description" content="Servicios profesionales de detailing en Madrid. Lavado a mano, pulido de carrocería, limpieza de tapicerías y tratamientos cerámicos. ¡Pide tu cita!">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="main-header">
        <div class="container">
            <div class="logo">
                CentralBox Detailing
            </div>
            <nav class="main-nav">
                <ul class="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#galeria-testimonios">Galería</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            <button class="mobile-nav-toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <main>
        <section id="inicio" class="hero-section">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <h1>El cuidado artesanal que tu coche merece en Madrid</h1>
                <p>Confianza, precisión y máxima profesionalidad para devolverle el brillo a tu vehículo.</p>
                <a href="#contacto" class="cta-button">Reservar mi Cita Ahora</a>
            </div>
        </section>

        <section id="sobre-nosotros" class="content-section">
            <div class="container">
                <h2>Pasión por el Detalle</h2>
                <p class="section-subtitle">Somos CentralBox Detailing, un centro de detallado de vehículos nacido de la pasión por el mundo del motor y el trabajo bien hecho. Nuestra misión es ofrecer un servicio de máxima calidad, cercano y de total confianza, tratando cada vehículo con la meticulosidad que nos define. Creemos en la profesionalidad y en el cuidado artesanal como pilares para lograr resultados impecables.</p>
            </div>
        </section>

        <section id="servicios" class="content-section-dark">
            <div class="container">
                <h2>Nuestros Servicios de Detailing</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <i class="fas fa-hand-sparkles"></i>
                        <h3>Lavado a Mano Detallado</h3>
                        <p>Limpieza exterior e interior exhaustiva, prestando atención a cada rincón de tu vehículo.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-car-side"></i>
                        <h3>Pulido de Carrocería</h3>
                        <p>Eliminamos imperfecciones y devolvemos el brillo original a la pintura con pulido en 1 o 2 pasos.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-couch"></i>
                        <h3>Limpieza de Tapicerías</h3>
                        <p>Tratamiento profundo para todo tipo de tapicerías, eliminando manchas y olores.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Tratamiento Cerámico</h3>
                        <p>Aplica una capa de protección duradera que repele la suciedad y aporta un brillo espectacular.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-baby-carriage"></i>
                        <h3>Sillas y Carritos de Bebé</h3>
                        <p>Higienización completa para la seguridad y confort de los más pequeños.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-paw"></i>
                        <h3>Especial Mascotas</h3>
                        <p>Eliminamos pelos y olores para que tu coche vuelva a estar como nuevo.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="galeria-testimonios" class="content-section">
            <div class="container">
                <h2>Resultados que Hablan por Sí Mismos</h2>
                
                <h3 class="subsection-title">Nuestros Últimos Trabajos</h3>
                <div class="instagram-gallery">
                    <img src="https://via.placeholder.com/400x400.png?text=Detalle+Pulido" alt="Trabajo de detailing 1">
                    <img src="https://via.placeholder.com/400x400.png?text=Interior+Impecable" alt="Trabajo de detailing 2">
                    <img src="https://via.placeholder.com/400x400.png?text=Motor+Limpio" alt="Trabajo de detailing 3">
                    <img src="https://via.placeholder.com/400x400.png?text=Rueda+Brillante" alt="Trabajo de detailing 4">
                    <img src="https://via.placeholder.com/400x400.png?text=Tapicería+Nueva" alt="Trabajo de detailing 5">
                    <img src="https://via.placeholder.com/400x400.png?text=Coche+Cerámico" alt="Trabajo de detailing 6">
                </div>

                <h3 class="subsection-title">La Opinión de Nuestros Clientes</h3>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <span class="testimonial-name">Carlos L.</span>
                            <div class="testimonial-rating">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p>"Un trabajo espectacular. El coche parece recién salido del concesionario. Máxima profesionalidad y un trato excelente. Totalmente recomendable."</p>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <span class="testimonial-name">María G.</span>
                            <div class="testimonial-rating">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p>"Llevé el coche con la tapicería destrozada por los niños y me lo han dejado nuevo. No puedo estar más contenta con el resultado. Volveré sin duda."</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contacto" class="content-section-dark">
            <div class="container">
                <h2>Contacta y Reserva tu Cita</h2>
                <div class="contact-wrapper">
                    <div class="contact-form">
                        <h3>Reserva Directa</h3>
                        <p>Elige un servicio y una fecha. Nos pondremos en contacto para confirmar.</p>
                        <form id="booking-form">
                            <select name="service" required>
                                <option value="">-- Elige un servicio --</option>
                                <option value="lavado">Lavado a Mano Detallado</option>
                                <option value="pulido">Pulido de Carrocería</option>
                                <option value="tapiceria">Limpieza de Tapicerías</option>
                                <option value="ceramico">Tratamiento Cerámico</option>
                            </select>
                            <input type="date" name="date" required>
                            <input type="text" name="name" placeholder="Tu Nombre" required>
                            <input type="email" name="email" placeholder="Tu Email" required>
                            <input type="tel" name="phone" placeholder="Tu Teléfono" required>
                            <button type="submit" class="cta-button">Solicitar Reserva</button>
                        </form>
                        <h3 class="subsection-title-form">¿Otras consultas?</h3>
                        <form id="contact-form">
                             <textarea name="message" placeholder="Escribe aquí tu mensaje..." rows="4" required></textarea>
                             <div class="form-buttons">
                                <button type="submit" class="cta-button-secondary">Enviar por Email</button>
                                <button type="button" id="whatsapp-button" class="cta-button-whatsapp"><i class="fab fa-whatsapp"></i> Enviar por WhatsApp</button>
                             </div>
                        </form>
                    </div>
                    <div class="contact-info">
                        <h3>Nuestros Datos</h3>
                        <p><i class="fas fa-map-marker-alt"></i> Calle Ficticia 123, 28080, Madrid</p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+34600123456">(+34) 600 123 456</a></p>
                        <p><i class="fas fa-envelope"></i> <a href="mailto:contacto@centralboxdetailing.es">contacto@centralboxdetailing.es</a></p>
                        <p><i class="fas fa-clock"></i> Lunes a Viernes: 9:00 - 18:00</p>
                        <div class="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.1399435868!2d-3.844339913988849!3d40.43809861036067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1661874288825!5m2!1ses!2ses" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <div class="container">
            <p>&copy; 2025 CentralBox Detailing. Todos los derechos reservados.</p>
            <div class="social-links">
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>

</body>
</html>
```

#### **`style.css`**

Este archivo define todo el aspecto visual de tu web.

```css
/* --- VARIABLES Y CONFIGURACIÓN GENERAL --- */
:root {
    --color-background: #F5F5F7;
    --color-background-dark: #1a1a1a;
    --color-primary: #B49B6C; /* Dorado oscuro */
    --color-text: #222222;
    --color-text-light: #f0f0f0;
    --color-secondary-text: #6c757d;
    --font-headings: 'Montserrat', sans-serif;
    --font-body: 'Lato', sans-serif;
    --header-height: 80px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
}

body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3 {
    font-family: var(--font-headings);
    color: var(--color-primary);
    font-weight: 700;
}

h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 40px;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

a {
    color: var(--color-primary);
    text-decoration: none;
}

/* --- HEADER Y NAVEGACIÓN --- */
.main-header {
    background-color: rgba(26, 26, 26, 0.9);
    backdrop-filter: blur(10px);
    padding: 0 20px;
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.logo {
    font-family: var(--font-headings);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    color: var(--color-text-light);
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-links a:hover, .nav-links a.active {
    color: var(--color-primary);
}

.mobile-nav-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

/* --- BOTONES CTA --- */
.cta-button, .cta-button-secondary, .cta-button-whatsapp {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 5px;
    font-family: var(--font-headings);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    text-align: center;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button {
    background-color: var(--color-primary);
    color: white;
}

.cta-button:hover {
    background-color: #a18a5e;
    transform: translateY(-2px);
}

.cta-button-secondary {
    background-color: var(--color-secondary-text);
    color: white;
}
.cta-button-secondary:hover {
    background-color: #5a6268;
}

.cta-button-whatsapp {
    background-color: #25D366;
    color: white;
}
.cta-button-whatsapp:hover {
    background-color: #1DAE56;
}


/* --- SECCIONES --- */
.content-section {
    padding: 80px 0;
}
.content-section-dark {
    padding: 80px 0;
    background-color: var(--color-background-dark);
    color: var(--color-text-light);
}
.content-section-dark h2, .content-section-dark h3 {
    color: var(--color-primary);
}
.section-subtitle {
    max-width: 700px;
    margin: 0 auto 40px;
    text-align: center;
    font-size: 1.1rem;
    color: var(--color-secondary-text);
}

/* HERO SECTION */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: white;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* SERVICES SECTION */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}
.service-card {
    background-color: #2a2a2a;
    padding: 40px 30px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.service-card i {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 20px;
}
.service-card p {
    color: #ccc;
}

/* GALERÍA Y TESTIMONIOS */
.subsection-title {
    text-align: center;
    color: var(--color-text);
    margin-top: 60px;
    margin-bottom: 30px;
}
.instagram-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}
.instagram-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
}
.instagram-gallery img:hover {
    transform: scale(1.05);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;
}
.testimonial-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    border-left: 5px solid var(--color-primary);
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}
.testimonial-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.testimonial-name {
    font-family: var(--font-headings);
    font-weight: 700;
}
.testimonial-rating {
    color: #ffc107;
}

/* CONTACTO Y FORMULARIOS */
.contact-wrapper {
    display: flex;
    gap: 50px;
}
.contact-form, .contact-info {
    flex: 1;
}
#booking-form, #contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
input, select, textarea {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #555;
    background-color: #333;
    color: white;
    font-family: var(--font-body);
}
textarea {
    resize: vertical;
}
.form-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.contact-info p {
    margin-bottom: 15px;
    font-size: 1.1rem;
}
.contact-info p i {
    color: var(--color-primary);
    margin-right: 10px;
    width: 20px;
    text-align: center;
}
.map-container {
    margin-top: 20px;
    border-radius: 8px;
    overflow: hidden;
}

/* FOOTER */
.main-footer {
    background-color: #111;
    color: var(--color-secondary-text);
    padding: 30px 0;
}
.main-footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.social-links a {
    color: var(--color-secondary-text);
    margin-left: 20px;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}
.social-links a:hover {
    color: var(--color-primary);
}


/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background-color: rgba(26, 26, 26, 0.98);
    }
    .nav-links.active {
        display: flex;
    }
    .nav-links li {
        margin: 0;
        text-align: center;
    }
    .nav-links a {
        display: block;
        padding: 20px;
        border-bottom: 1px solid #444;
    }
    .mobile-nav-toggle {
        display: block;
    }

    .contact-wrapper {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .hero-content h1 { font-size: 2rem; }
    .hero-content p { font-size: 1rem; }
    .form-buttons {
        flex-direction: column;
    }
    .main-footer .container {
        flex-direction: column;
        gap: 15px;
    }
}
```

#### **`script.js`**

Este archivo gestionará la interactividad de la web.

```javascript
document.addEventListener('DOMContentLoaded', function() {

    // --- NAVEGACIÓN MÓVIL ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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
        const phoneNumber = '34600123456'; // IMPORTANTE: Reemplaza con tu número de teléfono
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
```

-----

### **2. Instrucciones para Subir a GitHub y Publicar**

Sigue estos pasos para tener tu proyecto en un repositorio y visible en internet.

#### **Paso 1: Crear un Repositorio en GitHub**

1.  Ve a [GitHub.com](https://github.com/) e inicia sesión.
2.  Haz clic en el icono `+` en la esquina superior derecha y selecciona **"New repository"**.
3.  **Nombre del repositorio:** Escribe un nombre, por ejemplo `web-centralbox-detailing`.
4.  **Descripción:** Añade una descripción corta (opcional).
5.  Asegúrate de que esté marcado como **Público (Public)**.
6.  **No** selecciones "Add a README file", "Add .gitignore" o "Choose a license".
7.  Haz clic en **"Create repository"**.

#### **Paso 2: Subir tus Archivos**

Ahora seguirás las instrucciones que GitHub te muestra en la página siguiente.

1.  Abre una terminal o línea de comandos en tu ordenador.

2.  Navega hasta la carpeta donde guardaste los tres archivos (`index.html`, `style.css`, `script.js`) usando el comando `cd`.

    * Ejemplo: `cd C:\Users\TuUsuario\Documents\MiWeb`

3.  Ejecuta los siguientes comandos **uno por uno**:

    ```bash
    # Inicializa un repositorio de Git en tu carpeta
    git init

    # Añade todos los archivos al seguimiento de Git
    git add .

    # Crea tu primer "commit" (una instantánea de tu código)
    git commit -m "Versión inicial del sitio web de CentralBox Detailing"

    # Define la rama principal como "main"
    git branch -M main

    # Conecta tu repositorio local con el de GitHub (copia esta línea de tu página de GitHub)
    git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git

    # Sube tus archivos a GitHub
    git push -u origin main
    ```

    **Importante:** Reemplaza `TU_USUARIO` y `NOMBRE_DEL_REPOSITORIO` con tus propios datos.

#### **Paso 3: Activar GitHub Pages para Publicar tu Web**

1.  En la página de tu repositorio en GitHub, ve a la pestaña **"Settings"**.
2.  En el menú de la izquierda, haz clic en **"Pages"**.
3.  Bajo la sección "Branch", asegúrate de que el menú desplegable esté seleccionado en **`main`** y la carpeta en **`/ (root)`**.
4.  Haz clic en **"Save"**.

¡Listo\! GitHub tardará uno o dos minutos en publicar tu web. En la misma sección de "Pages", aparecerá un recuadro verde con la URL de tu sitio web, algo como: `https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/`.

Ya puedes visitar esa URL para ver tu nueva página web en funcionamiento.