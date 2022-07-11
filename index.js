import { GenerateOutput } from "./GenerateOutput.js";
import express from "express";
import * as http from "http";
import { Connection } from './connect.js';

const app = express();
const port = process.env.PORT || 3005
var server = http.createServer(app);
var conn = new Connection();

var output = new GenerateOutput();

console.log(port);


server.listen(port, () => {
    output.outputOverTime(5000)
  })

  app.get('/', (req, res) => {
    
    conn.select().then((result) => {res.json(result)})
  })


