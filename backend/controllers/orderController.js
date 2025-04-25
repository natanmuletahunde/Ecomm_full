import orderModel from "../models/orderModel";
import userModel from "../models/userModel";

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
    
}
// placing razorpay
const placeOrderRazorpay = async ()=>{
    
}
// user order data for frontend 
const allOrders = async ()=>{
    
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
    
}

export { placeOrder,placeOrderRazorpay,placeOrderStripe,userOrders,updateStatus,allOrders}
