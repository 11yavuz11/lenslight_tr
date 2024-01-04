import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';

dotenv.config();

// DB connection
conn();

const app = express();
const port = process.env.PORT;


// Static files middleware
app.use(express.static('public'));

// ejs template engine
app.set('view engine', 'ejs');


// Routes
app.use('/', pageRoute);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

