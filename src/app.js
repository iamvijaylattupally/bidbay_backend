import express from "express";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";

//use routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);

export {app}
