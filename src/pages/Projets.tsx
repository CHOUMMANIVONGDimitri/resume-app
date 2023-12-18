import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "flowbite-react";
import Separator from "../components/Separator/Separator.tsx";
import WorkInProgress from "../components/WorkInProgress/WorkInProgress.tsx";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="header-projects"
        className="w-1/2 flex-col gap-10 justify-center mx-auto"
      >
        <div className="mb-5 mt-10">
          <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
            {t("pages.projects.section-1.title")}
          </h1>
          <p className="mb-6 text-medium font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            {t("pages.projects.section-1.content")}
          </p>
        </div>
      </section>
      <Separator content={t("pages.projects.separator.project-1")} />
      <section id="projects" className="w-full px-5">
        <article className="my-20 w-full flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-10">
          <Card
            className="max-w-lg md:max-w-xl"
            imgSrc="./images/eye-4-tap-example.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t("pages.projects.section-2.project-1.card.title")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {t("pages.projects.section-2.project-1.card.content")}
            </p>
          </Card>
          <Accordion collapseAll className="w-5/6 md:w-2/3">
            <Accordion.Panel>
              <Accordion.Title>Description</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  This is the first React project that I did alone, it includes
                  both a frontend and backend part. The application is a mini
                  game using eye tracking technology that I designed using a
                  library (Webgazer JS). This project was presented during my
                  passage of the RNCP DWWM Title in Bordeaux.
                </p>
                <a
                  className="hover:underline"
                  href="https://webgazer.cs.brown.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  check the Webgazer JS website
                </a>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Figma model</Accordion.Title>
              <Accordion.Content>
                <div className="flex flex-col gap-5">
                  <Link
                    to="https://www.figma.com/file/jYmmSaHYxEUlsaakXWcTYJ/Eye-TAP-Game?type=design&mode=design&t=dSFq4jRbtSrkw2r0-1"
                    target="_blank"
                  >
                    <Button size="sm">Eye 4 tap Project</Button>
                  </Link>
                  <Link
                    to="https://www.figma.com/proto/jYmmSaHYxEUlsaakXWcTYJ/Eye-TAP-Game?type=design&node-id=276-3049&t=bIOwrru9V8GdbcJN-1&scaling=scale-down&page-id=268%3A2037&starting-point-node-id=276%3A3049&mode=design"
                    target="_blank"
                  >
                    <Button size="sm">Mobile model</Button>
                  </Link>
                  <Link
                    to="https://www.figma.com/proto/jYmmSaHYxEUlsaakXWcTYJ/Eye-TAP-Game?type=design&node-id=201-2&t=9xAbcdRKkRK4d18d-1&scaling=contain&page-id=0%3A1&starting-point-node-id=201%3A2&mode=design"
                    target="_blank"
                  >
                    <Button size="sm">Desktop model</Button>
                  </Link>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>More Information</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  If you want to see the source code visit my repository on
                  github.
                </p>
                <a
                  className="hover:underline"
                  href="https://github.com/DIMITRI-PRO/Eye4Tap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check repo here
                </a>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </article>
      </section>
      <Separator content={t("pages.projects.separator.project-2")} />
      <WorkInProgress />
    </>
  );
};
export default Projects;
