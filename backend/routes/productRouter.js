import express from 'express';

import  {addProduct,removeProduct,listProduct,singleProduct} from '../controllers/productController.js';

const productRouter = express.Router();
productRouter.post('/add',addProduct);
productRouter.post('/remove',removeProduct);
productRouter.get('/list',listProduct);
productRouter.post('/single',singleProduct);

export default productRouter;