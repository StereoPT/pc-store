import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, company, img, info, price, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                  <h1>{ title }</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid rounded-lg" alt="Product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model: { title }</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made By: <span className="text-uppercase">{ company }</span>
                  </h4>
                  <h4 className="text-green">
                    <strong>Price: { price } <span>€</span></strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Info About the Product:
                  </p>
                  <p className="text-muted lead">{ info }</p>

                  <div>
                    <Link to='/'>
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      { inCart ? 'In Cart' : 'Add To Cart' }
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    )
  }
}
