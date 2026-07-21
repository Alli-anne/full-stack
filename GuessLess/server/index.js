var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');


var app = express();   

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/guessless');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
}); 

  app.get('/', (req, res) => {
    res.send('some message here');
  });

  app.use('/tasks', require('./routes/tasks'));
  app.use('/streak', require('./routes/streak'));

 

