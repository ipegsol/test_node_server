
var express = require('express');
var app = express();

var mongoose = require('mongoose');

var empSchema = mongoose.Schema({
    fullname: String,
    gender: String,
    city: String
 });
var Employees = mongoose.model("Employees", empSchema);



app.get('/', function (req, res) {
   res.send('<h1>Hello World. Access /db to check MongoDB</h1>');
})


app.get('/db',  async (req, res)=>{

  //INSERT
  const newEmp = new Employees({  fullname: "John", gender: "Male", city: "London" });
  const insertedEmp = await newEmp.save();
  
  //SELECT
   const response = await Employees.find();
   res.send(response);
   console.log(response);
 });
 

const start = async () => {
  try {
    await mongoose.connect(
      //"mongodb://127.0.0.1:27017/Company"
      "mongodb+srv://ipegsolutions:GtKdjiFQMUZz7nua@cluster0.o6xtbhj.mongodb.net/"
    );
    app.listen(3003, () => console.log("Server started on port 3003"));
  } catch (error) {
    console.error(error);
  }
};

start();
