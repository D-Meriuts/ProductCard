import React from "react";
import { products } from "/src/mock";
import Catalog from "/src/catalog/catalog";
import ProductPage from "/src/product-page/product-page";
import Layout from "/src/layout/layout";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductOr404({ products }) {
  const { code } = useParams();
  const product = products.find((product) => product.code.toString() === code);
  return product ? (
    <ProductPage product={product} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog products={products} />} />
          <Route path="product">
            <Route
              path=":code"
              element={<ProductOr404 products={products} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
