import { GenerateOutput } from "./GenerateOutput.js";
import express from "express";
import * as http from "http";

const app = express();
const port = process.env.PORT || 3002
var server = http.createServer(app);

var output = new GenerateOutput();


server.listen(port, () => {
    output.outputOverTime(5000)
  })

  app.get('/', (req, res) => {
    res.json({
        output
    })
  })


