/* eslint-disable no-console */

/*
  TO DO: Find a way to log errors in the browser
  */

import { RefObject, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const emailEnv = import.meta.env;

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_USER_ID } =
  emailEnv;

const sendEmail = async (
  e: FormEvent<HTMLFormElement>,
  form: RefObject<HTMLFormElement>
) => {
  e.preventDefault();
  if (form.current) {
    try {
      await emailjs.sendForm(
        VITE_EMAIL_SERVICE_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        VITE_EMAIL_USER_ID
      );
    } catch (error: unknown) {
      console.error(error);
    }
  } else {
    console.error("Form reference is not set.");
  }
};

export default {
  sendEmail
};
