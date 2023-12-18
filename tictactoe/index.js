const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});