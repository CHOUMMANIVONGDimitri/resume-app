/* eslint-disable no-console */

/*
  TO DO: Find a way to log errors in the browser
  */

import { RefObject, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const sendEmail = async (
  e: FormEvent<HTMLFormElement>,
  form: RefObject<HTMLFormElement>
) => {
  e.preventDefault();
  if (form.current) {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_USER_ID
      );
      return true;
    } catch (error: unknown) {
      console.error(error);
    }
  } else {
    console.error("Form reference is not set.");
  }
  return false;
};

export default {
  sendEmail
};
