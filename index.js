const express = require('express');
const port = 10001


const app = express();


app.get('/',(req,res)=>{
    res.json({

        message:"Welcome to the Project"
    })
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})