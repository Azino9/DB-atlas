const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

app.use(express.static('static'));
const db = async() => {
  try{
    await mongoose.connect('mongodb+srv://mohitodomain:88347317@cluster0.i3hea.mongodb.net/Clusters?retryWrites=true&w=majority&appName=Cluster0')
    .then (res => console.log("connected to DB"))
    .catch (e => console.log("Unexpected error occured"))
  }
  catch(e){
    console.log(e);
  }
}
db()
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
