        // Función para lanzar confeti
        function shootConfetti() {
            // Generar confeti en posiciones aleatorias
            const end = Date.now() + 6 * 1000; // Duración de 6 segundos
            const interval = setInterval(() => {
                // Generar confeti
                confetti({
                    particleCount: 100, // Número de partículas
                    angle: 90, // Ángulo de lanzamiento
                    spread: 700, // Dispersión
                    startVelocity: 30, // Velocidad inicial
                    decay: 0.9, // Decaimiento
                    colors: ['#ff0', '#0f0', '#00f', '#f00'], // Colores del confeti
                    origin: {
                        x: Math.random(), // Posición aleatoria en X
                        y: Math.random() - 0.2 // Posición aleatoria en Y
                    }
                });

                if (Date.now() > end) {
                    clearInterval(interval); // Detener el intervalo después de 2 segundos
                }
            }, 250); // Intervalo de 250ms
        }

        // Añadir evento al botón
        document.getElementById('confettiButton').addEventListener('click', shootConfetti);