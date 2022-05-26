const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require('path');

//settings

app.set("port", process.env.PORT || 3000);//Si el servidor me da un puerto coge ese, si no coge el 3000;




//middlewares
app.use(morgan("dev"));//para que me de los datos de las peticiones por consola
app.use(express.json()); //para que entienda json
app.use(express.urlencoded({extended: false}));//Para que entienda formularios simples, inputs.
app.use(express.static(path.resolve(__dirname,'public')))//permitir acceso a los archivos estáticos


//routes
app.use(require('./back-end/routes/routes')); //importo las rutas

s


// starting server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})