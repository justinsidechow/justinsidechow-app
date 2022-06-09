import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_gV0nrWNtqF1MApJds7mzr");

const ContactPage = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const message = watch("message") || "";
  const messageCharsLeft = 1500 - message.length;
  const [statusMessage, setStatusMessage] = useState("Message");
  const [statusMessageClass, setStatusMessageClass] =
    useState("statusMessageClass");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data: any) => {
    // console.log(data);

    generateContactNumber();

    sendForm("default_service", "template_qnrvlgi", "#contact-form").then(
      function (response) {
        // ...
        setStatusMessage("Message sent!");
        setStatusMessageClass("statusMessageClass success");
        setTimeout(() => {
          setStatusMessageClass("statusMessageClass");
        }, 5000);
      },
      function (error) {
        // ...
        setStatusMessage("Failed to send message! Please try again later.");
        setStatusMessageClass("statusMessageClass failure");
        setTimeout(() => {
          setStatusMessageClass("statusMessageClass");
        }, 5000);
      }
    );
  };

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
          <form
            className="column-contact"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errors.user_name && errors.user_name.type === "required" && (
              <div role="alert">
                Name is required
                <br />
              </div>
            )}
            <input
              type="text"
              placeholder="Name"
              maxLength={Number("40")}
              aria-invalid={errors.user_name ? "true" : "false"}
              {...register("user_name", { required: true })}
            />
            {errors.user_email && errors.user_email.type === "required" && (
              <div role="alert">
                Email is required
                <br />
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              maxLength={Number("40")}
              {...register("user_email", { required: true })}
            />
            {errors.subject && errors.subject.type === "required" && (
              <div role="alert">
                Subject is required
                <br />
              </div>
            )}
            <input
              type="text"
              placeholder="Subject"
              maxLength={Number("100")}
              aria-invalid={errors.user_name ? "true" : "false"}
              {...register("subject", { required: true })}
            />
            {errors.message && errors.message.type === "required" && (
              <div role="alert">
                Message is required
                <br />
              </div>
            )}
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <p className="message-chars-left">{messageCharsLeft}</p>
            <input type="hidden" name="contact_number" value={contactNumber} />
            <p className={statusMessageClass}>{statusMessage}</p>
            <input className="input-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <img
        className="main-image"
        alt="contact-background"
        src={process.env.PUBLIC_URL + "/Photo/contact-background.jpg"}
      ></img>
    </div>
  );
};

export default ContactPage;
