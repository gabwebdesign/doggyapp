export class Pets {

  constructor(
    public name?: string,
    public age?: number,
    public race?: string,
    public pathImages?:[],
    public id?: number,
    public stars?: number) { 
    
    this.stars = 5;

  }
}
