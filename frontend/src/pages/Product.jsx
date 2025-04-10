import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size ,setSize] = useState("");

  useEffect(() => {
    if (products && productId) {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image?.[0] || "");
        // console.log(foundProduct);
      }
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((item, index) => (
              <img
                onClick={()=>setImage(item)}
                key={index}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          {/*-------product image-----*/}
             <div className="w-full sm:w-[80%]">
              <img  className="w-full h-auto" src={image} alt="" />
              </div>   
        </div>
     
            {/*-------product info-----*/}

             <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_dull_icon} alt="" />
                <p className="pl-2">(122)</p>
              </div>
              <p className="mt-5 text-3xl font-medium">{currency} {productData.price}</p>
              <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
              <div className="flex flex-col gap-4 my-8 ">
                <p>Select Size</p>
                  <div className="flex gap-2">
                      {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item ===size?'border-orange-500' :''}`} key={index}>{item}</button>
                      ))}
                  </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)}  className="bg-black text-white px-3  text-sm active:bg-gray-700">Add To Cart </button>
              <hr className="mt-8 sm:w-4/5"/>
              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <p>1000% Original product</p>
                <p>Cash on delivery is available on this product</p>
                <p> Easy return and exchange policy within 7 Days </p>
              </div>
             </div>
      </div>
           
           {/*-------description and review section -----*/}

           <div className="mt-20"> 
            <div className="flex">
                    <b className="border px-5 py-3 text-sm">
                      Description
                    </b>
                    <p className="border px-5 py-3 text-sm">Review(122)</p>
            </div>
              <div className="flex flex-col gap-4 py-6   px-6 text-sm text-gray-500">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cupiditate mollitia. Maiores quos quo numquam laborum similique vitae eaque adipisci voluptatum, consectetur sint! Velit nulla expedita voluptas, amet eaque veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veniam. Quod deserunt ad cumque assumenda facere dolorum esse incidunt est odit. Delectus perspiciatis quasi sed ea fugiat sapiente aspernatur eius!</p>
              </div>
           </div>

            {/*-------display related products -----*/}

            <div>
              <p>{productData.subCategory}</p>
              <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
            </div>
    </div>
  );
};

export default Product;
