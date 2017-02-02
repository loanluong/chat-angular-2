import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ChatAngular2';
  user = {};
  rooms: FirebaseListObservable<any[]>;
  messages: FirebaseListObservable<any[]>;
  show: boolean;
  showLogin: boolean;
  auth: boolean;
  roomName: string;
  currentRoomId: string;
  currentMessage: string;
  currentUser: string;
  
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages', {
    query: {
        orderByChild: 'sentAt'
    }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    this.af.auth.subscribe(user => {
        if(user) {
        this.user = user;
        } else {
        this.user = {};
        }
    });
    this.show = false;
    this.showLogin = false;
    this.auth = false;
    this.roomName = "";
    this.currentRoomId = "";
    this.currentMessage = "";
    this.currentUser = "";
  } 
  
  
newRoomModal() {
    this.show = !this.show;
    console.log(this.show);
}

cancelRoom() {
    this.show = !this.show;
}

createRoom(key) {
    this.rooms.push(this.roomName);
    this.show = !this.show
    this.currentRoomId = key;
}

setRoomId(event, key) {
    this.currentRoomId = key;
    console.log(key);
} 

login() {
    this.af.auth.login({
        provider: AuthProviders.Google
    });
    this.auth = true;
    console.log("authorized!")
}

loginfb() {
    this.af.auth.login({
        provider: AuthProviders.Facebook
    });
    this.auth = true;
    console.log("authorized with fb!")
}

logout() {
   this.af.auth.logout();
   this.auth = false;
   this.currentUser = "";
}
    
setUserName(event, currentUser) {
    this.showLogin = !this.showLogin;
    console.log("logged in as "+ this.currentUser);
}

newMessage(messageContent: string) {
        if (messageContent !== "") {
            let message = {
                username: this.currentUser,
                roomId: this.currentRoomId,
                content: messageContent,
                sentAt: firebase.database.ServerValue.TIMESTAMP
            };
        this.messages.push(message);
       }        
    
}
}
