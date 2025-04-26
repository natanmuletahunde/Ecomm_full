import orderModel from "../models/orderModel";
import userModel from "../models/userModel";
import { Stripe } from 'stripe'

//  global variables 
const currency ='inr'
const deliveryCharge = 10  


// gate initialize
const stripe = new Stripe(process.env.STRIP_SECRET_KEY)
// placing orders  using the COD method 
const placeOrder = async ( req, res )=>{
   try {
       const {userId, item , amount, address } = req.body;
       
    const  orderData = {
     userId,
     item,
     address,
     amount,
     paymentMethod:'COD', // this is using for the create delivery cash using with out the online system 
     payment:false,
     date:Date.now()
       }
    const orderModel = new orderModel(orderData)//   first of all we must convert to model  in order to save in the database 
    await orderModel.save()
    await userModel.findByIdAndUpdate('userId',{cartData:{}})
    res.json({success:true, message:"Order Placed"})
   } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
   }
}
// Placing orders using stripe method 
const placeOrderStripe = async ()=>{
   
   try {
      const {userId, item , amount, address } = req.body;
      const {origin} = req.headers
      const  orderData = {
         userId,
         item,
         address,
         amount,
         paymentMethod:'strip', // this is using for the create delivery cash using with out the online system 
         payment:false,
         date:Date.now()
           }
      const orderModel = new orderModel(orderData)//   first of all we must convert to model  in order to save in the database 
      await orderModel.save()
      const line_items = items.map((item)=>({
         price_data:{
            currency:currency,
            product_data:{
               name:item.name
            },
            unit_amount:item>price * 100
         },quntity:item.quntity

      }))
         line_items.push({
            price_data:{
               currency:currency,
               product_data:{
                  name:'Delivery Charges'
               },
               unit_amount:deliveryCharge * 100
            },quntity:1
         })

         const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment'
         })
         res.json({
            success:true, session_url:session_url
         })

   } catch (error) {
      
      console.log(error)
      res.json({success:false, message:error.message})
   }
} 
// placing razorpay
const placeOrderRazorpay = async ()=>{
    
}
// user order data for frontend 
const allOrders = async ()=>{
    try {
      const orders = await orderModel.find({})
      res.json({orders})
    } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }   

}
//  user orders 
const userOrders = async ()=>{
      
   try {
       
      const {userId} = req.body
      const orders = await orderModel.find({userId})
      res.json({success:true,orders})
   
   } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
 }
}
//update the order status
const updateStatus = async ()=>{
     try {
       const {orderId , status} = req.body
       await orderModel.findByIdAndUpdate(orderId,{status })
       res.json({success:true, message:'Status Updated'})
     }  catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
     }   
}

export { placeOrder,placeOrderRazorpay,placeOrderStripe,userOrders,updateStatus,allOrders}
