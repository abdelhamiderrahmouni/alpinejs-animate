export default function (Alpine) {
    Alpine.directive('animate', (el, { value, expression, modifiers }, { evaluateLater, cleanup }) => {
        let delay = 0;
        let repeat = 1;
        let interval = 1000; // Default interval in milliseconds
        let duration = 1000; // Default duration in milliseconds

        // Extract delay, repeat, interval, and duration values from modifiers
        if (modifiers.includes('delay')) {
            delay = parseInt(modifiers[modifiers.indexOf('delay') + 1]);
        }

        if (modifiers.includes('repeat')) {
            const repeatIndex = modifiers.indexOf('repeat') + 1;
            const repeatValue = modifiers[repeatIndex];
            repeat = repeatValue === 'infinite' ? 'infinite' : parseInt(repeatValue);

            // Check for interval explicitly or implicitly
            if (modifiers.includes('interval')) {
                interval = parseInt(modifiers[modifiers.indexOf('interval') + 1]);
            } else if (!isNaN(parseInt(modifiers[repeatIndex + 1]))) {
                interval = parseInt(modifiers[repeatIndex + 1]);
            }
        }

        // Check for duration.
        if (modifiers.includes('duration')) {
            duration = parseInt(modifiers[modifiers.indexOf('duration') + 1]);
        }

        let animateElement = () => {
            let classes = ['animate__animated'];
            expression.split(" ").forEach(c => classes.push(`animate__${c}`));

            let runAnimation = () => {
                el.style.visibility = 'visible';
                el.classList.add(...classes);
                el.style.setProperty('--animate-duration', `${duration / 1000}s`);

                if (repeat === 'infinite' || repeat > 1) {
                    setTimeout(() => {
                        el.classList.remove(...classes);

                        if (repeat !== 'infinite') {
                            repeat--;
                        }

                        setTimeout(runAnimation, interval); // Interval plus duration for total cycle time
                    }, interval);
                }
            };

            if (delay) {
                setTimeout(runAnimation, delay);
            } else {
                runAnimation();
            }
        };

        // Initially hide the element using a class
        el.style.visibility = 'hidden';

        // If the user want to animate the element when it intersects with the viewport
        if (modifiers.includes('intersect')) {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateElement();
                        observer.disconnect();
                    }
                });
            }, { threshold: getThreshold(modifiers) });

            observer.observe(el);

            cleanup(() => {
                observer.disconnect();
            });
        } else {
            animateElement();
        }
    });
}

function getThreshold(modifiers) {
    if (modifiers.includes('full')) {
        return 0.99;
    }

    if (modifiers.includes('half')) {
        return 0.5;
    }

    if (!modifiers.includes('threshold')) {
        return 0;
    }

    const threshold = modifiers[modifiers.indexOf('threshold') + 1];

    return threshold === '1' ? 1 : Number(`.${threshold}`);
}