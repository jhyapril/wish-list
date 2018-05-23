import { BrowserModule }                            from '@angular/platform-browser';
import { ErrorHandler, NgModule }                   from '@angular/core';
import { AngularFireAuth }                          from "angularfire2/auth";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen }                             from '@ionic-native/splash-screen';
import { StatusBar }                                from '@ionic-native/status-bar';
import { ShoppingListService }                      from "../services/shopping-list/shopping-list.service";
import { ToastService }                             from "../services/toast/toast.service";

import { MyApp }                     from './app.component';
import { AngularFireModule }         from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG }           from "./firebase.credentials";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    ShoppingListService,
    ToastService
  ]
})
export class AppModule {
}
