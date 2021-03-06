import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { ShareModule } from '../../share/share.module';
import { StoriesComponent } from './stories/stories.component';
import { ModalStoriesComponent } from './modal-stories/modal-stories.component';

@NgModule({
  declarations: [DashComponent, StoriesComponent, ModalStoriesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }
