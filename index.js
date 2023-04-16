const express = require('express')
const app = expres()
const PORT = 8080

app.use(express.json())

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))