import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Route from './routes/route.js';


const app = express();

app.use(cors());

app.use(bodyParser.json({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Route);

Connection();

const PORT = 8080;
app.listen(PORT, () =>console.log(`server is runnning successfully on Port ${PORT}`))