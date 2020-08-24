import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateStarsService {

  constructor() { }

  public createStars(stars: number): string {
    let starsAll: string;
    let star = '<span class="star">★</span>'
    for (let i = 0; i <= stars; i++){
      starsAll += star;
    }
    return starsAll;
  }
}
