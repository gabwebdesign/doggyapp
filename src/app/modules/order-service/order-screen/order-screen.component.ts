import { Component, OnInit } from '@angular/core';
import { DogloversService } from '../../../core/services/data-services/doglovers.services';
import { PetsService } from '../../../core/services/data-services/pets.services';
import { OrdersService } from '../../../core/services/data-services/orders.services';
import { DogLovers } from '../../../share/models/doglovers.model';
import { Pets } from 'src/app/share/models/pets.model';
import { Orders } from 'src/app/share/models/orders.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'doggy-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.sass']
})
export class OrderScreenComponent implements OnInit {
  
  public doglovers: DogLovers[];
  public pets:Pets[];
  private userID:number;

  public dogLoverSelected:DogLovers;
  private order:Orders;
  public petSelected:Pets;
  public submitted:boolean=false;

  public time:any;
  public meridian:boolean;
  public model: NgbDateStruct;

  public d = new Date();
  public h = this.d.getHours();
  public m = this.d.getMinutes();

  public initDogLovers:boolean=true;
  public initPets:boolean=true;

  constructor(
    private readonly loversServices:DogloversService,
    private readonly petsService:PetsService,
    private readonly authenticationService: AuthenticationService,
    private readonly orderServices:OrdersService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.gettingDogLovers();
    this.gettingPets();
    this.userID = this.authenticationService.userId;
    this.time = {hour: this.h, minute: this.m };
    (this.h> 12 ) ? this.meridian = false : this.meridian= true;
  }

  public gettingPets(){
    this.petsService.getUserPets(this.authenticationService.userId).subscribe(
      (result: Pets[])=>{
        //console.log('pets form oder screen component',result);
        this.pets = result;
        if(this.initPets){
          this.pets.map((pet)=>{
            this.petsService.desactivePet(pet.id).subscribe();
          });
          this.initPets =false;
        }
      }  
      )
  }

  public gettingDogLovers(): any { 
    this.loversServices.getDoglovers().subscribe(
      (result: DogLovers[]) => { 
        this.doglovers = result;
        if(this.initDogLovers){
          this.doglovers.map((lover)=>{
            this.loversServices.desactiveDogLover(lover.id).subscribe();
          });
          this.initDogLovers =false;
        }
      }
    )
  }

  public inParentDogLoverSelected(value:DogLovers):void{
    console.log('from parent', value);
    this.dogLoverSelected = value;
    this.desactiveAllDogLovers(value.id);
    this.loversServices.activeDogLover(value.id).subscribe(
      (result)=>{
        console.log(result);
        this.gettingDogLovers();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  public inParentPetSelected(value:Pets):void{
    console.log('from parent', value);
    this.petSelected = value;
    this.desactiveAllPets(value.id);
    this.petsService.activePet(value.id).subscribe(
      (result)=>{
        this.gettingPets();
      }
    )
  }

  public desactiveAllDogLovers(dogloverSelectedID:number){
    this.doglovers.map((lover)=>{
      if(lover.id != dogloverSelectedID) this.loversServices.desactiveDogLover(lover.id).subscribe();
    });
  }

  public desactiveAllPets(petID:number){
    this.pets.map((pet)=>{
      if(pet.id != petID) this.petsService.desactivePet(pet.id).subscribe();
    });
  }

  public onSubmit(userForm) {
    this.submitted = true;
    if(userForm.valid && this.dogLoverSelected != undefined && this.petSelected ){ 
      console.log("submitted");
    }else{ 
      console.log("form is invalid");
      return;
    }

    this.order = new Orders();
    this.order.time = `${this.time.hour}:${this.time.minute} ${ (this.time.hour > 12 ) ? 'pm' : 'am' } `;
    this.order.date = `${ this.d.getFullYear() }/${this.d.getMonth()}/${this.d.getDay()}`;
    this.order.dogLoverId = this.dogLoverSelected.id;
    this.order.dogloverName = this.dogLoverSelected.name;
    this.order.petId = this.petSelected.id;
    this.order.petName = this.petSelected.name;
    this.order.userId = this.userID;
    this.orderServices.makeOrders(this.order).subscribe(
      (result)=>{
        console.log(result);
        this.router.navigate(['/orders']);
      },
      (error)=>{
        console.log(error);
      }
    )
    //console.log(this.time);
    //console.log(this.dogLoverSelected);
    //console.log(this.petSelected);
  }

}
