import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductsTableRow from './ProductsTableRow';

export default {
    title: 'Product Table Row',
    component: ProductsTableRow,
} as ComponentMeta<typeof ProductsTableRow>;

const Template: ComponentStory<typeof ProductsTableRow> = (args) => (
    <ProductsTableRow {...args} />
);

export const Product = Template.bind({});
Product.args = {
    ProductID: 0,
    ProductName: "Safety Blanket",
    ProductPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Blanket_fort.jpg/512px-Blanket_fort.jpg?20200606014951",
};

export const NoImage = Template.bind({});
NoImage.args = { 
    ProductID: 1,
    ProductName: "Underpants",
    ProductPhotoURL: "",
};