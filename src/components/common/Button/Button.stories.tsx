import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '',
  size: 'md',
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'primary',
  color: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'secondary',
  color: 'secondary',
  size: 'md',
};

export const XSmall = Template.bind({});

XSmall.args = {
  children: 'xs',
  size: 'xs',
};
export const Small = Template.bind({});

Small.args = {
  children: 'sm',
  size: 'sm',
};

export const Large = Template.bind({});

Large.args = {
  children: 'lg',
  size: 'lg',
};

export const Full = Template.bind({});

Full.args = {
  children: 'full',
  size: 'full',
};
