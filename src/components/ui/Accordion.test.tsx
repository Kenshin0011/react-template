import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders title", () => {
    render(
      <Accordion
        items={[
          {
            value: "1",
            title: "Panda CSS",
            content: "Hello",
          },
        ]}
      />,
    );

    expect(screen.getByText("Panda CSS")).toBeInTheDocument();
  });
});
