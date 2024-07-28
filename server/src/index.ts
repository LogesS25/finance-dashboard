import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://sivalog25:QgiV5ZZ0ypGibgHg@financedashboard.d4zd5hg.mongodb.net/?retryWrites=true&w=majority&appName=financeDashboard";

mongoose.connect(mongoURI).then(()=>console.log("CONNECTED TO MONGODB")).catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);


app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });