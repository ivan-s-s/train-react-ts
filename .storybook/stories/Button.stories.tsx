import { Meta, StoryObj } from "@storybook/react";

import { Button } from "ui-kit";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/* Base button */
export const Base: Story = {
  args: {
    isDisabled: false,
    children: "Button",
  },
};

/* Disabled button */
export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Button",
  },
};
