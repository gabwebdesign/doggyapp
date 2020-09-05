import { Component, OnInit, Input } from '@angular/core';
import { Stories } from '../../../share/models/stories.model';


@Component({
  selector: 'doggy-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {
  @Input() story: Stories;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
