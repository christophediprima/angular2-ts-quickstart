/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {FriendComponent} from 'friend';
import {SummaryComponent} from 'summary';
import {FriendsStore} from 'services/singletons/FriendsStore';

@Component({
 selector: 'friends-list',
 services: [FriendsStore]
})
@View({
  template: `
   <p>My name: {{ myName }}</p>
   <p>Current time: {{ time }}</p>
   <p>Friends:</p>
   <ul>
    <li *for="#friend of friendsStore.getFriends(); #i = index">
      <friend [name]="friend.name" [store]="friendsStore" [index]="i"></friend>
    </li>
   </ul>
   <p *if="friendsStore.getFriends().length > 3">You have many friends!</p>
   <input placeholder="Add Friend" #friendname (keyup)="doneTyping($event)">
   <p>Résumé:</p>
   <summary></summary>
`,
 directives: [For, If,FriendComponent,SummaryComponent]
})


export class FriendsListComponent {
 myName: string;
 time: string;
 friendsStore: FriendsStore;

 constructor() {
   this.myName = "Christophe";
   this.friendsStore = FriendsStore.getInstance().setFriends([{name: 'tony'}]);

   setInterval(function () { this.time = (new Date()).toString(); }.bind(this), 1000);
 }
 doneTyping($event) {
   if($event.which === 13) {
     this.friendsStore.addFriend($event.target.value);
     $event.target.value = null;
   }
 }
}
bootstrap(FriendsListComponent);
