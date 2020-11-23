import React from 'react'
import Feature from '../Feature';
import Footer from '../Footer';
import Products from '../Products';
import { productData, productDataTwo,productDataipad } from '../Products/data';

function ProductsPage() {
    return (
        <>
        <Products heading='Choose your favorite' data={productData} styled='hidden'/>
        <Products heading='Choose your favorite iphone-12' data={productDataTwo} styled='hidden' />
        {/* <Feature/> */}
 
         <Products heading='Choose your favorite ipad' data={productDataipad} styled='hidden' />
         <Footer/>
        </>
    )
}

export default ProductsPage
