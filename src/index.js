import {app} from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js" ;
dotenv.config();

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on PORT ${process.env.PORT}`);
    });
}).catch((err)=>{
    console.log("Server failed to start",err);
});