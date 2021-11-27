const express=require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','pug');


/*app.get('/',(req,res)=>{
    res.send('hola mundo');
});*/
app.get('/',(req,res)=>{
    res.render('index',{})
});


app.listen(4000, () =>{
    console.log('Funciona!!!');
});