const ContactForm = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const about = event.target.about.value;
  };

  return (
    <div className="contact-form-area">
      <form onSubmit={handleContact}>
        <div>
          Your Name: <input name="name" className="nameinput" />
        </div>
        <div>
          Your Email: <input name="email" className="emailinput" />
        </div>
        <div>
          About: <input name="about" className="aboutinput" />
        </div>
        <button className="contact-button" type="submit">
          Send!
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
