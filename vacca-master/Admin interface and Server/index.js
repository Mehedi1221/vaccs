const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors')
const path = require('path');
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerjsDocs = YAML.load('./api.yaml')

const PORT = process.env.PORT || 5000;

const jobpostRoute = require('./routes/registeredperson')
const createvaccineRoute = require('./routes/vaccineinfo')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')


const app = express()
env.config();

mongoose.connect(`mongodb+srv://${process.env.M_DB_User}:${process.env.M_DB_Password}@cluster0.oi8bs.mongodb.net/${process.env.M_DB_Database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})


app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerjsDocs))


app.use('/api', jobpostRoute)
app.use('/api', createvaccineRoute)
app.use('/api', adminRoute)
app.use('/api', userRoute)


if (process.env.Node_ENV = "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}


app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})