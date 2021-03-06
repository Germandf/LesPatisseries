import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity : number;
  @Input()
  max : number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  minReached: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChangeQuantity(): void{
    if(this.quantity > this.max){
      this.quantity = this.max;
    }
    else if(this.quantity < 0){
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.minReached.emit("Se alcanzó el mínimo permitido");
    }
  }

  upQuantity(): void {
    if(this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el máximo permitido");
    }
  }

}
