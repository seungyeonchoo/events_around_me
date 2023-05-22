import { Meta, StoryFn } from '@storybook/react';
import UserTitle, { UserTitleProps } from '.';
import { mockUser } from '../../../lib/mockData';

export default {
  title: 'ORGANISMS/User Title',
  component: UserTitle,
  tags: ['autodocs'],
} as Meta<typeof UserTitle>;

const Template: StoryFn<typeof UserTitle> = (args: UserTitleProps) => <UserTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: mockUser,
};
