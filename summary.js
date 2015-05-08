var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var friend_1 = require('friend');
var FriendsStore_1 = require('services/singletons/FriendsStore');
var SummaryComponent = (function () {
    function SummaryComponent() {
        this.friendsStore = FriendsStore_1.FriendsStore.getInstance();
    }
    SummaryComponent = __decorate([
        angular2_1.Component({
            selector: 'summary',
            services: [FriendsStore_1.FriendsStore]
        }),
        angular2_1.View({
            template: "\n   <div>\n     <li *for=\"#friend of friendsStore.getFriends(); #i = index\">\n       <friend [name]=\"friend.name\" [index]=\"i\"></friend>\n     </li>\n   </div>\n",
            directives: [angular2_1.For, friend_1.FriendComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SummaryComponent);
    return SummaryComponent;
})();
exports.SummaryComponent = SummaryComponent;
