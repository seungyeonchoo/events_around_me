import { Meta, StoryFn } from '@storybook/react';
import UserTitle, { UserTitleProps } from '.';
import { mockUser } from '../../../lib/mocks/mockData';

export default {
  title: 'User/UserTitle',
  component: UserTitle,
  tags: ['autodocs'],
} as Meta<typeof UserTitle>;

const Template: StoryFn<typeof UserTitle> = (args: UserTitleProps) => <UserTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: mockUser,
};
