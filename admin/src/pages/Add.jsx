import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Add = () => {

  const [image1 ,setImage1]  = useState(false);
  const [image2 ,setImage2]  = useState(false);
  const [image3 ,setImage3]  = useState(false);
  const [image4 ,setImage4]  = useState(false);


  const [name,setName] =useState('');
  const [description,setDescription] =useState('');
  const [category,setCategory] =useState('Men');
  const [subcategory,setSubCategory] =useState('TopWear');
  const [price,setPrice] =useState('');
  const [size,setSize] =useState('');
  const [bestseller,setBestSeller] =useState(false);

 
  return (
    <form>
      <div className='flex flex-col w-full gap-3'>
        <p className='mb-2 '>Upload Image</p>
       <div className='flex gap-2'>
       <label htmlFor="image1" style={{ cursor: 'pointer' }}>
        <img className='w-20' src={assets.upload_area} alt="Upload area" />
        <input type="file" id="image1" hidden />
      </label>
      <label htmlFor="image2" style={{ cursor: 'pointer' }}>
        <img className='w-20' src={assets.upload_area} alt="Upload area" />
        <input type="file" id="image2" hidden />
      </label>
      <label htmlFor="image3" style={{ cursor: 'pointer' }}>
        <img className='w-20' src={assets.upload_area} alt="Upload area" />
        <input type="file" id="image3" hidden />
      </label>
      <label htmlFor="image4" style={{ cursor: 'pointer' }}>
        <img className='w-20' src={assets.upload_area} alt="Upload area" />
        <input type="file" id="image4" hidden />
      </label>
       </div>
    
      </div>
      <div className='w-full '>
        <p className='mb-2 '>Product name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
      </div>

      <div className='w-full '>
        <p className='mb-2 '>Product description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div className=''>
              <p className='mb-2'>Product Category</p>
              <select className='px-3 py-2' name="" id="">
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
        </div>
         
        <div className=''>
              <p className='mb-2' >Sub Category</p>
              <select className='px-3 py-2' name="" id="">
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
        </div>
        <div>
          <p className='mb-2 '>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' placeholder='25' type="Number" name="" id=""  />
        </div>
        
      </div>

      <div>
        <p className='mb-2'>Product Sizes </p>
        <div className='flex gap-3 '>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer' >M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" name="" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">
          Add to Best Seller
        </label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>
    </form>
  );
};

export default Add;
