import { Component, OnInit } from '@angular/core';
import { DogloversService } from '../../../core/services/data-services/doglovers.services';
import { PetsService } from '../../../core/services/data-services/pets.services';
import { DogLovers } from '../../../share/models/doglovers.model';
import { Pets } from 'src/app/share/models/pets.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'doggy-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.sass']
})
export class OrderScreenComponent implements OnInit {
  
  public doglovers: DogLovers[];
  public pets:Pets[];

  constructor(
    private readonly loversServices:DogloversService,
    private readonly petsService:PetsService,
    private readonly authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.gettingDogLovers();
    this.gettingPets();
  }

  public gettingPets(){
    this.petsService.getUserPets(this.authenticationService.userId).subscribe(
      (result: Pets[])=>{
        console.log('pets form oder screen component',result);
        this.pets = result;
      }  
      )
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
