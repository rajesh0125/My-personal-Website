document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    setupSectionFadeIn();
    setupCustomCursor();
});

// Function to set up the contact form
function setupContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const responseMessage = document.getElementById('responseMessage');

        // Display thank-you message
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        responseMessage.classList.remove('hidden');

        // Reset the form
        this.reset();

        // Hide the message after a few seconds
        setTimeout(() => {
            responseMessage.classList.add('hidden');
        }, 5000);
    });
}

// Function to set up fade-in effect for sections
function setupSectionFadeIn() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in'); // Add fade-in class
    });
}

// Function to set up the custom cursor
function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Update cursor position based on mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Change cursor style on hover for specific elements
    const projectItems = document.querySelectorAll('.project');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('lightning-cursor'); // Add lightning effect
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('lightning-cursor'); // Remove lightning effect
        });
    });

    // Additional hover effect for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-button'); // Change cursor style for buttons
        });
        button.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-button'); // Reset cursor style
        });
    });

    // Change cursor style on hover for text elements
    const textElements = document.querySelectorAll('h2, p');
    textElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('text-hover'); // Change cursor style for text
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-hover'); // Reset cursor style
        });
    });
}
