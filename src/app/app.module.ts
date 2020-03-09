import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DataBaseService } from './service/DataDBService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
