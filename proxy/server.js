const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./database/index');
const app = express();
const port = process.env.PORT || 3010;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/jane/player/:id', (req, res) => {
  const { id } = req.params;
  // res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
  db.songs.findByPk(id)
    .then((data) => { res.send(data).status(200); })
    .catch((error) => { res.send(error).status(500); });
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
