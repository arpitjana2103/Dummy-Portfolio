// Send Email <=================================================================>
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = async function (e) {
    e.preventDefault();

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        message.value === ''
    ) {
        contactMessage.innerHTML = `<i class="ri-error-warning-line"></i>&nbsp;<span>Empty Input fields !</span>`;
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        setTimeout(function () {
            contactMessage.classList.add('color-light');
            contactMessage.classList.remove('color-dark');
        }, 5000);
    } else {
        contactMessage.innerHTML = `<i class="ri-loader-line"></i></i>&nbsp;<span>Sending the Message...</span>`;
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        try {
            emailjs
                .sendForm(
                    'service_kxahvti',
                    'template_pz339gj',
                    contactForm,
                    'vY5bFQCDQ6dZInw98'
                )
                .then(function () {
                    contactMessage.innerHTML = `<i class="ri-check-double-line"></i>&nbsp;<span>Message Sent Successfully !</span>`;

                    setTimeout(function () {
                        contactMessage.classList.add('color-light');
                        contactMessage.classList.remove('color-dark');
                    }, 5000);
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        } catch (error) {
            contactMessage.innerHTML = `<i class="ri-error-warning-line"></i>&nbsp;<span>Unstable Internet Connection !</span>`;

            setTimeout(function () {
                contactMessage.classList.add('color-light');
                contactMessage.classList.remove('color-dark');
            }, 5000);
        }
    }
};

contactForm.addEventListener('submit', sendEmail);

// Header Scroll <=================================================================>
const header = document.querySelector('#header');

const scrollHeader = function () {
    if (this.scrollY >= 500) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

// Show-Hide Menu in Mobile Screen
const navMenue = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenue.classList.add('show-menu');
        this.style.opacity = 0;
    });
}

if (navClose) {
    navClose.addEventListener('click', function () {
        navMenue.classList.remove('show-menu');
        navToggle.style.opacity = 1;
    });
}

// Hide Menu after clicking
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = function () {
    navMenue.classList.remove('show-menu');
    navToggle.style.opacity = 1;
};

navLinks.forEach(function (n) {
    n.addEventListener('click', linkAction);
});

// Style Below 500px <=================================================================>
// Function to update display width and change background color if needed
function updateProfilePic() {
    const displayWidth = window.innerWidth;

    // alert(displayWidth);

    // Check if the display width is below 500px
    if (displayWidth <= 500) {
        document.querySelector('#home__img').src = 'assets/img/profile2.jpeg';
        document.querySelector('#address').innerText = 'West Bengal, India';
        document.querySelector(
            '#bca'
        ).innerText = `Bachelor's in Computer Application`;
        document.querySelector('#civil').innerText =
            'Diploma in Civil Engineering';
        document.querySelector('#node').innerText =
            'NodeJS Backend Web Development';
        document.querySelector('#cad').innerText = 'Jewellery 3D-CAD Modeling';
    } else {
        document.querySelector('#home__img').src = 'assets/img/profile.png';
        document.querySelector('#address').innerText =
            'Ghatal, West Bengal, India';

        document.querySelector(
            '#bca'
        ).innerText = `Bachelor's in Computer Application - BCA`;
        document.querySelector('#civil').innerText =
            'Diploma in Civil Engineering - Polytechnic';
        document.querySelector('#node').innerText =
            'NodeJS Backend Web Development - Full Time';
        document.querySelector('#cad').innerText =
            'Jewellery 3D-CAD Modeling - Full Time';
    }
}

// Initial call to set the display width and background color when the page loads
updateProfilePic();

// Listen for window resize events and update the display width and background color accordingly
window.addEventListener('resize', updateProfilePic);
