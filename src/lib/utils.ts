import { type ClassValue, clsx } from "clsx"
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const connection:{
  isConnected:any
} = {
  isConnected: false
};

export const connectToDB = async () => {
  try {
    if(connection.isConnected){
      console.log("Already connected to database");
      return;
    }
    
   const db= await mongoose.connect(process.env.MONGO!);
   connection.isConnected = db.connections[0].readyState;
  }catch(err){
    console.log(err);
    throw new Error("Failed to connect to database");
  }
}