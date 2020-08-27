import { Component, OnInit } from '@angular/core';
import { DogloversService } from '../../../core/services/data-services/doglovers.services';
import { DogLovers } from '../../../share/models/doglovers.model';

@Component({
  selector: 'doggy-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.sass']
})
export class OrderScreenComponent implements OnInit {
  
  public doglovers: DogLovers[];

  constructor(
    private readonly loversServices:DogloversService
  ) { }

  ngOnInit(): void {
    this.gettingDogLovers();
  }

  public gettingDogLovers(): any { 
    this.loversServices.getDoglovers().subscribe(
      (result: DogLovers[]) => { 
        this.doglovers = result;
        console.log(this.doglovers)
      }
    )
  }

}
