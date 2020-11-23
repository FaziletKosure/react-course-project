import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom"
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
} from '../../components/Products/ProductsElements';


const ProductsDetails = ({ heading, data,styled }) => {
 
    const { id } = useParams();
    
  return (
    <>
    
    <Navbar  styled={styled}/>
    <ProductsContainer>
    
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
            if(product.id===parseInt(id)){
                return (
                    
                    <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductDesc>{product.desc}</ProductDesc>
                      <ProductPrice>{product.price}</ProductPrice>
                      <Link to='/'><ProductButton>{product.button}</ProductButton></Link>
                    </ProductInfo>
                  </ProductCard>
              
                );
                }
        })}
      </ProductWrapper>
     
    </ProductsContainer>
    </>
  );
};

export default ProductsDetails;
