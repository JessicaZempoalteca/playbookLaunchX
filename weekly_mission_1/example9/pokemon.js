class Pokemon{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`${this.name}: Hi, I'm ${this.name}`);
    }
    sayMessage(message){
        console.log(`${this.name}: ` + message + `\n`);
    }
}

module.exports = Pokemon;
