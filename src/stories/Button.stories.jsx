import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    handleClick: { action: "handleClick"},
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  size: 'medium',
  backgroundColor: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  size: 'medium',
  backgroundColor: 'gray'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  size: 'medium',
  backgroundColor: 'green'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
  backgroundColor: 'black'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium',
  backgroundColor: 'black'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
  backgroundColor: 'black'
};
