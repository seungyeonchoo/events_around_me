import { Meta, StoryFn } from '@storybook/react';
import NameInput, { NameInputProps } from '.';

export default {
  title: 'ORGANISMS/Name Input',
  component: NameInput,
  tags: ['autodocs'],
} as Meta<typeof NameInput>;

const Template: StoryFn<typeof NameInput> = (args: NameInputProps) => <NameInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
