const express = require('express');

const infoRouter = express.Router();

infoRouter.get('/', (req, res)=>{
    res.json({
        ArgumentosDeEntrada: process.argv,
        NombreDeLaPlataforma: process.platform,
        VersionDeNode: process.version,
        MemoriaTotalReservada: process.memoryUsage(),
        PathDeEjecucion: process.execPath,
        ProcessId: process.pid,
        CarpetaDelProyecto: process.cwd()
    })
});

module.exports = infoRouter;