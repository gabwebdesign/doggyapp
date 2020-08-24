import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashComponent } from './dash/dash.component';
import { ShareModule } from '../../share/share.module';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [DashComponent, StoriesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }
