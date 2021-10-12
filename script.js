function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.contact__overlay--loading')
    const success = document.querySelector('.contact__overlay--success')
    loading.classList += " contact__overlay--visible"
    emailjs
        .sendForm(
            'service_zpb2wdh',
            'template_i0o7pe5',
            event.target,
            'user_aTd4q2VCQRGa0eaJo0m5s'
        ).then(() => {
            loading.classList.remove("contact__overlay--visible")
            success.classList += " contact__overlay--visible"
        }).catch(() => {
            loading.classList.remove("contact__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on: manishmanwani73@gmail.com"
            )
        })
}