//crida als paquets que necessitem
const express = require('express'); //crida del framework Express
const cors=require('cors');//crida del paquet cors per a evitar l'error de CORS
const jwt=require ('jsonwebtoken');//crida al paquet que fa possible a Node la creació i gestió de JWT
const mysql = require('mysql');//crida del paquet per poder connectar-nos a mysql des de Node

const app = express();//càrrega del framework


const accessTokenSecret="67463fghfgh43473";

//cadena de connexió per poder connectar-nos a la nostra BD
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'project_upc_angular',
  user: 'root',
  password: ''
});


app.use(cors());//apliquem el paquet cors per a tots els recursos

app.use(express.json());//treballem amb JSONs

app.use(express.urlencoded({extended: true}));
//per a la vista

//app.use('/', express.static(__dirname + '/public/'));

//comprovació que és usuari amb token, només en les rutes que necessitem
const authenticateJWT = (req, res, next) => {
  //console.log("Estic a authenticateJWT");
  const authHeader = req.headers.authorization;
  //console.log(authHeader);
      if (authHeader) {
          const token = authHeader.split(' ')[1];

          jwt.verify(token, accessTokenSecret, (err, user) => {
              if (err) {
                  console.log(err)
                  return res.sendStatus(403);
              }

              req.user = user;//recollo les dades de la part que jo he enviat
              next();
          });
      } else {
          res.json({error:true,data:"Permís denegat al servidor"});
      }
};


//per a la crida al recurs /
app.get('/', (req,res) => {
  res.send('Hello to my web');
  //res.sendFile(process.cwd()+"/view/index.html"); //angular dins del servidor
});

//recurs per a loguejar-se
app.post('/login', function (req, res) {

  //recullo l'usuari
  let usuari=req.body.usuari;
  console.log(usuari);

  //recullo la contrasenya
  let contrasenya=req.body.contrasenya;
  console.log(contrasenya);

  //ens connectem a la BD declara a la cadena de connexió de dalt
  connection.connect(function(error) {
    if (error) {
        console.error('Error connecting: ' + error.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
  });

  //creem l'SQL per poder fer la consulta preparada
  var sql = 'SELECT * FROM usuaris WHERE usuari=? and contrasenya=?';

  //fem la consulta
  connection.query(sql,[usuari, contrasenya],function(error, result){
    if (error!=null){ //si existeix un MySql error
      res.json({error:true, data:'Problemes amb el servidor'});

    }
    else{//si tot OK
       console.log(result[0]);
      if(result[0]!=undefined){
        const accessToken = jwt.sign({dni: result[0].dni,  role: result[0].role }, accessTokenSecret,{ expiresIn: '20m' });

        //enviem la token
        res.json({error:false, data:accessToken});
      }else{
        res.json({error:true, data:'Credencials incorrectes'});
      }

    }

  });


})//end recurs /login


app.get('/events', (req, res) => {

// Realiza una consulta SQL para obtener las ciudades desde la base de datos
connection.query('SELECT * FROM events', function (error, results) {
  // Manejo de errores
  if (error) {
      // mostramos por consola el error
      console.error('Error en la consulta de autenticación:', error.message);

      // Si a habido un error en la consulta
      // Enviamos una respuesta con un código de estado 500 ("Internal Server Error" (Error interno del servidor)) y un objeto JSON con:
      // un booleno de error a true, un array de resultats a null i enviamos un mensage de error
      res.status(500).json({
          error: true,
          results: null,
          message: "Error en la autenticación"
      });
  } else {

      //let id = results.map(results => results.id);
      //let id=results[0].id;

      // Si no a habido ningun error
      // Enviamos una respuesta con un código de estado 200 (OK) y un objeto JSON con:
      // un booleno de error a false, un array de resultats con el array de todas ciudades i enviamos un mensage satisfactorio
      res.status(200).json({
          error: false,
          //id: id,
          results:results,
          message: "Datos recojidos correctamente"
      });

  }
});

}); //end recurs /allUsers




app.post('/events/add', function (req, res) {
  // extraemos los valores del cuerpo de la solicitud (req.body). Estos valores se envían desde el cliente como parte de la solicitud POST
  const {nombre, descripcion, fecha, hora, creado_por } = req.body;

  console.log("dgdgrd"+creado_por);

  // Realiza una consulta SQL para insertar nuevos datos en la base de datos
  connection.query(
  'INSERT INTO events (nombre, descripcion, fecha, hora, creado_por) VALUES (?, ?, ?, ?, ?)',
  [nombre, descripcion, fecha, hora, creado_por],
  function (error, results) {
  // Manejo de errores
  if (error) {
  // mostramos por consola el error
  console.error('Error en la inserción en la base de datos:', error.message);

  // Si a habido un error en la consulta
  // Enviamos una respuesta con un código de estado 400 ("Bad Request" (Solicitud incorrecta)) y un objeto JSON con:
  // un booleno de error a true, un array de resultats a null i enviamos un mensage de error
  res.status(400).json({
  error: true,
  results: null,
  message: "Error en la inserción en la base de datos"
  });
  } else {
  // Si no a habido ningun error
  // Enviamos una respuesta con un código de estado 200 (OK) y un objeto JSON con:
  // un booleno de error a false, un array de resultats con los resultados i enviamos un mensage satisfactorio

    console.log();


  res.status(200).json({
  error: false,
  results: results,
  message: "Datos insertados correctamente"
  });
  }
  }
  );
  });



  app.put('/events/:id', function (req, res) {
    const { id } = req.params;
    const { nombre, descripcion, fecha, hora, creado_por } = req.body;

    const sql = 'UPDATE events SET nombre = ?, descripcion = ?, fecha = ?, hora = ?, creado_por = ? WHERE id = ?';

    connection.query(sql, [nombre, descripcion, fecha, hora, creado_por, id], function (error, results) {
        if (error) {
            console.error('Error al actualizar el evento:', error.message);
            res.status(400).json({
                error: true,
                message: "Error al actualizar el evento"
            });
        } else {
            res.status(200).json({
                error: false,
                results: results,
                message: "Evento actualizado correctamente"
            });
        }
    });
});



app.delete('/events/:id', function (req, res) {
  const { id } = req.params;

  const sql = 'DELETE FROM events WHERE id = ?';

  connection.query(sql, [id], function (error, results) {
      if (error) {
          console.error('Error al eliminar el evento:', error.message);
          res.status(400).json({
              error: true,
              message: "Error al eliminar el evento"
          });
      } else {
          res.status(200).json({
              error: false,
              results: results,
              message: "Evento eliminado correctamente"
          });
      }
  });
});




app.listen(3000, () => {
    console.log("Aquesta és la nostra web node express pel port 3000!!");
})
