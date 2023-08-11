const express=require("express")
const app = express()
const PORT=3131

app.get("/",(req,res)=>{
    let random=Math.floor(Math.random()*300)
    let MyNumber=random-Math.floor(Math.random()*random)
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <h3>${MyNumber} little bugs</h3>
    <a href=/98>take one down, pass it around</a>
    <p>Patch it around</p>
    <h3>${random} bugs in the code</h3>
    `)
})
app.get("/:id",(req,res)=>{
    let random=Math.floor(Math.random()*300)
    let MyNumber=random-Math.floor(Math.random()*random)
    if (req.params.id=="0"){
        res.send(`<h1>${req.params.id} Bottles of beer on the wall</h1>
        <h3>${MyNumber} little bugs</h3>
        <a href=/>start over</a>
        <p>Patch it around</p>
        <h3>${random} bugs in the code</h3>
        `)
    }else if (req.params.id<=99 && req.params.id>0){
    res.send(`<h1>${req.params.id} Bottles of beer on the wall</h1>
    <h3>${MyNumber} little bugs</h3>
    <a href=/${req.params.id-1}>take one down, pass it around</a>
    <p>Patch it around</p>
    <h3>${random} bugs in the code</h3>
    `)
    }else{
        res.redirect("/")
    }
})
app.listen(PORT,()=>{
    console.log("the Port is "+PORT)
})