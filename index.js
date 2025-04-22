require("dotenv").config();
const express = require('express')
const schoolRoutes = require('./routes/schoolRoutes.js')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', schoolRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})