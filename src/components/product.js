import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
function Product() {
  const { id, title, img, price, inCart } = this.props.product
  return (
    <productWrapper>
      <h3>hello from product</h3>
    </productWrapper>
  );
}
const ProductWrapper = styled.div
export default Product;
