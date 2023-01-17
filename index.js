const express = require('express');
const cors = require('cors');
const port = 80;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('way to go');
});

app.listen(port, () => console.log('listening on port 8080'));