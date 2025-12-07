import * as Interfaces from '../interfaces/item'

export class Item implements Interfaces.Item {

    public constructor(public name: string, public price: number, public count: number) {

    }

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
}