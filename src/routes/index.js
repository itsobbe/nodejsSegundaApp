//archivo para rutas
const express = require('express'); 
const router=express.Router();

router.get('/',(req,res,next)=>{
    //res.send('Hello');
    //res.sendFile(path.join(__dirname,'views/index.html'));
    //res.render(path.join(__dirname,'views/index'));
    //res.render('index'); //esto lo uso porqu he configurado para que conozca donde esta la carpeta views
    res.render('index.html',{
        title:"Mi titulo pasado por variable"
    });
})

router.get('/contact',(req,res)=>{
    res.render('contact.html',{
        title:"My contact page var pasado por variable"
    });
})

module.exports=router;