import { json } from 'express/lib/response';
import fs from 'fs';
import { Connection } from './connect';

export class GenerateOutput{

    memory;
    counter = 0;

    conn = new Connection()

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }


    toString() { this.conn.insert(this.counter);  this.counter += 1;}

    toJSON() {return json(this.conn.select())}


}