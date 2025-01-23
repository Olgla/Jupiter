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

// if (skillsSection !== null) if array comes from another sourse //
    const iconSourceP = document.createElement('p');
    iconSourceP.innerText = "Icons made by iconscout.com";
    iconSourceP.classList.toggle('skills-p');
    
    skillsSection.appendChild(iconSourceP);


// ====== will need to support innerHTML ========= //
// function validateMessage(inputValue, inputType) {
//     if (inputType === "name") {
//         const regex = /^[A-Za-z\s]+$/;
//         return regex.test(inputValue);
//     } else if (inputType === "email") {
//         const regex = /[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
//         return regex.test(inputValue);        
//     } else if (inputType === "message") {
//         const regex = /^[A-Za-z0-9\s.,!?'"-]+$/;
//         return regex.test(inputValue);
//     } else {
//         return false; 
//     }
// }
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
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();

        if (messageList.childElementCount === 0) {
            messageSection.style.display = "none";            
        };
    });
    
    // ============ EDIT BUTTON ========== //
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';

    editButton.addEventListener('click', (e) => {
        const updatedMessage = prompt('New message');
        let editedMessage = newMessage.querySelector ('span');
        editedMessage.textContent = `wrote: ${updatedMessage}`;
    });

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    messageSection.style.display = "block";

    messageForm.reset();
})