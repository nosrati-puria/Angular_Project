import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import * as Models from './models/item'
import * as Interfaces from './interfaces/item'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public constructor() {
    this.items = [
      new Models.Item('Product 1', 100, 1),
      new Models.Item('Product 2', 200, 2),
      new Models.Item('Product 3', 300, 3),
      new Models.Item('Product 4', 400, 4),
    ];
  }

  public items: Interfaces.Item[];

  public plus(item: Interfaces.Item): void {
    if (item.count < 10) {
      item.count++;
    }
  }

  public minus(item: Interfaces.Item): void {
    if (item.count > 0) {
      item.count--;
    }
  }

  public getSubTotal(item: Interfaces.Item): number {
    let result: number = item.price * item.count;
    if (item.count >= 6) {
      result *= 0.95;
    }

    return result;
  }

  public getTotalPrice(): number {
    let total: number = 0;
    for (let item of this.items) {
      total += this.getSubTotal(item);
    }

    return total;
  }
}
