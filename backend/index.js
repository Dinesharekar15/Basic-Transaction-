const express = require("express");
const connectDb=require('../backend/config/Db');
const userRoutes=require('./Routes/userRoutes');
const cors=require("cors")


const app=express();
connectDb();
app.use(cors())
app.use(express.json()); 
// 

app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





