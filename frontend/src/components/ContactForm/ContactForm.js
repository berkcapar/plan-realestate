const ContactForm = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const about = event.target.about.value;
  };

  return (
    <div className="contact-form-area">
      <h1 className="contact-head">Let's Talk!</h1>
      <p className="contact-text">
        Have any questions? Let’s make a video call to get answers from
        real-estate experts.
      </p>
      <form onSubmit={handleContact}>
        <div>
          <input placeholder="Your Name" name="name" className="name-input" />
        </div>
        <div>
          <input
            placeholder="Your Email"
            name="email"
            className="email-input"
          />
        </div>
        <div>
          <input
            placeholder="Your Message Here"
            name="about"
            className="about-input"
          />
        </div>
        <button className="contact-button" type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
