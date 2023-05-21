import { Meta, StoryFn } from '@storybook/react';
import WelcomeTitle, { WelcomeTitleProps } from '.';

export default {
  title: 'MOLECULES/Welcome Title',
  component: WelcomeTitle,
  tags: ['autodocs'],
} as Meta<typeof WelcomeTitle>;

const Template: StoryFn<typeof WelcomeTitle> = (args: WelcomeTitleProps) => (
  <WelcomeTitle {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: {
    id: 1,
    email: 'user@email.com',
    password: '12345678',
    firstName: 'Seungyeon',
    lastName: 'Choo',
  },
};
