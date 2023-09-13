// Function to show a message
function showMessage(message, iClass) {
    const contactMessage = document.getElementById('contact-message');
    contactMessage.innerHTML = `<i class="${iClass}"></i>&nbsp;<span>${message}</span>`;
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    setTimeout(function () {
        contactMessage.classList.add('color-light');
        contactMessage.classList.remove('color-dark');
    }, 6000);
}

// Function to send email
async function sendEmail(e) {
    e.preventDefault();

    const contactForm = document.getElementById('contact-form');
    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const message = document.getElementById('message');

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        message.value === ''
    ) {
        showMessage('Empty Input fields !', 'ri-error-warning-line');
    } else {
        showMessage('Sending the Message...', 'ri-loader-line');

        try {
            await emailjs.sendForm(
                'service_kxahvti',
                'template_pz339gj',
                contactForm,
                'vY5bFQCDQ6dZInw98'
            );
            showMessage('Message Sent Successfully !', 'ri-check-double-line');
        } catch (error) {
            showMessage(
                'Unstable Internet Connection !',
                'ri-error-warning-line'
            );
        }
    }
}

// Event listener for sending email
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', sendEmail);

// Function to update header scroll class
const header = document.querySelector('#header');
function updateHeaderScroll() {
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;

    if (
        (innerWidth <= 540 && scrollY >= 600) ||
        (innerWidth <= 750 && innerWidth > 540 && scrollY >= 650) ||
        (innerWidth > 750 && scrollY >= 500)
    ) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

// Event listener for header scroll
window.addEventListener('scroll', updateHeaderScroll);

// Function to toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('#nav-menu');
    const navToggle = document.querySelector('#nav-toggle');

    navMenu.classList.toggle('show-menu');
    navToggle.style.opacity = navMenu.classList.contains('show-menu') ? 0 : 1;
}

// Event listeners for mobile menu toggle
const navToggle = document.querySelector('#nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

const navClose = document.querySelector('#nav-close');
if (navClose) {
    navClose.addEventListener('click', toggleMobileMenu);
}

// Function to hide mobile menu after clicking a link
function hideMobileMenu() {
    const navMenu = document.querySelector('#nav-menu');
    const navToggle = document.querySelector('#nav-toggle');

    navMenu.classList.remove('show-menu');
    navToggle.style.opacity = 1;
}

// Event listeners for hiding mobile menu
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(function (link) {
    link.addEventListener('click', hideMobileMenu);
});

// Function to update profile pic and content
function updateProfileContent() {
    const displayWidth = window.innerWidth;
    const homeImg = document.querySelector('#home__img');
    const address = document.querySelector('#address');
    const bca = document.querySelector('#bca');
    const civil = document.querySelector('#civil');
    const node = document.querySelector('#node');
    const cad = document.querySelector('#cad');

    if (displayWidth <= 540) {
        homeImg.src = 'assets/img/profile2.jpeg';
        address.innerText = 'West Bengal, India';
        bca.innerText = `Bachelor's in Computer Application`;
        civil.innerText = 'Diploma in Civil Engineering';
        node.innerText = 'NodeJS Backend Web Development';
        cad.innerText = 'Jewellery 3D-CAD Modeling';
    } else if (displayWidth > 540 && displayWidth <= 750) {
        homeImg.src = 'assets/img/profile2.jpeg';
    } else {
        homeImg.src = 'assets/img/profile.png';
        address.innerText = 'Ghatal, West Bengal, India';
        bca.innerText = `Bachelor's in Computer Application - BCA`;
        civil.innerText = 'Diploma in Civil Engineering - Polytechnic';
        node.innerText = 'NodeJS Backend Web Development - Full Time';
        cad.innerText = 'Jewellery 3D-CAD Modeling - Full Time';
    }
}

// Add EventListener to Resize
updateProfileContent();
window.addEventListener('resize', updateProfileContent);
