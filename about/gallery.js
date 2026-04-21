document.getElementById('home').addEventListener('click', function() {
    showSection('home-section');
});
document.getElementById('about').addEventListener('click', function() {
    showSection('about-section');
});
document.getElementById('contact').addEventListener('click', function() {
    showSection('contact-section');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

showSection('home-section');