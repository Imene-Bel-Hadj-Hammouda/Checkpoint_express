const express = require("express");
const app = express();
const path = require("path");

function between(x, min, max) {
  return x >= min && x <= max;
}
const workingHours = (req, res, next) => {
  let d = new Date(Date.now());
  if ( between(d.getDay(), 1, 6) && between(d.getHours(), 9, 17) ) {
  next();
  }
};
app.use(workingHours);
app.use(express.static(path.join(__dirname, "views")));

app.listen(4000);