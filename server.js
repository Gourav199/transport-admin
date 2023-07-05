const express = require("express")
const mysql = require('mysql')
const cors  = require('cors')


const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())

const connection  = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:'signup'
})

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});



app.post('/register', (req,res)=>{
    //console.log('reqqqqqq', req.body);
    const sql = "Insert INTO lrdetails(`id`,`lr`,`description`,`quantity`,`arrival`,`destination`,`date`,`vechicle`,`status`,`consiner`,`Consignee`) value (Null,'"+req.body.lrNumber+ "','"+req.body.description +"','"+req.body.quantity +"','"+req.body.from +"','"+req.body.to+ "','"+req.body.date+ "','"+req.body.vechicle+ "','"+req.body.status+ "','"+req.body.consiner+ "','"+req.body.consignee+ "')";
    //console.log(sql);

    connection.query(sql,(err,results) =>{
        //console.log("userCreated");
        if (err) {
            console.log("userCreated1");
            console.error('Error executing MySQL query:', err);
            console.log(err);
            //return results.json("registration failed");
          } else {
            // console.log(results);
            // results.message='userCreated2';
            // console.log(results);
             console.log("userCreated2");
            return  res.json("Generated Lr")
            //return results.json('User created successfully' );
          }
    })    

})

app.post('/login',(req,res) =>{
    //console.log('res',res.body);
    const sql = "SELECT * FROM `adminlogin` WHERE `email`='"+req.body.username + "' AND `password` ='" +req.body.password + "'";
    console.log("req/////",sql);
   
    connection.query(sql,(err,data) =>{
        if(err) {
            console.log("errorrrrrrrrrr");
            return res.json("Login Failed");}
        if(data.length>0) {
            console.log("successfullllllllllll");
            return res.json("login successful ")
        }else{
           console.log('no records foundddddddd')
            return res.json("No record found ")
        }
    })      
}) 

app.get('/viewlr',(req,res) =>{
 const sql = "SELECT * FROM lrdetails"
 connection.query(sql, (err, rows) => {
    // Release the connection back to the pool
    //connection.release();

    if (err) {
      console.error('Error executing query:', err);
      return;
    }

    // Process the fetched rows
    res.send(rows)
    console.log('Fetched rows:', rows);
  });
 console.log(sql);
})

app.post('/checklrstatus',(req,res) => {
    const sql = "SELECT `status`, `vechicle` FROM `lrdetails`  where `lr` ='"+ req.body.lr +"'";
    //console.log(sql);
    connection.query(sql,(err,data) =>{
        if(err) {
            console.log("errorrrrrrrrrr");
            return res.json("data didnot fetch");}
        if(data.length>0) {
            //console.log('succesful');
            console.log(data[0].vechicle)
            return res.json({ status: data[0].status,vechicle:data[0].vechicle });
            //console.log("successfullllllllllll", res.data);
            //return data.json
            //return res.json("data fetch ")
        }else{
           console.log('no records foundddddddd')
            return res.json("No record found ")
        }
    })   
})
app.post('/changelrstatus', (req,res) =>{
   const sql  = "Update `lrdetails` Set `status` = '"+req.body.selectedOption +"' where `lr` = '"+req.body.lrNumber+"'";
   console.log(req.body)
   connection.query(sql,(err,data) =>{
    if (err) {
       // console.log("userCreated1");
        console.error('Error executing MySQL query:', err);
        console.log(err);
        //return results.json("registration failed");
      } else {
        // console.log(results);
        // results.message='userCreated2';
        // console.log(results);
         console.log("userCreated2");
        return  res.json("User created successfully")
        //return results.json('User created successfully' );
      }
})  
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});