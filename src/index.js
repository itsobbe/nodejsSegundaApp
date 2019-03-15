const express = require('express'); 
const app=express(); //funcion devuelve obj tipo express
const path = require('path'); //para evitarme problemas con rutas saber si estoy en windows,linux...

//settings 
//port to listen
app.set('port',3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile); // para utilizar archivos con extension html pero con motor plantilla

//middlewares

//routes
// app.get('/',(req,res,next)=>{
//     //res.send('Hello');
//     //res.sendFile(path.join(__dirname,'views/index.html'));
//     //res.render(path.join(__dirname,'views/index'));
//     //res.render('index'); //esto lo uso porqu he configurado para que conozca donde esta la carpeta views
//     res.render('index',{
//         title:"Mi titulo pasado por variable"
//     });
// })
app.use(require('./routes/index')); //puedes no poner index


//static files
app.use(express.static(path.join(__dirname,'public'))); //cualquier archivo que coloque aqui sera accesble por el navegador css,imagenes..



app.listen(app.get('port'),()=>{
    console.log('Working ')
});