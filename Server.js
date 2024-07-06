/*const express=require('express')
const app=express()
app.get('/',function(req,res){
    console.log("server has started");
    res.send("this is my express program")
})
app.listen(8085)*/

const express=require('express')
const app=express()
app.get('/profile/:username',function(req,res)
{
    res.send(`the profile is of ${req.params.username}`)
})
app.listen(8085)

