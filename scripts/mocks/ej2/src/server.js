import express, { json, urlencoded } from 'express';
import { faker } from '@faker-js/faker'; 

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/test/:n", (req, res) => {
  let str = "Nombre,Apellido,Email,Trabajo,Direccion\r\n";
  let { n } = req.params;
  const users = [];

  for (let i = 0; i < n; i++) {
      let user = {
          i: i + 1,
          name: faker.name.findName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          job_title: faker.name.jobTitle(),
          addres: faker.address.streetAddress(),
      }
      users.push(user);
  }
  res.status(200).json(users);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`🔥 Servidor escuchando con Express en puerto http://localhost:8080`);
});

server.on('error', (err) => {
console.log(err);
});