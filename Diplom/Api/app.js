const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
});
const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(req.file)
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});