import express from 'express'

const app = express();

// Carpeta Pública
app.use( express.static('public'));

app.get('', (req, res)=>{
    res.render('index.html')
})

app.listen('3000', () => {
    console.log('El servidor esta funcionando en el puerto 3000');
});