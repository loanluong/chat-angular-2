import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatAngular2';
  rooms: FirebaseListObservable<any[]>;
  messages: FirebaseListObservable<any[]>;
  show: boolean;
  roomName: string;
  currentRoomId: string;
  
  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
    this.show = false;
    this.roomName = "";
    this.currentRoomId = "";
    
  }
  
newRoomModal() {
    this.show = true;
}

cancelRoom() {
    this.show = false;
}

createRoom() {
    this.rooms.push(this.roomName);
    this.show = false;
}

setRoomId(event, key) {
    this.currentRoomId = key;
    
    console.log(key);
    };

    
}

  

  
  
  


