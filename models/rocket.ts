class Rocket{
    name:string;
    engines:Engine[] = new Array();

    constructor(name:string){
        this.name = name;
    }
    
    addEngine(engine:Engine):void{
        this.engines.push(engine);
    }

}