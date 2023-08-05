const express = require('express');
const app = express();
const router  = require('./route');
const cors=require('cors')
app.use(express.json());
app.use(cors());
app.use('/email', router);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
