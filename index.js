import express from 'express';
import bodyParser from 'body-parser';
import spamRouter from './routes/spamRoute.js';
import * as dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', spamRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
