import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "ui-kit";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

/* Base button */
export const Base: Story = {
  args: {
    type: "Pdf"
  },
};
