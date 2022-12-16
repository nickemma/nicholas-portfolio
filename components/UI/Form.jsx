import React, { useEffect } from 'react';
import AOS from 'aos';
import classes from '../../styles/form.module.css';
import { useForm, ValidationError } from '@formspree/react';
import 'aos/dist/aos.css';

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);

  const [state, submitHandler] = useForm('moqbezka');
  if (state.succeeded) {
    return <p>Thanks for reaching out</p>;
  }

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div
        className={`${classes.form_group}`}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <ValidationError prefix="TEXT" field="name" errors={state.errors} />
      </div>
      <div
        className={`${classes.form_group}`}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <input type="email" name="email" placeholder="Email Address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div
        className={`${classes.form_group}`}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <input type="text" name="name" placeholder="subject" required />
        <ValidationError prefix="TEXT" field="name" errors={state.errors} />
      </div>
      <div
        className={`${classes.form_group}`}
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <textarea
          type="text"
          name="message"
          rows={5}
          placeholder="Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className={`${classes.btn_primary}`}
        type="submit"
        disabled={state.submitting}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
