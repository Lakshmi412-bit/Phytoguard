const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Home route
app.get("/", (req, res) => {
  res.send("Phytoguard Backend Running 🚀");
});

// Contact API route
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
 console.log(`Server running on port ${PORT}`);
});