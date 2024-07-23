import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { GET_PRODUCTS_URL } from "../ApiHelper";

export default {
    title: 'Products Page',
    component: ProductsPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: GET_PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
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
                message: ""
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: GET_PRODUCTS_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: GET_PRODUCTS_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
    ],
};
