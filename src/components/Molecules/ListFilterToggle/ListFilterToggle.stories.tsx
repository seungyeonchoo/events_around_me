import { Meta, StoryFn } from '@storybook/react';
import ListFilterToggle, { ListFilterToggleProps } from '.';

export default {
  title: 'MOLECULES/List Filter Toggle',
  component: ListFilterToggle,
  tags: ['autodocs'],
} as Meta<typeof ListFilterToggle>;

const Template: StoryFn<typeof ListFilterToggle> = (args: ListFilterToggleProps) => (
  <ListFilterToggle {...args} />
);

export const Default = Template.bind({});
