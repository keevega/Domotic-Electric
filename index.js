import express from 'express'

const app = express();

// Carpeta Pública
app.use( express.static('public'));

app.get('', (req, res)=>{
    res.render('index.html')
})

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});