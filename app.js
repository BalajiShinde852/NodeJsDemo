const express = require("express");
const PORT = 8000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./router");
const cors = require("cors");

async function connect() {
  try {
    await mongoose.connect(process.env.MongoDB_url);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
dotenv.config();
connect();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
