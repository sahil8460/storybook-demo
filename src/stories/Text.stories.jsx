import React from 'react';
import { Text } from './Text';

export default {
    title: 'TEXT/Title',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
    Heading: "h1"
};

export const H2 = Template.bind({});
H2.args = {
    Heading: "h2"
};

export const H3 = Template.bind({});
H3.args = {
    Heading: "h3"
};

export const H4 = Template.bind({});
H4.args = {
    Heading: "h4"
};

export const H5 = Template.bind({});
H5.args = {
    Heading: "h5"
};

export const H6 = Template.bind({});
H6.args = {
    Heading: "h6"
};