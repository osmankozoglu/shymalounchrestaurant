const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const mailRouter = require('./routes/sendMail')



const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/",(req,res)=>{
  res.send("Server is running.")
})

app.all("*", mailRouter);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
