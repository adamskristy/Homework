// load express
const express = require('express');

//create our app
const app = express();

//Identify our port
const port = 3000;

//define a route
app.get('/', (req, res) => {
res.send(`<h3>99 Bottles of Sweet Tea on the wall</h3> <a href="/98">Take one down, pass it around</a>`);
})


app.get("/:numOfBottles", (req, res) => {
    let bottles = req.params.numOfBottles;
if (bottles > 0) {
    res.send(`<h3>${bottles} Bottles of Sweet Tea on the wall</h3><a href ="/${bottles - 1}">Take one down, pass it around</a>`);
} else {
      res.send(`No more bottles of Sweet tea! <a href ="/">Please start over</a>`);
}
  });


//listen to port
app.listen(3000, () => {
    console.log('listening to port')
})

