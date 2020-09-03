export class Pets {

  constructor(
    public name?: string,
    public age?: number,
    public race?: string,
    public pathImages?:[],
    public id?: number,
    public stars?: number,
    public active?: boolean) { 
    
    this.stars = 5;
    this.active = false;
  }
}
