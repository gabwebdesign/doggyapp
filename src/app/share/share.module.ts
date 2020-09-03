import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from '../share/pet-card/pet-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { StarToNumbers } from './pipes/star-to-numbers.pipe';
import { AgePipe } from './pipes/age.pipe';
import { JobsPipe } from './pipes/jobs.pipe';
import { BarRatingModule } from "ngx-bar-rating";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbCarouselModule, NgbTimepickerModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { FormsModule } from '@angular/forms';
import { DogloversCardComponent } from './doglovers-card/doglovers-card.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileDropComponent } from './file-drop/file-drop.component';
import { DogloversServicesComponent } from './doglovers-services/doglovers-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimerMeridianComponent } from './timer-meridian/timer-meridian.component';
import { PetShortCardComponent } from './pet-short-card/pet-short-card.component';
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
  declarations: [PetCardComponent, UserCardComponent, StarToNumbers, AgePipe, JobsPipe, NgbCarouselComponent, DogloversCardComponent, DogloversServicesComponent,TimerMeridianComponent, PetShortCardComponent, OrderCardComponent],
  imports: [ CommonModule,BarRatingModule,SweetAlert2Module,NgbCarouselModule,FormsModule,FontAwesomeModule,NgbTimepickerModule],
  exports: [
    CommonModule,
    PetCardComponent,
    UserCardComponent,
    DogloversCardComponent,
    TimerMeridianComponent,
    PetShortCardComponent,
    OrderCardComponent,
    AgePipe,JobsPipe,
    BarRatingModule,
    StarToNumbers,
    SweetAlert2Module,
    NgbCarouselModule,
    FormsModule,
    FontAwesomeModule,
    NgbTimepickerModule
  ]
})
export class ShareModule { }
