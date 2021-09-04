const express = require('express');
const htmlRoutes = require('./routes/htmlRoute')
const apiRoutes = require('./routes/apiRoutes')

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));