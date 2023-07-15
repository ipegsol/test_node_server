

//https://github.com/Automattic/mongoose/issues/2359
//person become people
//// Disable the option:
//var person = Schema({}, {pluralize: false});

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
      "mongodb://127.0.0.1:27017/Company"
    );
    app.listen(3003, () => console.log("Server started on port 3003"));
  } catch (error) {
    console.error(error);
  }
};

start();
