document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Previene el envío tradicional y la redirección

            const formData = new FormData(contactForm);

            try {
                // Envía los datos a Formsubmit de forma asíncrona
                const response = await fetch('https://formsubmit.co/ajax/msparraga30@gmail.com', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset(); // Limpia los campos
                } else {
                    alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
            }
        });
    }

    // 2. Animación de la Barra de Navegación al hacer Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Animación de Scroll-Reveal para las Secciones
    const observerOptions = {
        root: null, // El viewport es el root
        threshold: 0.1, // 10% del elemento debe ser visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar después de la animación
            }
        });
    }, observerOptions);

    // Selecciona todas las tarjetas y elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.solucion-card, .beneficio-item, .equipo-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // 4. Lógica para el botón "Volver al Inicio"
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // El botón aparece después de 300px de scroll
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

});