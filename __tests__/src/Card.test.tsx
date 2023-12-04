import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import CardCustom from "../../src/components/Card/Card.tsx";

describe("CardCustom Component", () => {
  test("renders CardCustom with title", () => {
    const title = "Sample Title";

    const content = "Sample Content";

    const { getByText } = render(
      <CardCustom title={title} content={content} />
    );

    const titleElement = getByText(title);

    const contentElement = getByText(content);

    expect(titleElement).toBeInTheDocument();

    expect(contentElement).toBeInTheDocument();
  });

  test("renders CardCustom without content", () => {
    const title = "Sample Title";

    const { getByText } = render(<CardCustom title={title} />);

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });
});
