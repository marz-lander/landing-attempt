import React from 'react';
import { render, screen } from '@testing-library/react'
import ProductsTable from './ProductsTable';

describe('ProductsTable', () => {
    it('rendersTable', async () => {
        const ID = '1234';
        const props = {
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
        render(
            <ProductsTable {...props} />
        );
        expect(screen.getByTestId(`products-table`)).toBeInTheDocument();
        expect(screen.getByText(`ID`)).toBeInTheDocument();
        expect(screen.getByText(`Name`)).toBeInTheDocument();
        expect(screen.getByText(`Image`)).toBeInTheDocument();
        expect(screen.getByText(`Safety Blanket`)).toBeInTheDocument();
        expect(screen.getByText(`Underpants`)).toBeInTheDocument();
    });
    it('rendersEmptyTable', async () => {
        const ID = '1234';
        const props = {
            products: [],
        };
        render(
            <ProductsTable {...props} />
        );
        expect(screen.getByTestId(`products-table`)).toBeInTheDocument();
        expect(screen.getByTestId(`row-no-products`)).toBeInTheDocument();
        expect(screen.getByText(`ID`)).toBeInTheDocument();
        expect(screen.getByText(`Name`)).toBeInTheDocument();
        expect(screen.getByText(`Image`)).toBeInTheDocument();
    });
  });