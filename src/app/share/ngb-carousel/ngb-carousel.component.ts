import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'doggy-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.sass']
})
export class NgbCarouselComponent implements OnInit {
  @Input() images = [];
  
  constructor() { }

  ngOnInit(): void {
    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
