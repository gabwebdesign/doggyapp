import { Component, OnInit, Input } from '@angular/core';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'doggy-doglovers-services',
  templateUrl: './doglovers-services.component.html',
  styleUrls: ['./doglovers-services.component.sass']
})
export class DogloversServicesComponent implements OnInit {
  @Input() jobs = [];

  public trainingIcon = faBone;
  public appoinmentIcon = faCommentMedical;
  public cutIcon = faCut;
  public homeIcon = faHome;

  public iconArray = [];


  constructor() { }

  ngOnInit(): void {
    this.iconArray = [this.trainingIcon,this.appoinmentIcon,this.cutIcon,this.homeIcon]
  }

}
