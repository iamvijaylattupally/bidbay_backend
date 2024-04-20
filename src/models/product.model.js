import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productname:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        productimage:{
            type:String,
        },
        status:{
            type:Boolean,
            default:true
        },
        startprice:{
            type:Number,
            required:true
        },
        currentprice:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        sellerid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        bids:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Bid"
            }
        ]
    },{timestamps:true}
)

const Product = mongoose.model("Product", productSchema);
export default Product;