import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Men');
  const [subcategory, setSubCategory] = useState('TopWear');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subcategory', subcategory);
      formData.append('price', price);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestseller', bestseller);

      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestSeller(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSizeToggle = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className='p-4'>
      <div className='flex flex-col w-full gap-3'>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          {[image1, image2, image3, image4].map((img, i) => (
            <label htmlFor={`image${i + 1}`} key={i} style={{ cursor: 'pointer' }}>
              <img
                className='w-20 h-20 object-cover border'
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt='upload-preview'
              />
              <input
                onChange={(e) => {
                  const setter = [setImage1, setImage2, setImage3, setImage4][i];
                  setter(e.target.files[0]);
                }}
                type='file'
                id={`image${i + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <p className='mb-2'>Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2 border'
          type='text'
          placeholder='Type Here'
          required
        />
      </div>

      <div className='mt-4'>
        <p className='mb-2'>Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2 border'
          placeholder='Write Content Here'
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className='px-3 py-2 border'
            value={category}
          >
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className='px-3 py-2 border'
            value={subcategory}
          >
            <option value='TopWear'>TopWear</option>
            <option value='BottomWear'>BottomWear</option>
            <option value='WinterWear'>WinterWear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px] border'
            placeholder='25'
            type='number'
          />
        </div>
      </div>

      <div className='mt-4'>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} onClick={() => handleSizeToggle(size)}>
              <p
                className={`${
                  sizes.includes(size) ? 'bg-pink-100' : 'bg-slate-200'
                } px-3 py-1 cursor-pointer rounded`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-2 mt-4'>
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type='checkbox'
          id='bestseller'
        />
        <label className='cursor-pointer' htmlFor='bestseller'>
          Add to Best Seller
        </label>
      </div>

      <button className='w-28 py-3 mt-6 bg-black text-white rounded' type='submit'>
        ADD
      </button>
    </form>
  );
};

export default Add;