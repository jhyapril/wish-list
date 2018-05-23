import { NgModule } from '@angular/core';
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";


@NgModule({
  declarations: [HomePage],
  // Lazy load for home page
  imports: [IonicPageModule.forChild(HomePage)]
})

export class HomeModule {

}
