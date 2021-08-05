import { useForm } from "react-hook-form";

function ContactPage() {
  {
    /* 
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
  */
  }
  return (
    <div className="container">
      <div className="page-heading">
        <div className="page-title">Contact</div>
        <div className="page-mission">Connecting the Nodes</div>
      </div>
      <div className="column-section">
        <div className="column-center-contact">
          <div className="column-text">
            For any business inquires or questions, please use the form below.
            It will send an email to my{" "}
            <a
              className="contact-email-link"
              href="mailto:justinsidechow@gmail.com"
            >
              justinsidechow@gmail.com
            </a>{" "}
            and I will reply as soon as possible!
          </div>
          {/* 
          <form
            className="column-contact"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              {...register("user_nam", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("user_email", { required: true })}
            />
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <input className="input-button" type="submit" value="Send" />
          </form>
          */}
        </div>
      </div>
      <img
        className="main-image"
        src={process.env.PUBLIC_URL + "/Photo/contact-background.JPG"}
      ></img>
    </div>
  );
}

export default ContactPage;
