import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from '../share/pet-card/pet-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { StarToNumbers } from './pipes/star-to-numbers.pipe';
import { AgePipe } from './pipes/age.pipe';
import { BarRatingModule } from "ngx-bar-rating";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetCardComponent, UserCardComponent, StarToNumbers, AgePipe, NgbCarouselComponent],
  imports: [ CommonModule,BarRatingModule,SweetAlert2Module,NgbCarouselModule,FormsModule],
  exports: [
    CommonModule,
    PetCardComponent,
    UserCardComponent,
    AgePipe,
    BarRatingModule,
    StarToNumbers,
    SweetAlert2Module,
    NgbCarouselModule,
    FormsModule
  ]
})
export class ShareModule { }
