import express from 'express'
import db from './db/db.js';

//express serve para configurar o http

const app = express ()

//app.use é configurando o express
app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.json({message: 'Servidor rodando, eee'})
    // res.json('Servidor rodando!')
})

const HOST = 'localhost'
const PORT = '5000'

app.listen(PORT, () => {
    console.log(`Servidor rodando em: ${HOST}: ${PORT}`);
})