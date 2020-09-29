import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return(
      <div>
        <h3>Hello From ProductList</h3>
        <Product></Product>
      </div>
    );
  }
}