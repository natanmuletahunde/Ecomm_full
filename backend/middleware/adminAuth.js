import jwt from 'jsonwebtoken' // this jsonwebtoken is used for decode and verify jwt tokens 
const adminAuth = (req, res, next) => {
    try {
        const {token } = req.headers;
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); // is used for verify the token
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        next() //  is callback that moves to the next middleware
    } catch (error) {
        console.log({success:false,message:error.message})
    }
}

export default adminAuth