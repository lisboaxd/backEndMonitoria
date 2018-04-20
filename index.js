var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));

const monitoringRoute = require('./modules/monitoring/monitoringRoute');
const adminRoute = require('./modules/admin/adminRoute');

app.use(bodyParser.json());

app.use('/api', monitoringRoute);
app.use('/api', adminRoute);

app.get('/', function (req, res) {
  res.status(200).send('Una Monitoria!');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Servidor OK!! http://localhost:3000/ ');
});
