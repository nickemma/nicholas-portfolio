import React from 'react';
import classes from '../../styles/form.module.css';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, submitHandler] = useForm('moqbezka');
  if (state.succeeded) {
    return <p>Thanks for reaching out</p>;
  }

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form_group}`}>
        <input type="text" name="name" placeholder="Your Name" required />
        <ValidationError prefix="TEXT" field="name" errors={state.errors} />
      </div>
      <div className={`${classes.form_group}`}>
        <input type="email" name="email" placeholder="Email Address" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={`${classes.form_group}`}>
        <input type="text" name="name" placeholder="subject" required />
        <ValidationError prefix="TEXT" field="name" errors={state.errors} />
      </div>
      <div className={`${classes.form_group}`}>
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
      >
        Send
      </button>
    </form>
  );
};

export default Form;
