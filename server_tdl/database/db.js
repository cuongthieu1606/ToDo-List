import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI =
    `mongodb://${USERNAME}:${PASSWORD}@ac-761yw8x-shard-00-00.kqslcb6.mongodb.net:27017,ac-761yw8x-shard-00-01.kqslcb6.mongodb.net:27017,ac-761yw8x-shard-00-02.kqslcb6.mongodb.net:27017/?ssl=true&replicaSet=atlas-2xoam3-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database");
  });
};

export default Connection;
