import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';
import { mockUser } from '../../../lib/mockData';

export default {
  title: 'TEMPLATES/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: mockUser,
};
