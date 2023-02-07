import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
const PORT=3000;
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hey developer")
})
app.listen(PORT,console.log(`The server has started on port ${PORT}`));