import { Injectable }          from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item }                from "../../models/item/item.model";

@Injectable()
export class ShoppingListService {
  private shoppinglistRef = this.db.list<Item>
  ('shopping-list');

  constructor(private db: AngularFireDatabase) {}

  getShoppingList() {
    return this.shoppinglistRef;
  }

  addItem(item: Item) {
    return this.shoppinglistRef.push(item);
  }

  editItem(item: Item) {
    return this.shoppinglistRef.update(item.key, item);
  }

  removeItem(item: Item) {
    return this.shoppinglistRef.remove(item.key);
  }
}
