import { Component, OnInit, Input } from '@angular/core';
import { Stories } from 'src/app/share/models/stories.model';

@Component({
  selector: 'doggy-modal-stories',
  templateUrl: './modal-stories.component.html',
  styleUrls: ['./modal-stories.component.sass']
})
export class ModalStoriesComponent implements OnInit {
  @Input() story: Stories;

  constructor() { }

  ngOnInit(): void {
  }

}
