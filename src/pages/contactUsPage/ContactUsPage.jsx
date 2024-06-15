import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";
import "./ContactUsPage.css"

const ContactUsPage = () => {
  return (
    <>
      <AppHeader />
      <div className="bannar">
        <h1 className="page-heading">Contact with Us</h1>
        <div className="contact-info-container">
        <div className="contact-information">
          <h4>Address</h4>
          <p>Hafeez Uddin Tizarah and Tade Company </p>
          <p>Dhaka GPO: 1000, Motijheel</p>
          <b>Dhaka, Bangladesh </b>
        </div>
        <div className="contact-information">
          <h4>Opening Hours</h4>
          <p>Saturday to Thursday : 10am – 6pm</p>
          <b className="alarm">Friday: Closed</b>
        </div>
        <div className="contact-information">
          <h4>E-mail </h4>
          <a className="contanct-link"  href="mailto:omarkhaled1529@gmail.com">info@hafeezgroup.net</a>
        </div>
        <div className="contact-information">
          <h4>Phone</h4>
          <a className="contanct-link" href="tel:+8801307841529"><strong>Call: </strong> +8801307841529</a>
        </div>
      </div>
      </div>
      <AppFooter/>
      </>
  );
};

export default ContactUsPage;
