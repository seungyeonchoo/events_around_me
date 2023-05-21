import { Meta, StoryFn } from '@storybook/react';
import Radio, { RadioProps } from '.';

export default {
  title: 'ATOMS/Radio',
  component: Radio,
  tags: ['autodocs'],
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args: RadioProps) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'ended',
};
