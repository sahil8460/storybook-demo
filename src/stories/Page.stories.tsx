import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import * as React from "react";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args: any) => (
    <Page {...args}>
      <footer>{args.footer}</footer>
    </Page>
);

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};