const { default: ContactForm } = require("../ContactForm")

const ContactArea = () => {
    return(
        <div id="contact" className="contact-area">
            <div className="contact-container">
            <p className="contact-text">Have any questions? Let’s make a video call to get answers from real-estate experts.</p>
            <ContactForm/>
            </div>
        </div>

    )
}

export default ContactArea