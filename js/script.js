// Toggle mobile navigation menu
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
});