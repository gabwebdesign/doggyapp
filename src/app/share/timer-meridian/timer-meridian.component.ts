import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'doggy-timer-meridian',
  templateUrl: './timer-meridian.component.html',
  styleUrls: ['./timer-meridian.component.sass']
})
export class TimerMeridianComponent implements OnInit {
  @Input() time:any;
  @Input() meridian:boolean;

  public d = new Date();
  public h = this.d.getHours();
  public m = this.d.getMinutes();

  //public time:any;
  //public meridian:boolean;

  constructor() { }

  ngOnInit(): void {
    this.time = {hour: this.h, minute: this.m };
    (this.h> 12 ) ? this.meridian = false : this.meridian= true;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

}
