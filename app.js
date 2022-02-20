const express = require('express')
const app = express()



// Views egine
app.set('view engine', 'ejs')
app.use('/styles', express.static(__dirname + '/styles'))
app.use('/assets', express.static(__dirname + '/assets'))

// Rotas
app.get('/',(req, res)=>{
    res.render('index');
});

app.get('/about-me',(req, res)=>{

});

app.get('/portfolio',(req, res)=>{
    
});

app.get('/projects',(req, res)=>{
   
});

//Caso a url não exista
app.use((req, res)=>{
    res.render('404')
})

app.listen(3001)