const express = require('express'); 
const { get } = require('http');
const app = express();

app.use(express.json());


const apps = [
    {
        id: 1,
        titulo: "The Stocks.",
        descripcion: "blvallablvvalvalva",
        link: "https://awds.com"
    },
    {
        id: 2,
        titulo: "The Stocks.",
        descripcion: "blvallablvvalvalva",
        link: "https://awds.com"
        
    },
    {
        id: 3,
        titulo: "The Stocks.",
        descripcion: "blvallablvvalvalva",
        link: "https://awds.com"
        
    }
]


app.get('/hola', (req, res) => {
    res.send(apps);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});


