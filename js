const projects = [
            { title: 'Project 1', description: 'Description of project 1.' },
            { title: 'Project 2', description: 'Description of project 2.' },
            { title: 'Project 3', description: 'Description of project 3.' }
        ];

        const projectList = document.getElementById('project-list');

        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectList.appendChild(projectDiv);
        });

        // Handle form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(Thank you, ${name}! Your message has been received.);

            // Optionally, clear the form
            contactForm.reset();
        });
