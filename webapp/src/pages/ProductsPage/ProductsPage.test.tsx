import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { GET_PRODUCTS_URL } from "../ApiHelper";
import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";

describe("ProductsPage", () => {
    it("shouldDisplayLoadingSpinner", () => {
        render(
            <MemoryRouter>
                <ProductsPage />
            </MemoryRouter>
        );
        expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
    });
    it("shouldDisplayEmptyProductsTable", async() => {
        // set up mock for axios.get
        const response = {
            data: [],
            message: ""
        };
        const server = setupServer(
          rest.get(GET_PRODUCTS_URL, (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(response));
          })
        );
        server.listen();
        render(
            <MemoryRouter>
                <ProductsPage />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByTestId(`products-table`)).toBeInTheDocument();
            expect(screen.getByTestId(`row-no-products`)).toBeInTheDocument();
        });
        server.close();
    });
    it("shouldDisplayProductsList", async() => {
        // set up mock for axios.get
        const response = {
            data: [
                {
                    ProductID: 0,
                    ProductName: "Safety Blanket",
                    ProductPhotoURL: "",
                }
            ],
            message: ""
        };
        const server = setupServer(
          rest.get(GET_PRODUCTS_URL, (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(response));
          })
        );
        server.listen();
        render(
            <MemoryRouter>
                <ProductsPage />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByTestId(`products-table`)).toBeInTheDocument();
            expect(screen.getByText(`Safety Blanket`)).toBeInTheDocument();
        });
        server.close();
    });
    it("shouldDisplayErrorMessage", async() => {
        // set up mock for axios.get
        const response = {
            data: [],
            message: "Error"
        };
        const server = setupServer(
          rest.get(GET_PRODUCTS_URL, (req, res, ctx) => {
            return res(ctx.status(500), ctx.json(response));
          })
        );
        server.listen();
        render(
            <MemoryRouter>
                <ProductsPage />
            </MemoryRouter>
        );
        
        await waitFor(() => {
            expect(screen.getByTestId(`error-container`)).toBeInTheDocument();
        });
        server.close();
    });
});