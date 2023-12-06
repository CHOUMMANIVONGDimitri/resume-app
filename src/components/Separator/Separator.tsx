import React from "react";

interface SeparatorProps {
  content?: string;
}

const Separator: React.FC<SeparatorProps> = ({ content }) => (
  <div className="inline-flex items-center justify-center w-full">
    <hr className="w-1/2 h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
      {content}
    </span>
  </div>
);

Separator.defaultProps = {
  content: " "
};

export default Separator;
