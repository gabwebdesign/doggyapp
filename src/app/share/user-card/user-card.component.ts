import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../models/users.model';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pets } from '../models/pets.model';
import { SecurityService } from '../../core/services/security.service';
import { AuthenticationService } from '../../core/services/authentication.service';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { PetsService } from 'src/app/core/services/data-services/pets.services';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'doggy-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit{
  @Input() user: Users;
  @Output() onUserSelected = new EventEmitter<Users>();
  @Output() onRefreshList = new EventEmitter<Users>();

  public newPet: Pets;
  public listPets: any;
  public closeResult: string;
  public submitted: boolean;
  public errorMsg: string = '';
  public userID;

  public plus = faPlus;

  constructor(private readonly modalService: NgbModal,
    private readonly securityService: SecurityService,
    private readonly authenticationService: AuthenticationService,
    private readonly petServices:PetsService
  ) { }

  ngOnInit(): void {
    this.newPet = new Pets();
    this.getAllPets(this.authenticationService.getLoggedUser().id);
  }

  public userSelected(user: Users): void {
    console.log(user.name)
    this.onUserSelected.emit(user);  
  }

  public getAllPets(userId:number):any{ 
    this.petServices.getUserPets(userId).subscribe(
      (result:Pets[])=>{
        this.listPets = result;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  
  public createModal(content: string):void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  public creatingPet(form): void{ 
    if (!form.valid) return
    this.submitted = true;
    this.userID = this.authenticationService.getLoggedUser().id;
    this.newPet.name = form.value.name;
    this.newPet.age = form.value.age;
    this.newPet.race = form.value.brace;
    //this.newPet = new Pets();

    this.petServices.creatingNewPet(this.userID, this.newPet).subscribe(
      (result) => { 
        //console.log(result);
        this.submitted = false;
        this.newPet.name = '';
        this.newPet.age = 0;
        this.newPet.race = '';
        this.getAllPets(this.userID)
        this.modalService.dismissAll();
      },
      (error) => { 
        console.log(error)
      }
    )
  }

  public petSelected(pet:Pets) { 
    console.log('Deleting', pet.id);
    this.petServices.deletePet(pet.id).subscribe();
    this.getAllPets(this.authenticationService.getLoggedUser().id)
  }

  public logOut(){
    this.authenticationService.logout();
  }

}
