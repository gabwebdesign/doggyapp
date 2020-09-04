import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { StoriesService } from 'src/app/core/services/data-services/stories.service';
import { Stories } from 'src/app/share/models/stories.model';
import { DogloversService } from 'src/app/core/services/data-services/doglovers.services';
import { DogLovers } from 'src/app/share/models/doglovers.model';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { PermissionsService } from '../../../core/services/permissions/permissions.services';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'doggy-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
  public stories: Stories[];
  public plus = faPlus;
  private dogLovers: DogLovers[];
  public roles:string;
  public story:Stories = new Stories();
  public submitted: boolean;

  constructor(
    private petService: SecurityService,
    private readonly storyServices:StoriesService,
    private readonly dogLoverService:DogloversService,
    public permissionsServices:PermissionsService,
    private readonly authenticationServices:AuthenticationService,
    private securityServices:SecurityService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.gettingStories();
    //this.gettingDogLovers();
    //console.log(this.permissionsServices.hasRole('user'));
    this.roles = this.authenticationServices.getLoggedUser().roles;
  }

  public gettingStories(): void { 
    this.storyServices.getStories().subscribe(
      (result: Stories[]) => { 
        this.stories = result;
        console.log('stories ', this.stories)
      },
      (error) => {
        console.error(error);
      }
    )
  }


  public createModal(content: string):void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  public creatingStory(form):void{
    this.submitted = true;
    if (!form.valid) return
  }

  // public gettingDogLovers():void{
  //   this.dogLoverService.getDoglovers().subscribe(
  //     (result:DogLovers[])=>{
  //       this.dogLovers = result;
  //       this.dogLovers.map((lover)=>{
  //         this.dogLoverService.desactiveDogLover(lover.id).subscribe();
  //       });
  //     }
  //   )
  // }

}
