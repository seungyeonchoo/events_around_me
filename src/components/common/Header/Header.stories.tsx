import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';

export default {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});
