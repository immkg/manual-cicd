const express = require("express");
var shell = require("shelljs");

const app = express();
const port = 4000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/pull", (req, res) => {
  var pull = shell.exec("bash pull.sh");
  if (pull.code == 1) {
    res.send(pull.stdout);
  } else {
    res.send(pull.stderr);
  }
});
app.get("/end", (req, res) => {
  var end = shell.exec("bash end.sh");
  if (end.code == 1) {
    res.send(end.stdout);
  } else {
    res.send(end.stderr);
  }
});
app.get("/start", (req, res) => {
  var start = shell.exec("bash start.sh");
  if (start.code == 1) {
    res.send(start.stdout);
  } else {
    res.send(start.stderr);
  }
  //   startChild.stdout.on("data", function(data) {
  //     res.write(data);
  //   });
  //   startChild.stderr.on("data", function(data) {
  //     res.write(data);
  //   });
});
app.get("/restart", (req, res) => {
  var restart = shell.exec("bash restart.sh");
  if (restart.code == 1) {
    res.send(restart.stdout);
  } else {
    res.send(restart.stderr);
  }
});
app.get("/update", (req, res) => {
  var update = shell.exec("bash update.sh");
  if (update.code == 1) {
    res.send(update.stdout);
  } else {
    res.send(update.stderr);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
