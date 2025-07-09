// components/Card.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./Card";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		title: "Sample Card",
		description: "This is a description for the sample card component.",
		href: "/sample-card",
		asset: {
			_id: "sample-image",
			alt: "Sample Image",
			url: "/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
			height: 1920,
			width: 1280,
		},
	},
};

export const ImageLeft: Story = {
	args: {
		title: "Sample Card with Image on Left",
		description: "This is a description for the sample card component.",
		href: "/sample-card",
		asset: {
			_id: "sample-image",
			alt: "Sample Image",
			url: "/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
			height: 1920,
			width: 1280,
		},
		imagePosition: "left",
	},
};

export const NoImage: Story = {
	args: {
		title: "Card Without Image",
		description: "This card has no image but still renders nicely.",
		href: "/sample-card",
	},
};
