// main.js

// 1. Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')){
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
    });
});

// 2. Sticky Navbar & Scroll Styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// 3. Form submission logic - Redirect to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const flatType = document.getElementById('flatType').value;
        
        // Prepare WhatsApp message
        const message = `Hello, I want to enquire about Vaishali Vatika Flats.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interested In:* ${flatType}`;
        
        // Target WhatsApp Number
        const whatsappNumber = "917375975151";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Show success and reset
        const formStatus = document.getElementById('formStatus');
        formStatus.textContent = "Your request has been submitted successfully!";
        formStatus.className = "form-status status-success";
        
        setTimeout(() => {
            formStatus.textContent = "";
            formStatus.className = "form-status";
        }, 5000);

        contactForm.reset();
    });
}