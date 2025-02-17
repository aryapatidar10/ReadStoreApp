import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
const URI = process.env.MongoDBURI;
=======
// const URI = process.env.MongoDBURI;
const URI = "mongodb+srv://aryapatidar:2345@cluster0.u0c0fho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
>>>>>>> 460338ae74743b282e0e61e603ea6a5d528fc3b2

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
//deploying
// if(process.env.NODE_ENV === "production")
//     {
//         const dirPath = path.resolve();
//         app.use(express.static("Frontend/dist"))
//         app.get("*" ,(req,res) =>{
//             res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"));
//         })
//     }

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

if(process.env.NODE_ENV === "production")
    {
        const dirPath = path.resolve();
        app.use(express.static("Frontend/dist"));
        app.get("*",(req,res) => {
            res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"));
    })
    }

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
