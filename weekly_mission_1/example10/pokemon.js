export default class Pokemon{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`${this.name}: Hi, I'm ${this.name}`);
    }
}