import fs from 'fs';
import { Connection } from './connect.js';

export class GenerateOutput{

    memory;
    counter = 0;

    conn = new Connection()


    constructor(){
        this.conn.init();
        
    }

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }


    toString() { this.conn.insert(this.counter);  this.counter += 1;}

    async toJSON() { this.conn.select().then((result) => {return result;})}


}