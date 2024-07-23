import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../ApiHelper";
import PageWrapper from '../PageWrapper';
import Spinner from "../../components/Spinner/Spinner";
import { Product } from "../../components/interfaces";
import ProductsTable from "../../components/ProductsTable/ProductsTable";

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};
 
const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState([] as Product[]);

  const getData = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { products, errorOccurred } = await getProducts();
    setData(products);
    setLoadingState(errorOccurred ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getData();
  }, []);

  let content = <Waiting/>;
  switch (loadingState) {
    case DATA_STATES.loaded:
      content = <ProductsTable products={data}/>;
      break;
    case DATA_STATES.error:
      content = <LoadingError/>;
      break;
    case DATA_STATES.waiting:
    default:
      content = <Waiting/>;
      break;
  }

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        Products
      </h1>
      { content }
    </PageWrapper>
  );
};

const Waiting = () => (
  <div
    className="flex flex-row justify-center w-full pt-4"
    data-testid="loading-spinner-container"
  >
    <Spinner />
  </div>
);

const LoadingError = () => (
  <div
    className="flex flex-row justify-center w-full pt-4 text-base font-bold text-white"
    data-testid="error-container"
  >
    An error occurred fetching products!
  </div>
);

export default ProductsPage
