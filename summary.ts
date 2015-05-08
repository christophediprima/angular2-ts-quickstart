/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, For} from 'angular2/angular2';
import {FriendComponent} from 'friend';
import {FriendsStore} from 'services/singletons/FriendsStore';

@Component({
 selector: 'summary',
 services: [FriendsStore]
})
@View({
  template: `
   <div>
     <li *for="#friend of friendsStore.getFriends(); #i = index">
       <friend [name]="friend.name" [index]="i"></friend>
     </li>
   </div>
`,
 directives: [For, FriendComponent]
})

export class SummaryComponent {
  friendsStore:FriendsStore;
  constructor(){
    this.friendsStore = FriendsStore.getInstance();
  }
}
