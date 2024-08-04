document.addEventListener('DOMContentLoaded', () => {
    // Animate header text on load
    const headerText = document.querySelector('header h1');
    headerText.animate([
        { transform: 'translateY(-100px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });

    // Animate gallery images on hover
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.animate([
                { transform: 'scale(1)', filter: 'brightness(100%)' },
                { transform: 'scale(1.1)', filter: 'brightness(120%)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });
        img.addEventListener('mouseleave', () => {
            img.animate([
                { transform: 'scale(1.1)', filter: 'brightness(120%)' },
                { transform: 'scale(1)', filter: 'brightness(100%)' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        });
    });
});
