import { Meta, StoryFn } from '@storybook/react';
import UserTemplate, { UserTemplateProps } from '.';
import { mockUser } from '../../../lib/mockData';

export default {
  title: 'TEMPLATES/User',
  component: UserTemplate,
  tags: ['autodocs'],
} as Meta<typeof UserTemplate>;

const Template: StoryFn<typeof UserTemplate> = (args: UserTemplateProps) => (
  <UserTemplate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: mockUser,
};
