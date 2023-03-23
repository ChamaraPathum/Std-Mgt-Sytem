const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var connection = require("./db");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/student", (req, res) => {
  connection.query(
    "INSERT INTO student VALUES(?,?,?,?)",
    [req.body.id, req.body.name, req.body.address, req.body.email],
    (err, rows) => {
      console.log('====================================');
      console.log("post");
      console.log('====================================');
      if (err) throw err;
      res.json(rows);
     }
  );
});

// app.post("/student", (req, res) => {
//   connection.query(
//     "INSERT INTO student (id,name,address,email) VALUES(?,?,?,?)",
//     [req.body.id, req.body.name, req.body.address, req.body.email],
//     (err, rows) => {
//       if (err) throw err;
//       res.json(rows);
//       // console.log("post");
//     }
//   );
// });

app.put("/student/:id", (req, res) => {
  connection.query(
    "UPDATE student set name=?,address=?,email=? where id=?",
    [req.body.name, req.body.address, req.body.email, req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.delete("/student/:id", (req, res) => {
  connection.query(
    "DELETE from student WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.get("/student/:id", (req, res) => {
  connection.query(
    "SELECT name,address,email from student where id=?",
    [req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`student app listening on port ${port}`);
});
