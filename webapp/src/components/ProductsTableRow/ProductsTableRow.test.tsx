import React from 'react';
import { render, screen } from '@testing-library/react'
import ProductsTableRow from './ProductsTableRow';

describe('ProductsTableRow', () => {
    it('rendersRow', async () => {
        const ID = '1234';
        const props = {
            ProductID: 0,
            ProductName: "Safety Blanket",
            ProductPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Blanket_fort.jpg/512px-Blanket_fort.jpg?20200606014951",
        };
        render(
            <table>
                <tbody>
                    <ProductsTableRow {...props} />
                </tbody>
            </table>
        );
        expect(screen.getByTestId(`products-table-row-0`)).toBeInTheDocument();
        expect(screen.getByText(`Safety Blanket`)).toBeInTheDocument();
    });
    it('rendersPlaceholderImage', async () => {
        const ID = '1234';
        const props = {
            ProductID: 1,
            ProductName: "Underpants",
            ProductPhotoURL: "",
        };
        render(
            <table>
                <tbody>
                    <ProductsTableRow {...props} />
                </tbody>
            </table>
        );
        expect(screen.getByTestId(`products-table-row-1`)).toBeInTheDocument();
        expect(screen.getByText(`🧶`)).toBeInTheDocument();
    });
  });