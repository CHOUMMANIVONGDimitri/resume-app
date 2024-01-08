import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import CardCustom from "../../src/components/Card/Card.tsx";

describe("CardCustom Component", () => {
  const title = "Sample Title";

  test("renders CardCustom with title", () => {
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
    const { getByText } = render(<CardCustom title={title} />);

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  test("renders CardCustom with specific className", () => {
    const { getAllByTestId } = render(<CardCustom title={title} animation />);

    const cardCustomElement = getAllByTestId("flowbite-card");

    cardCustomElement.forEach((element) => {
      expect(element).toHaveClass("ease-in-out hover:scale-125 duration-100");
    });
  });
});
