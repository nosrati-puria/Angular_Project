import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import * as Models from './models/Product'
import * as Interfaces from './interfaces/Product'

@Component({
  selector: '#app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public constructor() {
    this.items = [
      new Models.Product('Product 1', 100, 1),
      new Models.Product('Product 2', 200, 2),
      new Models.Product('Product 3', 300, 3),
      new Models.Product('Product 4', 400, 4),
    ];
  }

  public items: Interfaces.Product[];

  public getTotal(): number {
    let total: number = 0;

    for (let item of this.items) {
      total += item.getSubTotal(item);
    }

    return total;
  }
}
