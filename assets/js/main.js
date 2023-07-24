const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const message = document.getElementById('message');
const contactMessage = document.getElementById('contact-message');

const sendEmail = function (e) {
    e.preventDefault();

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        message.value === ''
    ) {
        contactMessage.innerHTML = `<i class="ri-error-warning-line"></i>&nbsp; &nbsp; <span>Empty Input fields !</span>`;
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        setTimeout(function () {
            contactMessage.classList.add('color-light');
            contactMessage.classList.remove('color-dark');
        }, 5000);

        // Show Message
    } else {
        contactMessage.innerHTML = `<i class="ri-loader-line"></i></i>&nbsp;<span>Sending the Message...</span>`;
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
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
            });
    }
};

contactForm.addEventListener('submit', sendEmail);
