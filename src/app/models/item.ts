import * as Interfaces from '../interfaces/item'

export class Item implements Interfaces.Item {

    public constructor(public name: string, public price: number, public count: number) {

    }


}