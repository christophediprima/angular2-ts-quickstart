if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var friend_1 = require('friend');
var summary_1 = require('summary');
var FriendsStore_1 = require('services/singletons/FriendsStore');
var FriendsListComponent = (function () {
    function FriendsListComponent() {
        this.myName = "Christophe";
        this.friendsStore = FriendsStore_1.FriendsStore.getInstance().setFriends([{ name: 'tony' }]);
        setInterval(function () { this.time = (new Date()).toString(); }.bind(this), 1000);
    }
    FriendsListComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.friendsStore.addFriend($event.target.value);
            $event.target.value = null;
        }
    };
    FriendsListComponent = __decorate([
        angular2_1.Component({
            selector: 'friends-list',
            services: [FriendsStore_1.FriendsStore]
        }),
        angular2_1.View({
            template: "\n   <p>My name: {{ myName }}</p>\n   <p>Current time: {{ time }}</p>\n   <p>Friends:</p>\n   <ul>\n    <li *for=\"#friend of friendsStore.getFriends(); #i = index\">\n      <friend [name]=\"friend.name\" [store]=\"friendsStore\" [index]=\"i\"></friend>\n    </li>\n   </ul>\n   <p *if=\"friendsStore.getFriends().length > 3\">You have many friends!</p>\n   <input placeholder=\"Add Friend\" #friendname (keyup)=\"doneTyping($event)\">\n   <p>R\u00E9sum\u00E9:</p>\n   <summary></summary>\n",
            directives: [angular2_1.For, angular2_1.If, friend_1.FriendComponent, summary_1.SummaryComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FriendsListComponent);
    return FriendsListComponent;
})();
exports.FriendsListComponent = FriendsListComponent;
angular2_1.bootstrap(FriendsListComponent);
