var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newabarrote",
});

conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexión exitosa");
  }
});

app.get("/", function (req, res) {
  res.send("Ruta de inicio");
});

app.get("/user", (req, res) => {
  conexion.query("SELECT * FROM user", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.post("/user", (req, res) => {
  console.log('paso por aca');
  let data = {
    usename: req.body.usename,
    useape: req.body.useape,
    usecelu: req.body.usecelu,
    emause: req.body.emause,
    usedir: req.body.usedir,
    usedni: req.body.usedni,
    pasuse: req.body.pasuse
  };
  let sql = "INSERT INTO user SET ?";
  conexion.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.post("/login", (req, res) => {
  
  let data = {
    usename: req.body.user,
    pass: req.body.pass,
  };
  let sql = "SELECT * FROM user WHERE emause='"+data.usename+"'";

  console.log('este es el user',data.usename);

  conexion.query(sql, (error, filas) => {
    if (error) {
      throw error;
    } else {

      try {

        console.log(filas[0].emause);
        console.log("el usuario si existe");

        var user = filas[0].emause;
        var pass = filas[0].pasuse;

        if(pass==data.pass){
          console.log("Se logeo correctamente");
        }else{
          console.log("La contraseña no coinciden")
        }
        
      
      } catch (err) {
        console.log("error no existe ese correo");

      }
    }
  });

});
const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});
