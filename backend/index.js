if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} 

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
require('./database');

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/usuario', require('./routes/usuario'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});