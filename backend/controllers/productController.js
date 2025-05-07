import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller
    } = req.body;


    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(Boolean);


    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      price: Number(price),
      description,
      category,
      subCategory,
      sizes,
      bestseller: bestseller === "true",
      images: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    console.log("Saved product:", product);

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log({ success: false, message: error.message });
    res.status(500).json({ success: false, message: error.message });
  }
};

export default addProduct;


    // const addProduct = async (req, res) => {
    //     try {
    //       const { name, price, description, category, subCategory, sizes, bestseller } = req.body;
      
    //       // Build product data without images
    //       const productData = {
    //         name,
    //         price: Number(price),
    //         description,
    //         category,
    //         subCategory,
    //         sizes,
    //         bestseller: bestseller === 'true' ? true : false,
    //         date: Date.now()
    //       };
      
    //       console.log(productData);
      
    //       const product = new productModel(productData);
    //       await product.save();
      
    //       res.json({ success: true, message: 'Product added successfully' });
    //     } catch (error) {
    //       console.log({ success: false, message: error.message });
    //       res.status(500).json({ success: false, message: 'Server Error' });
    //     }
    //   };




// function for list product 




const listProduct = async (req,res)=>{
      try {
        const products = await productModel.find({});
        res.json({success:true,products})

      } catch (error) {
        console.log({success:false,message:error.message})
        res.json({success:false,message:error.message})
      }     
}    
// function for remove product  

const removeProduct = async (req,res)=>{
      
    try {
      await productModel.findByIdAndDelete(req.body.id)
      res.json({success:true,message:'Product removed successfully'})
    } catch (error) {
      console.log({success:false, message:error.message})
    }
}





// const for single product 

const singleProduct = async (req , res)=>{
       try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
       } catch (error) {
        console.log({success:true, message:error.message})

       }
}

export {addProduct,removeProduct,listProduct,singleProduct}