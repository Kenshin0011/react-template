import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: ["1"],
    items: [
      {
        value: "1",
        title: "Panda CSS",
        content: "Build-time CSS generation.",
      },
      {
        value: "2",
        title: "Ark UI",
        content: "Headless UI components.",
      },
      {
        value: "3",
        title: "React",
        content: "Modern React applications.",
      },
    ],
  },
};
