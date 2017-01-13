import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ChatAngular2';
  rooms: FirebaseListObservable<any[]>;
  messages: FirebaseListObservable<any[]>;
  loggedIn: boolean;
  show: boolean;
  showLogin: boolean;
  roomName: string;
  currentRoomId: string;
  currentUser: string;
  currentMessage: string;
  
  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
    this.loggedIn = false;
    this.show = false;
    this.showLogin = false;
    this.roomName = "";
    this.currentRoomId = "";
    this.currentUser = "";
    this.currentMessage = "";
  } 
  
newRoomModal() {
    this.show = !this.show;
    console.log(this.show);
}

cancelRoom() {
    this.show = !this.show;
}

createRoom() {
    this.rooms.push(this.roomName);
    this.show = !this.show
}

setRoomId(event, key) {
    this.currentRoomId = key;
    console.log(key);
} 

login() {
    this.showLogin = !this.showLogin;
    this.loggedIn = true;
}

logout() {
    this.currentUser = "";
    this.loggedIn = false;
}
    
setUserName(event, currentUser) {
    this.showLogin = !this.showLogin;
    console.log("logged in as "+ this.currentUser);
}

newMessage(event) {
    this.currentMessage = event.target.value;
}

sendMessage(event) {
        if (this.currentMessage !== "") {
            let message = {
                username: this.currentUser,
                roomId: this.currentRoomId,
                content: this.currentMessage,
                sentAt: Date().toLocaleString(),
            };
        this.messages.push(message);
    }           
        this.currentMessage = "";
}
}



  

  
  
  


