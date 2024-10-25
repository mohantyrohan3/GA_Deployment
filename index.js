const express = require('express');
const port = 10001


const app = express();


app.get('/',(req,res)=>{
    res.json({

        message:"Welcome to the Project"
    })
})


app.get('/get1' , (req,res)=>{
    res.json({
        message:"This is get1"
    })
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})