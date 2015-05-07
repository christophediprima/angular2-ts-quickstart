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
var FriendComponent = (function () {
    function FriendComponent() {
        this.editMode = false;
    }
    FriendComponent.prototype.removeFriend = function (index) {
        this.store.removeFriend(index);
        return true;
    };
    FriendComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.store.setName($event.target.value, this.index);
            this.editMode = false;
        }
    };
    FriendComponent = __decorate([
        angular2_1.Component({
            selector: 'friend',
            properties: {
                'name': 'name',
                'store': 'store',
                'index': 'index'
            }
        }),
        angular2_1.View({
            template: "\n   <div>\n    <div [hidden]=\"editMode\"><span (click)=\"editMode=true\">{{ name }}</span> <a href=\"javascript:;\" (click)=\"removeFriend(index)\">x</a></div>\n    <div [hidden]=\"!editMode\"><input #newName [value]=\"name\" [hidden]=\"!editMode\" (keyup)=\"doneTyping($event)\"> <a href=\"javascript:;\" (click)=\"editMode=false\">Cancel</a></div>\n   </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FriendComponent);
    return FriendComponent;
})();
exports.FriendComponent = FriendComponent;
