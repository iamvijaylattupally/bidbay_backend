import mongoose from "mongoose";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addProduct = async(req,res)=>{
    try{
        const {name,startprice,description,sellerid} = req.body;
        const user = await User.findById(sellerid);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }else{
            const productImageLocalPath = req.files?.productimage[0]?.path;
            if(!productImageLocalPath){
                return res.status(400).json({message:"Product image is required"});
            }else{
                const image = await uploadOnCloudinary(productImageLocalPath);
                if(!image){
                    return res.status(500).json({message:"error in uploading to cloudinary Internal server error"});
                }else{
                    const product = await Product.create({productname:name,productimage:image.url,startprice:startprice,currentprice:startprice,description:description,sellerid:sellerid});
                    await user.userproducts.push(product._id);
                    await user.save();
                    await product.save();
                    return res.status(201).json({meassage:"product created successfully",product:product});
                }
            }
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"error while adding product Internal server error"});
    }
}

export {
    addProduct
}