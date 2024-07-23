import React from 'react';
import { ProductsTableRowProps } from '../interfaces';

const ProductsTableRow = (props: ProductsTableRowProps) => {
  const { ProductID, ProductName, ProductPhotoURL } = props;
  const cellClass = "border-b p-4 pl-8";
  return <tr data-testid={`products-table-row-${ProductID}`} className="hover:bg-slate-800 hover:text-slate-100">
    <td className={cellClass}>{ProductID}</td>
    <td className={cellClass}>{ProductName}</td>
    <td className={cellClass}>{
      ProductPhotoURL 
      ? <img className="w-16 md:w-32 lg:w-48" loading="lazy" src={ProductPhotoURL}/> 
      : "🧶"
    }</td>
  </tr>;
};

export default ProductsTableRow;