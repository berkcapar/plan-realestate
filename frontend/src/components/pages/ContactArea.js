const { default: ContactForm } = require("../ContactForm/ContactForm");

const ContactArea = () => {
  return (
    <div id="contact" className="contact-area">
      <img
        className="contact-image"
        alt="kusadasi"
        src="/images/kusadasi-contact.jpg"
      />
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactArea;
