import React from "react";
import { useTranslation } from "react-i18next";

const WorkInProgress: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-slate-200 py-20">
      <h2 className=" text-3xl uppercase font-sans font-semibold mb-5">
        {t("work-in-progress")}
      </h2>
      <img
        className="w-52"
        src="./images/in-progress.png"
        alt="illustration of someone working on his computer"
      />
    </div>
  );
};

export default WorkInProgress;
