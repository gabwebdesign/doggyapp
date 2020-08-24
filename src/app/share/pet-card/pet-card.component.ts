import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pets } from '../models/pets.model';

@Component({
  selector: 'doggy-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.sass']
})
export class PetCardComponent implements OnInit {
  @Input() pet: Pets;
  @Output()  OnPetSelected = new EventEmitter<Pets>();

  constructor() { }

  ngOnInit(): void {
  }
  public petSelected(pet: Pets): void {
    this.OnPetSelected.emit(pet);
  }

}
