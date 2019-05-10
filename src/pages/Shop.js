import React from 'react';
import Cart from '../components/Cart';
import Product from '../components/Product';

const Shop = (props) => {
    
    return (
      <div className="App">
        <header className="App__header">
          <div className="App__title">
            <h1>Shop Our Bags:</h1>
            
          </div>
        </header>
        
        <div className="Product-wrapper">
          {props.data.shop.products.edges.map(product =>
            <Product addVariantToCart={props.addVariantToCart} checkout={props.checkout} key={product.node.id.toString()} product={product.node} />
          )}
        </div>

        <Cart
          checkout={props.checkout}
          isCartOpen={props.isCartOpen}
          handleCartClose={props.handleCartClose}
          updateQuantityInCart={props.updateQuantityInCart}
          removeLineItemInCart={props.removeLineItemInCart}
        />
      </div>
    );
  
}

export default Shop;
