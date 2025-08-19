import React from "react";

const ContactForm = () => {
  return (
    <section id="form-details">
      <form>
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name"></input>
        <input type="text" placeholder="E-mail"></input>
        <input type="text" placeholder="Subject"></input>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button>Submit</button>
      </form>
      <div className="people">
        <div>
          <img src="img/people/1.png" alt="" />
          <p>
            <span>John Doe</span>Senior Marketing Manager <br /> Phone: + 000
            123 000 77 88 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="img/people/2.png" alt="" />
          <p>
            <span>Willian Smith</span>Senior Marketing Manager <br /> Phone: + 000
            123 000 77 88 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src="img/people/3.png" alt="" />
          <p>
            <span>Emma Stone</span>Senior Marketing Manager <br /> Phone: + 000
            123 000 77 88 <br />
            Email: contact@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
