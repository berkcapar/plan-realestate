import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/reducers/notificationReducer";
import emailService from "../../services/email";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const about = event.target.about.value;

    try {
      emailService.sendMail(name, email, about);
      dispatch(showNotification(`Mesajınız Gönderildi!`));
    } catch (error) {
      dispatch(showNotification(`Ekleme Başarısız Oldu`));
    }
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
