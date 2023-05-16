import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello',
  text_type: 'h1',
  //   color: 'primary',
};
