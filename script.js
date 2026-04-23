const btnBiodata = document.getElementById('btn-biodata');
const btnAbout = document.getElementById('btn-about');

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = (sectionId === 'home-section') ? 'flex' : 'block';
    }
}

btnBiodata.addEventListener('click', () => showSection('biodata-section'));
btnAbout.addEventListener('click', () => showSection('about-section'));

showSection('home-section');