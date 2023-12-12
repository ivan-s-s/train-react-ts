import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "ui-kit";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/* First card */
export const First: Story = {
  args: {
    title: "Card one",
    children:
      "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Ex alias laborum voluptate amet neque eos, sed iure debitis voluptatem molestias voluptatibus cumque in qui placeat sequi possimus maiores! Sed, numquam!",
  },
};

/* Second card */
export const Second: Story = {
  args: {
    title: "Card two",
    children:
      "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Ex alias laborum voluptate amet neque eos, sed iure debitis voluptatem molestias voluptatibus cumque in qui placeat sequi possimus maiores! Sed, numquam!",
  },
};

/* Third card */
export const Third: Story = {
  args: {
    title: "Card three",
    children:
      "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Ex alias laborum voluptate amet neque eos, sed iure debitis voluptatem molestias voluptatibus cumque in qui placeat sequi possimus maiores! Sed, numquam!",
  },
};
