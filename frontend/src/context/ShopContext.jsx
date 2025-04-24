/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState  } from "react";
import { toast } from "react-toastify";
export const ShopContext = createContext();
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee= 10;
    const backendUrl= import.meta.env.VITE_BACKEND_URL
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] =useState(false);
    const [products , setProducts] = useState([])
    const [cartItems, setCartItems] = useState({});
    const [token ,setToken] = useState('');
    const navigate = useNavigate(); 


    const addToCart = async (itemId,size) =>{

        if(!size) {
              toast.error('Please select a size');
              return;
        }
       
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
           if(cartData[itemId][size]){
            cartData[itemId][size] += 1;  
    }
              else{
                cartData[itemId][size] = 1;
              }
          } else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
          }
          setCartItems(cartData);
     };
     const getCartAmount = () =>{
          let totalAmount = 0;
          for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] >0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                       }
                }
                catch(e){
                    console.log(e); 
                
                } 
            }
          }
            return totalAmount;
     }
    //  useEffect(()=>{
    //     console.log(cartItems);
    //  },[cartItems])
    const getCartCount = ()=> {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] >0){
                        totalCount += cartItems[items][item];
                       }
                }
                catch(e){
                    console.log(e); 
                
                } 
        }
    }
        return totalCount;
    }

    const getProductData = async ()=>{
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            console.log(response.data)
        } catch (error) {
           console.log(error)   
        }
    }
    useEffect(()=>{
        getProductData()
    },[])

    const updateQuantity = async (itemId,size,quantity)=>{
         let cartData = structuredClone(cartItems);
         cartData[itemId][size] = quantity;
         setCartItems(cartData);
    }
    const value = {
       products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,cartItems,addToCart,
        getCartCount,updateQuantity,getCartAmount,navigate,backendUrl,
        setToken,token , setProducts
    }; 
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
