/* EmailJS SENDER FUNCTION */

window.onload = function() {
    document.getElementById('section7_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_dk2dt1m', 'template_wzu964g', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}