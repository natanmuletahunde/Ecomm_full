import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { backendUrl } from '../App'


const Orders = ({token}) => {
const [orders , setOrders] = useState([])

const  fetchAllOrders= async ()=>{
   
     if(!token){
      return null
     }
     try {
      const response = await axios.post(backendUrl +'/api/orders/list',{},{headers:{token}})

      if(response.data.success){
        setOrders(response.data.success)
      }
      else{
         toast.error(response.error)
      }
     } catch (error) {
       toast.error(error.message)
     }
}
useEffect(()=>{
  fetchAllOrders()
})
  return (
    <div>
        

    </div>
  )
}

export default Orders