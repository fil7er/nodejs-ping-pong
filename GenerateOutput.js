export class GenerateOutput{

    memory;
    counter = 0;

    outputOverTime(time){
        setInterval(() => this.toString(), time);
    }


    toString() {console.log('pong '+this.counter); this.counter += 1;}

    toJSON() {return ['pong', this.counter]}


}