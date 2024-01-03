import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge } from "flowbite-react";
import CarouselCustom from "../components/Carousel/Carousel.tsx";
import CardCustom from "../components/Card/Card.tsx";
import Separator from "../components/Separator/Separator.tsx";

import datas from "../constants/datas/index.ts";

interface GithubDatas {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: unknown;
  blog: string;
  location: unknown;
  email: unknown;
  hireable: unknown;
  bio: unknown;
  twitter_username: unknown;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

interface GitHubProfileProps {
  username: string;
}

const GitHubProfile: React.FC<GitHubProfileProps> = ({ username }) => {
  const [githubDatas, setGithubDatas] = useState<GithubDatas>();

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );

        setGithubDatas(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div>
      {githubDatas && (
        <CardCustom title={githubDatas.name} path={githubDatas.html_url}>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 rounded-full shadow-lg"
              src={githubDatas.avatar_url}
              height="96"
              width="96"
              alt="placeholder"
            />
            <div className="mt-4 flex items-center space-x-3 lg:mt-6">
              <a
                href={githubDatas.html_url}
                target="blank"
                className="inline-flex gap-1 items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Github
              </a>
              <Badge color="info">
                Public Repos : {githubDatas.public_repos}
              </Badge>
            </div>
          </div>
        </CardCustom>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex px-10 bg-mountain-home bg-cover bg-center py-52 mb-20">
        <CardCustom
          title={t("pages.home.section-1.card.title")}
          content={t("pages.home.section-1.card.content")}
        />
      </section>
      <Separator content="News" />
      <section className="mx-0 md:mx-10 lg:mx-20">
        <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 mb-10 mx-auto w-1/2">
          {t("pages.home.section-1.paragraph")}
        </p>
        <CarouselCustom data={datas} />
      </section>
      <Separator content="Informations" />
      <section className="flex my-10 flex-col flex-nowrap items-center py-24">
        <CardCustom title="" path="/resume-app/about">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 rounded-full shadow-lg"
              src="./images/profile-picture.png"
              height="96"
              width="96"
              alt="placeholder"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              CHOUMMANIVONG Dimitri
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Web Developper
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="https://www.linkedin.com/in/dimitri-choummanivong-507669228/"
                target="blank"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                LinkedIn
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                contact me
              </Link>
            </div>
          </div>
        </CardCustom>

        <div className="mt-16 bg-slate-200 w-full flex flex-wrap justify-center gap-6 py-24 px-10">
          <div className="w-full md:w-1/2 mx-auto md:mx-0">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl dark:text-white">
              GITHUB PROFILE
            </h2>
            <p className="text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 mb-10">
              {t("pages.home.section-2.github.paragraph")}
            </p>
          </div>
          <GitHubProfile username={import.meta.env.VITE_GITHUB_USERNAME} />
        </div>
      </section>
    </>
  );
};

export default Home;
