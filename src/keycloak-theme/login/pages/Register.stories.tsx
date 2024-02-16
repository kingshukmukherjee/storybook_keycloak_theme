//This is to show that you can create stories for pages that you haven't overloaded.

import { Meta, StoryObj } from '@storybook/react';
import { createPageStory } from "../createPageStory";

const { PageStory } = createPageStory({
    pageId: "register.ftl"
});

const meta = {
    title: "login/Register",
    component: PageStory,
} satisfies Meta<typeof PageStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <PageStory />
};

export const registrationEmailAsUsername: Story = {
    render: () => <PageStory kcContext={{ realm: { registrationEmailAsUsername: true } }} />,
};
