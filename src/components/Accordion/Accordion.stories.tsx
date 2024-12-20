import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of accordion items with title and content.',
    },
    defaultOpenId: {
      control: 'text',
      description: 'ID of the accordion item to be open by default.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const exampleItems: AccordionItem[] = [
  { id: 'item1', title: 'Amia', content: <div>This is the content for Amia</div> },
  { id: 'item2', title: 'Homechoice Claria', content: <div>This is the content for Homechoice Claria</div> },
  { id: 'item3', title: 'Kaguya', content: <div>This is the content for Item Kaguya</div> },
];

export const Default: Story = {
  args: {
    items: exampleItems,
  },
};

export const WithDefaultOpen: Story = {
  args: {
    items: exampleItems,
    defaultOpenId: 'item2',
  },
};

export const CustomizedAccordion: Story = {
  args: {
    items: [
      { id: 'item1', title: 'Amia', content: <div>This is the content for Amia</div> },
      { id: 'item2', title: 'Homechoice Claria', content: <div>This is the content for Homechoice Claria</div> },
    ],
  },
};
