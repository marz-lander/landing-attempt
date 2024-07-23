import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductsTable from './ProductsTable';

export default {
    title: 'Products Table',
    component: ProductsTable,
} as ComponentMeta<typeof ProductsTable>;

const Template: ComponentStory<typeof ProductsTable> = (args) => (
    <ProductsTable {...args} />
);

export const HasProducts = Template.bind({});
HasProducts.args = {
    products: [
        {
            ProductID: 0,
            ProductName: "Safety Blanket",
            ProductPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Blanket_fort.jpg/512px-Blanket_fort.jpg?20200606014951",
        },
        {
            ProductID: 1,
            ProductName: "Underpants",
            ProductPhotoURL: "",
        },
    ],
};

export const NoProducts = Template.bind({});
NoProducts.args = { products: []};