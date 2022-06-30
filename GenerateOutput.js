import fs from 'fs';

export class GenerateOutput{

    memory;
    counter = 0;

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }


    toString() {console.log('Ping / Pongs: '+this.counter); this.counter += 1; fs.appendFileSync('file/output.txt', 'Ping / Pongs: '+this.counter+'\n');}

    toJSON() {return ['Ping / Pongs:', this.counter]}


}