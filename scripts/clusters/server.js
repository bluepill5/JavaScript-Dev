import express, { json, urlencoded } from "express";
import cluster from "cluster";
import os from "os";

const numCPUs = os.cpus().length;

/* -------------- Se va preguntar si es un nodo maestro o hijo -------------- */
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();        
    }
    cluster.on('exit', (worker, code, signal) => {
       console.log(`worker ${worker.process.pid} died`);
       cluster.fork();
    });
} else {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.get('/', (req, res) => {
      console.log(`Procesadores ${numCPUs}, PID - ${process.pid}`);
      res.send(`Procesadores ${numCPUs}, PID - ${process.pid}`);
  });

  const PORT = process.argv[2];
  const server = app.listen(PORT, () => {
    console.log(
      `🔥 Servidor escuchando con Express en puerto http://localhost:${PORT} - PID ${process.pid}`
    );
  });

  server.on("error", (err) => {
    console.log(err);
  });
}
