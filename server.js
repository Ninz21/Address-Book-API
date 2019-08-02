const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const app1 = require('./app');
const app = express();
const http = require('http');
const mongoose = require('mongoose');



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use(cors());



// app.get('/', async function(req,res)
// {
//   console.log(database.db)
//    const results = await database.db.collection('records')
//       .find({

//       }) 
//       .toArray(); 
// return res.json(results);
// });
require('./api/routes/records.js')(app);


const server = http.createServer(app);
const port = process.env.PORT || 4000;

server.listen(port);


  // if(err){
  //   console.log("Error while starting the server!")

  // }
  //   console.log("Listening to port 4000!")


