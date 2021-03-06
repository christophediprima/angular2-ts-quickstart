/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {FriendsStore} from 'services/singletons/FriendsStore';


@Component({
 selector: 'friend',
 properties: {
   'name' : 'name',
   'store': 'store',
   'index': 'index',
 }
})
@View({
  template: `
   <div>
    <div [hidden]="editMode"><span (click)="goEditMode()">{{ name }}</span> <a [hidden]="!store" href="javascript:;" (click)="removeFriend(index)">x</a></div>
    <div [hidden]="!editMode"><input #newName [value]="name" [hidden]="!editMode" (keyup)="doneTyping($event)"> <a href="javascript:;" (click)="editMode=false">Cancel</a></div>
   </div>
`
})

export class FriendComponent {
 store:FriendsStore;
 name:string;
 newName:string;
 index:number;
 editMode:Boolean = false;


 constructor() {

 }
 removeFriend(index){
   this.store.removeFriend(index);
   return true;
 }
 doneTyping($event) {
   if($event.which === 13) {
     this.store.setName($event.target.value, this.index);
     this.editMode = false;
   }
 }
 goEditMode(){
   if(this.store){
     this.editMode=true;
   }
 }
}
