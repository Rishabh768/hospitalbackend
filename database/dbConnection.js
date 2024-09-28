import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Hospital_Appoitment_System",
    })
    .then((res) => {
      console.log("Connected to database!",res.connection.host);
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
