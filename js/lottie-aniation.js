 // Simple animated shapes using code since we can't load external Lottie files
        function createAnimatedSVG(containerId, color1, color2) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('viewBox', '0 0 200 200');
            
            // Create animated circles
            for (let i = 0; i < 5; i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', 50 + (i * 25));
                circle.setAttribute('cy', 100);
                circle.setAttribute('r', 5 + (i * 2));
                circle.setAttribute('fill', i % 2 === 0 ? color1 : color2);
                circle.setAttribute('opacity', '0.8');
                
                const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
                animate.setAttribute('attributeName', 'transform');
                animate.setAttribute('type', 'scale');
                animate.setAttribute('values', '1;1.5;1');
                animate.setAttribute('dur', (1 + i * 0.2) + 's');
                animate.setAttribute('repeatCount', 'indefinite');
                animate.setAttribute('begin', (i * 0.2) + 's');
                
                circle.appendChild(animate);
                svg.appendChild(circle);
            }
            
            container.appendChild(svg);
        }

        function createIconAnimation(containerId, paths) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('viewBox', '0 0 100 100');
            
            paths.forEach((pathData, index) => {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', pathData);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', '#4ecdc4');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('stroke-linecap', 'round');
                
                const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animate.setAttribute('attributeName', 'stroke-dasharray');
                animate.setAttribute('values', '0,100;50,50;100,0');
                animate.setAttribute('dur', '2s');
                animate.setAttribute('repeatCount', 'indefinite');
                animate.setAttribute('begin', (index * 0.3) + 's');
                
                path.appendChild(animate);
                svg.appendChild(path);
            });
            
            container.appendChild(svg);
        }

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Hero animation
            createAnimatedSVG('hero-lottie', '#ff6b6b', '#4ecdc4');
            
            // Feature icons
            createIconAnimation('speed-icon', [
                'M20,50 L40,30 L60,50 L80,30',
                'M25,60 L35,40 L55,60 L75,40'
            ]);
            
            createIconAnimation('scalable-icon', [
                'M30,30 L70,30 L70,70 L30,70 Z',
                'M40,40 L60,40 L60,60 L40,60 Z'
            ]);
            
            createIconAnimation('interactive-icon', [
                'M50,20 L50,80 M20,50 L80,50',
                'M35,35 L65,35 L65,65 L35,65 Z'
            ]);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });