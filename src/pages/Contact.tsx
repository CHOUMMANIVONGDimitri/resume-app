import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button, TextInput, Textarea, Card } from "flowbite-react";
import FormItem from "../components/FormItem/FormItem.tsx";

import Email from "../services/emailJs.ts";

const { sendEmail } = Email;

const About: React.FC = () => {
  const { t } = useTranslation();
  const forms = useRef<HTMLFormElement>(null);

  return (
    <section className="my-24 flex justify-center">
      <Card className="max-w-lg w-full md:w-2/3 lg:w-1/2">
        <form
          ref={forms}
          onSubmit={(e) => sendEmail(e, forms)}
          className="flex max-w-md flex-col gap-4"
        >
          <FormItem
            name="subject"
            label={t("pages.contact.form.subject.label")}
            defaultValue={t("pages.contact.form.subject.default-value")}
          />
          <FormItem
            name="fullName"
            label={t("pages.contact.form.fullName.label")}
            required
          />
          <FormItem
            name="company"
            label={t("pages.contact.form.company.label")}
            required
          />
          <FormItem name="email" label={t("pages.contact.form.email.label")}>
            <TextInput
              id="email"
              type="email"
              placeholder={t("pages.contact.form.email.placeholder")}
              required
            />
          </FormItem>
          <FormItem
            name="message"
            label={t("pages.contact.form.message.label")}
          >
            <Textarea
              id="message"
              placeholder={t("pages.contact.form.message.placeholfer")}
              rows={15}
              required
            />
          </FormItem>
          <Button type="submit">{t("buttons.submit")}</Button>
        </form>
      </Card>
    </section>
  );
};

export default About;
