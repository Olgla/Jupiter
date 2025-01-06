const body = document.querySelector('body');
const footer = document.createElement('footer');
const year = new Date().getFullYear();

footer.innerText = `Olena Gladenko \u00A9 ${year}`;

document.querySelector("#footer");
footer.style.textAlign = 'center';
footer.style.backgroundColor = '#282828e6';

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

footer.style.height = `${headerHeight}px`;
footer.style.padding = `${headerHeight / 3}px`; 

body.appendChild(footer);

const skills = ['HTML', 'CSS', 'JavaScript', 'React','API fetch', 'Postman', 'Node.js', 'Figma'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerText = skill; 
    skillsList.append(skill);     
});