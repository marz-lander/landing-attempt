import React from 'react';
import { ProductsTableProps } from '../interfaces';
import ProductsTableRow from '../ProductsTableRow/ProductsTableRow';

const COLUMNS = ["ID", "Name", "Image"];

const ProductsTable = (props: ProductsTableProps) => (
  <div className="relative overflow-auto w-auto p-4 text-white">
    <table data-testid="products-table" className="table-auto w-full text-sm">
      <thead>
        <tr>
          {
            COLUMNS.map((title, i) => (
              <th key={i} className="border-b font-medium p-4 pl-8 pt-0 pb-3">{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.products.length === 0 
          ? <tr data-testid="row-no-products" className="">
              <td className="border-b p-4 pl-8 text-center" colSpan={COLUMNS.length}>
                No products available.
              </td>
            </tr>
          : props.products.map((p) => <ProductsTableRow key={p.ProductID} {...p} />)
        }
      </tbody>
    </table>
  </div>
);

export default ProductsTable;