const ContactPage = () => {
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Contact</div>
        <div className="page-mission">Connecting the Nodes</div>
      </div>
      <div className="column-section">
        <div className="column-center-contact">
          <form className="column-contact" id="contact-form">
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <img
        className="main-image"
        src={process.env.PUBLIC_URL + "/Photo/contact-background.JPG"}
      ></img>
    </div>
  );
};

export default ContactPage;
