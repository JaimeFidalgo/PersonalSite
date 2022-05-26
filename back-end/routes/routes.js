const express = require('express');
const router = express.Router(); //router() permite definir rutas. luego las exporto al index
const path = require('path');



router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));//dirname te da la ruta del archivo, el js (routes) en este caso . es util porque se trabaja con rutas absolutas
})

router.get('/resume', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/assets/vendor/pdf/Jaime_FIDALGO SANTOS_CV.pdf'));
})






module.exports = router;