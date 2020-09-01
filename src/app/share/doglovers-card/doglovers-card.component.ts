import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DogLovers } from '../models/doglovers.model';
import { DogloversService } from 'src/app/core/services/data-services/doglovers.services';

@Component({
  selector: 'doggy-doglovers-card',
  templateUrl: './doglovers-card.component.html',
  styleUrls: ['./doglovers-card.component.sass']
})
export class DogloversCardComponent implements OnInit,OnChanges {
  @Input() lover: DogLovers;
  @Output() OnDogLoverSelected = new EventEmitter<DogLovers>();

  public selected:boolean=false;
  private dogLovers:DogLovers[];

  constructor(
      private readonly dogLoverServices:DogloversService
    ) { 
    
  }

  ngOnInit(): void {
    (this.lover.active) ? this.selected = true : this.selected = false;
  }

  ngOnChanges():void{
    (this.lover.active) ? this.selected = true : this.selected = false;
  }


  public desactiveAllDogLovers(selectedLover:number){
    this.dogLoverServices.getDoglovers().subscribe(
      (result:DogLovers[])=>{
        this.dogLovers = result;
        this.dogLovers.map((lover)=>{
          if(lover.id != selectedLover) this.dogLoverServices.desactiveDogLover(lover.id).subscribe();
        });
      }
    )
  }

  public dogLoverSelected(lover: DogLovers): void {
    this.desactiveAllDogLovers(lover.id);
    this.dogLoverServices.activeDogLover(lover.id).subscribe(
      (result)=>{
        this.selected = true;
        this.ngOnChanges();
      },
      (error)=>{
      }
    )
  }

}
