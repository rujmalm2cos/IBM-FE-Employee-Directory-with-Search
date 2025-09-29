// server.js 
const express = require("express"); 
const app = express(); 

const employees = [ 
  { id: "E101", name: "John Doe", role: "Software Engineer", department: "IT", email: "john.doe@company.com", phone: "+91 9876543210" }, 
  { id: "E102", name: "Priya Sharma", role: "HR Manager", department: "HR", email: "priya@company.com", phone: "+91 9123456780" } 
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(5000, () => console.log("Server running on port 5000"));
