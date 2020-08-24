import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { StoriesService } from 'src/app/core/services/data-services/stories.service';
import { Stories } from 'src/app/share/models/stories.model';

@Component({
  selector: 'doggy-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
  public stories: Stories[];

  constructor(
    private petService: SecurityService,
    private readonly storyServices:StoriesService
  ) {}

  ngOnInit(): void {
    this.gettingStories();
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

}
