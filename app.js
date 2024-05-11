const express = require('express');
const PORT = 3005;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
)

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

app.listen(PORT, () => {
    console.log(`server is working on port: ${PORT}`)
})