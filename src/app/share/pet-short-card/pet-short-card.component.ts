import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Pets } from '../models/pets.model';

@Component({
  selector: 'doggy-pet-short-card',
  templateUrl: './pet-short-card.component.html',
  styleUrls: ['./pet-short-card.component.sass']
})
export class PetShortCardComponent implements OnInit {
  @Input() pet: Pets;
  @Output()  OnPetSelected = new EventEmitter<Pets>();

  constructor() { }

  ngOnInit(): void {
  }

  public petSelected(pet: Pets): void {
    this.OnPetSelected.emit(pet);
  }

}
