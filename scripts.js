document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#555';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#333';
    });
});
