/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {FriendComponent} from 'friend';
import {FriendsStore} from 'services/singletons/FriendsStore';

@Component({
 selector: 'summary',
 services: [FriendsStore],
 properties: {
   'friendsStore' : 'store'
 }
})
@View({
  template: `
   <div>
     <li *for="#friend of friendsStore.getFriends(); #i = index">
       <friend [name]="friend.name" [store]="friendsStore" [index]="i"></friend>
     </li>
   </div>
`,
 directives: [For, If,FriendComponent]
})

export class SummaryComponent {
  construct(){
  }
}
