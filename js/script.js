'use strict';
const body = document.querySelector('body');
const footer = document.createElement('footer');
const year = new Date().getFullYear();

footer.innerText = `O. Gladenko \u00A9 ${year}`;

document.querySelector('#footer');
footer.style.textAlign = 'center';
footer.style.backgroundColor = '#282828e6';
footer.style.marginTop = '1em';
footer.style.fontStyle = 'italic';
footer.style.fontSize = '80%';

// MULTIPLE FORMAT DOESN'T WORK??
// footer.style.cssText = "textAlign: center; backgroundColor: 282828e6;";

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

footer.style.height = `${headerHeight}px`;
footer.style.padding = `${headerHeight / 3}px`; 


body.appendChild(footer);

// ============SKILLS====================== //

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'NodeJS', 'Postman'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
    let skillsItem = document.createElement('li');    
    let skillImage = document.createElement('img');

    skillImage.src = `./images/${skill.toLowerCase()}.svg`;
    skillImage.alt = `${skill} icon`;

    skillsItem.innerText = skill;   
         
    skillsItem.className = 'skills-item';
    
    skillsItem.append(skillImage);
    skillsList.append(skillsItem);
});


// ===============MEDIA QUERIES WORK BETTER===================

// window.addEventListener('resize', function() {
//     let windowWidth = this.window.innerWidth;
//     if (windowWidth < 352) {
//         skillsList.style.gridAutoRows = "4em";
//         skillsList.style.marginLeft = "inherit"; 
//         skillsList.style.marginRight = "inherit"; 
//     } else if (windowWidth >= 352 && windowWidth < 547) {
//         skillsList.style.marginLeft = "1em";
//         skillsList.style.marginRight = "1em";
//     } else if (windowWidth >= 547 && windowWidth < 720) {
//         skillsList.style.marginLeft = "2em";
//         skillsList.style.marginRight = "2em"; 
//     } else if (windowWidth >= 720 && windowWidth < 820) {
//         skillsList.style.marginLeft = "3em";
//         skillsList.style.marginRight = "3em";
//     } else if(windowWidth >= 820 && windowWidth < 900) {
//         skillsList.style.marginLeft = "4em"; 
//         skillsList.style.marginRight = "4em"; 
//     } else {
//         skillsList.style.marginLeft = "inherit"; 
//         skillsList.style.marginRight = "inherit";
//         skillsList.style.maxWidth = "720px";
//     }
// });


if (skillsSection !== null) {
    let iconSourceP = document.createElement('p');
    iconSourceP.innerText = "Icons made by iconscout.com";
    iconSourceP.className = "skills-p";
    
    skillsSection.appendChild(iconSourceP);
}

