/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';


export class FriendsStore {
  friends: Array<Object>;
  static instance: FriendsStore;
  static isCreating:Boolean = false;

    constructor(){
      if (!FriendsStore.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call FriendsStore.getInstance() instead.");
      }
    }

    static getInstance() {
        if (FriendsStore.instance == null) {
          FriendsStore.isCreating = true;
          FriendsStore.instance = new FriendsStore();
          FriendsStore.isCreating = false;
        }
        return FriendsStore.instance;
    }
    setFriends(friends:Array<Object>){
        this.friends = friends;
        return this;
    }
    addFriend(name){
        this.friends.unshift({name:name});
        return this;
    }
    getFriends(){
        return this.friends;
    }
    removeFriend(index:number){
        this.friends.splice(index, 1);
        return this.friends;
    }
    setName(name:string, index:number){
      this.friends[index] = {name : name};
    }
}
