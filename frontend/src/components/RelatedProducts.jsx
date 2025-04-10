import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title'; // Make sure this is imported!

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      const filtered = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 5);
      setRelated(filtered);
       console.log(filtered);
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item,index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
