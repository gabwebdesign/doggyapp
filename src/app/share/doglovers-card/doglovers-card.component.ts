import { Component, OnInit, Input } from '@angular/core';
import { DogLovers } from '../models/doglovers.model';

@Component({
  selector: 'doggy-doglovers-card',
  templateUrl: './doglovers-card.component.html',
  styleUrls: ['./doglovers-card.component.sass']
})
export class DogloversCardComponent implements OnInit {
  @Input() lover: DogLovers;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
