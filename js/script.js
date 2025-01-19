'use strict';

//=========== FOOTER =============== //
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

// multiple format doesn't work?
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
    skillsItem.classList.toggle('skills-item'); 
    
    skillsItem.append(skillImage);
    skillsList.append(skillsItem);
});

if (skillsSection !== null) {
    const iconSourceP = document.createElement('p');
    iconSourceP.innerText = "Icons made by iconscout.com";
    iconSourceP.classList.toggle('skills-p');
    
    skillsSection.appendChild(iconSourceP);
}

// ========== LEAVE MESSAGE =================== //
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', (returnedBrowserEventObject) => {
    //returnedBrowserEventObject, usually === "event" / "e" //
    returnedBrowserEventObject.preventDefault();

    const name = returnedBrowserEventObject.target.userName.value;
    const email = returnedBrowserEventObject.target.userEmail.value;
    const message = returnedBrowserEventObject.target.userMessage.value;   
    
    
    
    
    
    messageForm.reset();

    console.log(name, email, message);

});