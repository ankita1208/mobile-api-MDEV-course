import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/crsroutes.js";
import InitiateMongoServer from "./db.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
InitiateMongoServer();

routes(app);

app.get('/', (req, res) => res.send(`Node and express server is running on ${PORT}`));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
