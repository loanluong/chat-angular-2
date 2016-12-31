import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';



export const firebaseConfig = {
    apiKey: "AIzaSyCkbAzDto7TIN-m0q4W8_M2VYhmoX-bCVQ",
    authDomain: "chat-b0a56.firebaseapp.com",
    databaseURL: "https://chat-b0a56.firebaseio.com",
    storageBucket: "chat-b0a56.appspot.com",
    messagingSenderId: "576960077505"
};

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
}


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
