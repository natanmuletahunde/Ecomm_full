import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);  // ✅ Fixed

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[products]);  // ✅ Added dependency to avoid empty products

  return (
    <div className='my-10'>
       <div className='text-center text-3xl py-8'>
          <Title text1={'LATEST'}  text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque minima repellendus aliquam architecto pariatur ipsa labore maxime illum laborum exercitationem at, consequatur maiores rerum blanditiis placeat ducimus, assumenda error.
          </p>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>{
        latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image}  price={item.price}/>
        ))
       }
       </div>
    </div>
  )
}

export default LatestCollection;
