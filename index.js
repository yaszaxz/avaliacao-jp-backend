const express = require("express")
const router = require("./src/routes/calculadora")

const app = express()

app.use(express.json())

app.use(router)

const porta = 3000

app.listen(porta, () => {
    console.log('Servidor está rodando na porta ')
})