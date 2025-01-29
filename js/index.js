'use strict';
// =========== MENU ================ //
const menuButton = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    navbar.style.display = '';
    navbar.classList.toggle('hidden');
    navbar.setAttribute('tabindex', '0');
});


if(window.getComputedStyle(navbar).display !== 'none') {
    menuButton.style.zIndex = "1000";     
}


// =========== FOOTER =============== //
const body = document.querySelector('body');
const footer = document.createElement('footer');
const year = new Date().getFullYear();

footer.innerText = `O. Gladenko \u00A9 ${year}`;
footer.classList.toggle('footer');


// SETTING FOOTER HEIGHT SAME AS HEADER: //
// const header = document.querySelector('header');
// const headerHeight = header.offsetHeight;

// footer.style.height = `${headerHeight}px`;
// footer.style.padding = `${headerHeight / 3}px`; 

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

// if (skillsSection !== null) if array comes from another sourse //
    const iconSourceP = document.createElement('p');
    iconSourceP.innerText = "Icons made by iconscout.com";
    iconSourceP.classList.toggle('skills-p');
    
    skillsSection.appendChild(iconSourceP);


// ========== LEAVE MESSAGE =================== //
const messageForm = document.forms['leave_message'];
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const messagesHeader = messageSection.querySelector('h2');

messageForm.addEventListener('submit', (event) => {
    //event, e -returned object by browser
    event.preventDefault();

    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const message = event.target.userMessage.value; 
        
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto:${email}">${name}: </a>
    <span>${message}</span>`;

// ========= REMOVE BUTTON ========= //   
    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = 'button';
    removeButton.classList.toggle('remove-btn');
    removeButton.classList.toggle('ylw-btn');

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        console.log(entry);
        entry.remove();

        if (messageList.childElementCount === 0) {
            messageSection.classList.toggle('hidden');            
        };
    });
    
    // ============ EDIT BUTTON ========== //
    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.type = 'button';
    editButton.classList.toggle('edit-btn');
    editButton.classList.toggle('ylw-btn');

    editButton.addEventListener('click', (e) => {
        const updatedMessage = prompt('New message');
        let editedMessage = newMessage.querySelector ('span');
        editedMessage.textContent = `${updatedMessage}`;
    });

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    
    messageSection.classList.toggle('hidden');
    messagesHeader.setAttribute('tabindex', '0');

    messageForm.reset();
})

// ======== PROJECTS API =========== //
const projectsSection = document.getElementById('projects');
const projectList = projectsSection.querySelector('ul');
projectList.classList.toggle('proj-list');
const projectsLink = document.querySelector('.navbar li.hidden');
const projectsHeader = projectsSection.querySelector('h2');

fetch("https://api.github.com/users/olgla/repos")
.then(response => response.json())   
.then(repos => {  
    repos.forEach(repo => {        
        const projItem = `<li class="proj-item"><a href = "${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></li>`;        
        projectList.insertAdjacentHTML("beforeend", projItem);                      
    });

    projectsLink.classList.toggle('hidden');
    projectsSection.classList.toggle('hidden');
    projectsHeader.setAttribute('tabindex', '0');
})
.catch(error => {    
    console.log(error);
});

// ============ THEME ============== //
const themeButton = document.querySelector('.theme');
const themeImg = themeButton.querySelector('img');
const githubImg = document.querySelector('#connect img[alt="github icon"]');

themeButton.addEventListener('click', () => {    
    body.classList.toggle('light-mode');
    footer.style.color = '#ffffff';
    menuButton.classList.toggle('fill')

    menuButton.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            menuButton.classList.toggle('fill');  
        };
    });
    

    const navbarLinks = document.querySelectorAll('header .navbar > li > a');
    navbarLinks.forEach(link => {
        link.classList.toggle('light-li');        
});

    if (document.body.classList.contains('light-mode')) {
        themeImg.setAttribute('src', "./images/Moon.svg");
        themeImg.setAttribute('aria-label', "dark-theme-toggle");
        githubImg.setAttribute('src', "./images/github-mark.svg");
        document.documentElement.style.setProperty("--color-link", "#000000");  
      } else {
        themeImg.setAttribute('src', "./images/Sun.svg");
        themeImg.setAttribute('aria-label', "light-theme-toggle");
        githubImg.setAttribute('src', "./images/github-mark-white.svg");
        document.documentElement.style.setProperty("--color-link", "#ffffff");        
    };

    const inputs = document.getElementsByClassName('form-input');
    (Array.from(inputs)).forEach(input => input.classList.toggle('light-input'));

    const projectItemsCollection = document.querySelectorAll('.proj-item a');
    const projectItems = Array.from(projectItemsCollection);
    
    projectItems.forEach(projItem => projItem.classList.toggle('light-mode-proj'));
});