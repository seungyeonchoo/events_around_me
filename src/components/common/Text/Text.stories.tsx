import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from '.';

export default {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args: TextProps) => <Text {...args} />;

export const Dark = Template.bind({});

Dark.args = {
  children: 'default',
  text_tag: 'h1',
  color: 'dark',
  size: 'md',
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'primary',
  text_tag: 'h1',
  color: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'secondary',
  text_tag: 'h1',
  color: 'secondary',
  size: 'md',
};
