const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html><html><head></head><body><h1>Primera Página con el framework express</h1>
    <br> Ya estoy aprendiendo un poco más JS del lado del servidor</body></html>`)
})

app.listen(8000, () => {
    console.log('Servidor iniciado')
})

