// Animation d'apparition progressive des éléments
        function observeElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });

            const cards = document.querySelectorAll('.profile-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
                observer.observe(card);
            });
        }

        // Scroll smooth vers la section profil
        function scrollToSection() {
            const profileSection = document.getElementById('profile');
            profileSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Effet parallax léger sur les orbes flottantes
        function initParallax() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.floating-orb');
                
                parallaxElements.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }

        // Animation du curseur personnalisé
        function initCursorEffect() {
            const cursor = document.createElement('div');
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transition: transform 0.1s ease-out;
            `;
            document.body.appendChild(cursor);

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - 10 + 'px';
                cursor.style.top = e.clientY - 10 + 'px';
            });

            document.addEventListener('mousedown', () => {
                cursor.style.transform = 'scale(1.5)';
            });

            document.addEventListener('mouseup', () => {
                cursor.style.transform = 'scale(1)';
            });
        }

        // Initialisation au chargement de la page
        document.addEventListener('DOMContentLoaded', () => {
            observeElements();
            initParallax();
            initCursorEffect();
        });

        // Easter egg : Animation spéciale au clic sur le titre
        document.querySelector('.hero-title').addEventListener('click', () => {
            const title = document.querySelector('.hero-title');
            title.style.animation = 'none';
            setTimeout(() => {
                title.style.animation = 'fadeInUp 1s ease-out';
            }, 10);
        });