import { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionGroup } from "ui-kit";
import * as AccordionStories from "./Accordion.stories";

const meta = {
  title: "AccordionGroup",
  component: AccordionGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionGroup>;

export default meta;

type Story = StoryObj<typeof AccordionGroup>;

/* Card Group */
export const CardGroup: Story = {
  args: {
    title: "Group Card",
  },
  render: args => {
    return (
      <AccordionGroup {...args}>
        <Accordion {...AccordionStories.First.args} />
        <Accordion {...AccordionStories.Second.args} />
        <Accordion {...AccordionStories.Third.args} />
      </AccordionGroup>
    );
  },
};

/* args: {
  title: "Card Group",
  children: `${[{...AccordionStories.First.args}]}`,
}, */
