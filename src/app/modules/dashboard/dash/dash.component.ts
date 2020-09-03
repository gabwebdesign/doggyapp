import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { StoriesService } from 'src/app/core/services/data-services/stories.service';
import { Stories } from 'src/app/share/models/stories.model';
import { DogloversService } from 'src/app/core/services/data-services/doglovers.services';
import { DogLovers } from 'src/app/share/models/doglovers.model';

@Component({
  selector: 'doggy-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
  public stories: Stories[];
  private dogLovers: DogLovers[];

  constructor(
    private petService: SecurityService,
    private readonly storyServices:StoriesService,
    private readonly dogLoverService:DogloversService
  ) {}

  ngOnInit(): void {
    this.gettingStories();
    //this.gettingDogLovers();
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
