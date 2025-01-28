'use strict';
// =========== MENU ================ //
const menuButton = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    navbar.style.display = '';
    navbar.classList.toggle('hidden');
});

console.log(window.getComputedStyle(navbar).display);

if(window.getComputedStyle(navbar).display !== 'none') {
    menuButton.style.zIndex = "1000"; 
}




// =========== FOOTER =============== //
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

// if (skillsSection !== null) if array comes from another sourse //
    const iconSourceP = document.createElement('p');
    iconSourceP.innerText = "Icons made by iconscout.com";
    iconSourceP.classList.toggle('skills-p');
    
    skillsSection.appendChild(iconSourceP);

// ======= and add to eventListener: =============== //

// if (!validateMessage(name.value, "name")) {
//     alert('Name can only contain letters and spaces');
//     e.preventDefault();
// } else if (!validateMessage(email.value, "email")) {
//     alert('Please enter a valid email address');
//     e.preventDefault();
// } else if (!validateMessage(message.value, "message")) {
//     alert('Message contains invalid characters');
//     e.preventDefault();
// }


// ========== LEAVE MESSAGE =================== //
const messageForm = document.forms['leave_message'];
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const messagesHeader = messageSection.querySelector('h2');

messageForm.addEventListener('submit', (returnedBrowserEventObject) => {
    //returnedBrowserEventObject, usually === "event" / "e" //
    returnedBrowserEventObject.preventDefault();

    const name = returnedBrowserEventObject.target.userName.value;
    const email = returnedBrowserEventObject.target.userEmail.value;
    const message = returnedBrowserEventObject.target.userMessage.value; 
        
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
        const projItem = `<li><a href = "${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></li>`;        
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
const toggleTheme = () => body.classList.toggle('light-mode');

themeButton.addEventListener('click', toggleTheme());

// Edit message inside the form
// const messageForm = document.forms['leave_message'];
// const messageSection = document.getElementById('messages');
// const messageList = messageSection.querySelector('ul');
// const messagesHeader = messageSection.querySelector('h2');

// let editingMessage = null; 

// messageForm.addEventListener('submit', (returnedBrowserEventObject) => {
//     returnedBrowserEventObject.preventDefault();

//     const name = returnedBrowserEventObject.target.userName.value;
//     const email = returnedBrowserEventObject.target.userEmail.value;
//     const message = returnedBrowserEventObject.target.userMessage.value;

//     if (editingMessage) {
//         // Update the existing message
//         const nameLink = editingMessage.querySelector('a');
//         const messageSpan = editingMessage.querySelector('span');
//         nameLink.href = `mailto:${email}`;
//         nameLink.textContent = `${name}: `;
//         messageSpan.textContent = message;

//         editingMessage = null; 
//     } else {
        
//         const newMessage = document.createElement('li');
//         newMessage.innerHTML = `<a href="mailto:${email}">${name}: </a>
//         <span>${message}</span>`;

//         // Remove button
//         const removeButton = document.createElement('button');
//         removeButton.innerText = "Remove";
//         removeButton.type = 'button';
//         removeButton.classList.add('remove-btn', 'ylw-btn');

//         removeButton.addEventListener('click', () => {
//             const entry = removeButton.parentNode;
//             entry.remove();

//             if (messageList.childElementCount === 0) {
//                 messageSection.classList.toggle('hidden');
//             }
//         });

//         // Edit button
//         const editButton = document.createElement('button');
//         editButton.innerText = "Edit";
//         editButton.type = 'button';
//         editButton.classList.add('edit-btn', 'ylw-btn');

//         editButton.addEventListener('click', () => {
//             const nameLink = newMessage.querySelector('a');
//             const messageSpan = newMessage.querySelector('span');

            
//             messageForm.userName.value = nameLink.textContent.replace(': ', '');
//             messageForm.userEmail.value = nameLink.href.replace('mailto:', '');
//             messageForm.userMessage.value = messageSpan.textContent;

//             editingMessage = newMessage; 
//         });

//         newMessage.appendChild(removeButton);
//         newMessage.appendChild(editButton);
//         messageList.appendChild(newMessage);

//         messageSection.classList.toggle('hidden');
//         messagesHeader.setAttribute('tabindex', '0');
//     }

//     messageForm.reset(); 
// });