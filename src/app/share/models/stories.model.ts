export class Stories {
  id:number
  title: string;
  summary: string;
  time: string;
  author: string;
  profileImage: string;
  imagePath: string;
  
  constructor(stories?: Partial<Stories>) { 
    Object.assign(this, stories);
  }
}