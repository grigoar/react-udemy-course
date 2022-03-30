import React, { useState } from 'react';

const initProducts = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});
export default (props) => {
  const [productsList, setProductsList] = useState(initProducts);

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = productsList.findIndex((p) => p.id === productId);
      const newFavStatus = !productsList[prodIndex].isFavorite;
      const updatedProducts = [...productsList];
      updatedProducts[prodIndex] = {
        ...productsList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
