const express = require('express');
const app = express()
const PORT = 3606

app.use(express.json())

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))