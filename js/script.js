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

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Postman', 'NodeJS', 'Figma'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
    let skillsItem = document.createElement('li');    
    let skillImage = document.createElement('img');

    skillImage.src = `./images/${skill.toLowerCase()}.svg`;
    skillImage.alt = `${skill} icon`;

    skillsItem.innerText = skill;   
    console.log(skillsItem);      
    skillsItem.className = 'skills-item';

    skillsItem.append(skillImage);
    skillsList.append(skillsItem);
});
