import React from 'react';
import { useHistory } from "react-router-dom"
// import Footer from '../Footer';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';


const Products = ({ heading, data,styled }) => {
  const history = useHistory();
  return (
    <>
    
    <Navbar  styled={styled}/>
    <ProductsContainer>
    
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}  onClick={() => history.push(`/details/${product.id}`)}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                {/* <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <Link to='/'><ProductButton>{product.button}</ProductButton></Link> */}
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
     
    </ProductsContainer>
    </>
  );
};

export default Products;
