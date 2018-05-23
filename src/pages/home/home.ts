import { Component }                from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable }               from "rxjs/Observable";
import { Item }                     from "../../models/item/item.model";
import { ShoppingListService }      from "../../services/shopping-list/shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingList$: Observable<Item[]>;
  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    this.shoppingList$ = shopping
      .getShoppingList() // get DB list
      .snapshotChanges() // get key and value
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
  }

}
