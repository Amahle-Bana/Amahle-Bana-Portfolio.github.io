/* EmailJS SENDER FUNCTION */

const alertSection = document.querySelector('.section7_alert');
const alertMessage = document.querySelector('.section7_alertnote')

const emailInput = document.querySelector('.section7_email');
const topicInput = document.querySelector('.section7_topic');
const messageInput = document.querySelector('.section7_message');


window.onload = function() {
    document.getElementById('section7_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_dk2dt1m', 'template_wzu964g', this)
            .then(() => {
                alertSection.style.opacity = 1;
                emailInput.value = '';
                topicInput.value = '';
                messageInput.value = '';
                
            }, (error) => {
                alertMessage.innerHTML = 'Error Sending Email';
                alertSection.style.border = '1px solid red';
                alertSection.style.background = 'red'; 
                alertSection.style.opacity = 1;
                console.log('FAILED...', error);
            });
    });
}