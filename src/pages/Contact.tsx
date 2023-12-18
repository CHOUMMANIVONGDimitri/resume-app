import React, { useRef, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, TextInput, Textarea, Card, Alert } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import FormItem from "../components/FormItem/FormItem.tsx";

import Email from "../services/emailJs.ts";

const { sendEmail } = Email;

const About: React.FC = () => {
  const { t } = useTranslation();
  const forms = useRef<HTMLFormElement>(null);

  const [displayReponse, setDisplayResponse] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    try {
      const response = await sendEmail(e, forms);
      setDisplayResponse(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("something wrong with the server...");
    }
    setIsLoading(false);
  };

  return (
    <>
      <section className="w-1/2 flex-col gap-10 justify-center mx-auto">
        <div className="mb-5 mt-10">
          <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
            {t("pages.contact.section-1.title")}
          </h1>
          <p className="mb-6 text-medium font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            {t("pages.contact.section-1.content", {
              email: "dimitrichoummanivong@gmail.com"
            })}
          </p>
        </div>
      </section>
      <section className="my-24 flex justify-center">
        <Card className="max-w-lg w-full md:w-2/3 lg:w-1/2">
          <form
            ref={forms}
            onSubmit={handleForm}
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
              placeholder={t("pages.contact.form.fullName.placeholder")}
              required
            />
            <FormItem
              name="company"
              label={t("pages.contact.form.company.label")}
              placeholder={t("pages.contact.form.company.placeholder")}
              required
            />
            <FormItem
              name="job"
              label={t("pages.contact.form.job.label")}
              defaultValue={t("pages.contact.form.job.default")}
              placeholder={t("pages.contact.form.job.placeholder")}
              required
            />
            <FormItem name="email" label={t("pages.contact.form.email.label")}>
              <TextInput
                id="email"
                type="email"
                name="email"
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
                name="message"
                placeholder={t("pages.contact.form.message.placeholder")}
                rows={15}
                required
              />
            </FormItem>
            <Button type="submit" isProcessing={isLoading}>
              {t("buttons.submit")}
            </Button>
            {displayReponse && (
              <Alert
                icon={HiCheckCircle}
                color="success"
                onDismiss={() => setDisplayResponse(false)}
                additionalContent={
                  <Link className="underline" to="/resume-app/">
                    {t("pages.contact.alert.success.go-back")}
                  </Link>
                }
              >
                <span className="font-medium">
                  {`${t("pages.contact.alert.success.title")}! `}
                </span>
                {t("pages.contact.alert.success.content")}
              </Alert>
            )}
          </form>
        </Card>
      </section>
    </>
  );
};

export default About;
