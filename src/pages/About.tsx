import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import TimeLine from "../components/TimeLine/TimeLine.tsx";
import Separator from "../components/Separator/Separator.tsx";
import WorkInProgress from "../components/WorkInProgress/WorkInProgress.tsx";

const historyDev = [
  {
    date: moment(),
    title: "Now",
    body: "Progress on my Dev Skills by Learning and participate on Open Source Projects."
  },
  {
    date: moment("2023-08-01"),
    title: "RNCP DWWM Bac+2",
    body: "I created an application for my RNCP DWWM Title passage in Bordeaux. I made an application using a JS library using eye tracking to make it a game, a database manages the players' accounts and scores."
  },
  {
    date: moment("2023-02-01"),
    title: "Strateg In | Fullstack Developer",
    body: "Working on ERP applications that use MERN Stack. On Development phase or Maintenance, I work on different apesct of the job. I discover a lot of process like unit test and errors management, working with the clients and learning with the lead devs."
  },
  {
    date: moment("2023-12-01"),
    title: "Collaboration work with Saleforces",
    body: "When I was studying at Wild Code School, one of the projects to be submitted was a subject with customer needs from various companies including Salesforce who were specifying requests for an ideation platform. With the help of two other developers we created CellForce."
  }
];

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="timeline"
        className="w-1/2 flex-col gap-10 justify-center mx-auto"
      >
        <div className="mb-5 mt-10">
          <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
            {t("pages.about.section-1.title")}
          </h1>
          <p className="mb-6 text-medium font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            {t("pages.about.section-1.content")}
          </p>
        </div>
        <Separator content="Developer" />
        <TimeLine datas={historyDev} />
        <Separator content="Before Become Developer" />
      </section>
      <WorkInProgress />
    </>
  );
};

export default About;
