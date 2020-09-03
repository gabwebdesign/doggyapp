export class Orders {
    id:number
    dogLoverId: number;
    petId:number;
    time: string;
    date:string;
    userId: number;
    petName:string;
    dogloverName:string;

    constructor(orders?: Partial<Orders>) { 
      Object.assign(this, orders);
    }
  }