import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';
//  function for add product 
const addProduct = async ( req,res)=>{
      
    try {
         const {name,price,description,category ,subCategory,sizes,bestseller}=req.body;  
            const image1 =  req.files.image1 && req.files.image1[0];  // this is used to check that the image is requested from the body and  used to store the image on the database
            const image2 = req.files.image1 && req.files.image2[0];
            const image3 = req.files.image1 && req.files.image3[0];
            const image4 = req.files.image1 && req.files.image4[0];

            //  to store all the url of the database in the cloudinary  packages

            const  images = [image1,image2,image3,image4].filter((item)=>item !== undefined)
            
             let imagesUrl = await promiseImpl.all(
                      images.map(async (item) =>{
                        let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                        return result.secure_url
                      })
             )  
               const productData = {
                name,
                price:Number(price),
                description,
                category,
                subCategory,
                sizes,
                bestseller:bestseller === 'true' ? true : false,
                images:imagesUrl,
                date:Date.now() 
               }
               console.log(productData)
               const product = new productModel(productData)
               await product.save()
               res.json({success:true, message:'Product added successfully'})

            console.log( name,price,description,category ,subCategory,sizes,bestseller)
            console.log(imagesUrl)         
    } catch (error) {
          console.log({success:false, message:error.message})
    }
    res.json({})
}
// function for remove product  

const removeProduct = async (req,res)=>{
    
}

// function for list product 

const listProduct = async (req,res)=>{
    
}

// const for single product 

const singleProduct = async (req , res)=>{
    
}

export {addProduct,removeProduct,listProduct,singleProduct}