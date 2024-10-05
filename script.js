document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        setTimeout(() => {
            skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 100);
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'scale(0.9)';
        setTimeout(() => {
            project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            project.style.opacity = '1';
            project.style.transform = 'scale(1)';
        }, index * 200);
    });
});

function loadProjects() {
    const projects = [
        { title: "Website E-Commerce", description: "Sebuah platform belanja online yang responsif dengan fitur keranjang belanja dan pembayaran.", icon: "fas fa-shopping-cart" },
        { title: "Aplikasi Manajemen Tugas", description: "Aplikasi web untuk mengelola dan melacak tugas-tugas harian dengan antarmuka yang intuitif.", icon: "fas fa-tasks" },
        { title: "Portfolio Fotografi", description: "Galeri foto online yang elegan untuk menampilkan karya-karya fotografi.", icon: "fas fa-camera-retro" }
    ];

    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3><i class="${project.icon}"></i> ${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

window.onload = loadProjects;
