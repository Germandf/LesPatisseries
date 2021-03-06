import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DessertCartService } from '../dessert-cart.service';
import { DessertListService } from '../dessert-list.service';
import { Dessert } from './Dessert';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss']
})
export class DessertListComponent implements OnInit {

  desserts$: Observable<Dessert[]>;
  
  constructor(private list : DessertListService, private cart : DessertCartService) { 
    this.desserts$ = list.dessertList.asObservable();
  }

  ngOnInit(): void {
  }

  addToCart(dessert: Dessert): void{
    if(dessert.quantity > 0 && dessert.quantity <= dessert.stock){
      this.cart.addToCart(dessert);
      dessert.stock -= dessert.quantity;
      dessert.quantity = 0;
    }
    else{
      alert("Ingrese una cantidad válida");
    }
  }

  minMaxReached(message : string){
    alert(message);
  }
  
}
