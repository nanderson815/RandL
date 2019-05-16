import React from 'react';
import Product from '../components/Product';

const Shop = (props) => {

  return (
    <div className="App">
    

      <div className="Product-wrapper">
        {props.data.shop.products.edges.map(product =>
          <Product addVariantToCart={props.addVariantToCart} checkout={props.checkout} key={product.node.id.toString()} product={product.node} />
        )}
      </div>

    </div>
  );

}

export default Shop;
