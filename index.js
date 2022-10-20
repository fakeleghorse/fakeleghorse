const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = process.env.PORT || 4000;  

// node code 


app.get('/', (req, res) => {
    res.send('<div style="width:100%;height: 100vh; display:flex;justify-content:center;align-items:center;background-color:black"><h1 style="color:white">fakeleghorse</h1><div>')
})
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});