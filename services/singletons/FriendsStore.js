var FriendsStore = (function () {
    function FriendsStore() {
        if (!FriendsStore.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call FriendsStore.getInstance() instead.");
        }
    }
    FriendsStore.getInstance = function () {
        if (FriendsStore.instance == null) {
            FriendsStore.isCreating = true;
            FriendsStore.instance = new FriendsStore();
            FriendsStore.isCreating = false;
        }
        return FriendsStore.instance;
    };
    FriendsStore.prototype.setFriends = function (friends) {
        this.friends = friends;
        return this;
    };
    FriendsStore.prototype.addFriend = function (name) {
        this.friends.unshift({ name: name });
        return this;
    };
    FriendsStore.prototype.getFriends = function () {
        return this.friends;
    };
    FriendsStore.prototype.removeFriend = function (index) {
        this.friends.splice(index, 1);
        return this.friends;
    };
    FriendsStore.prototype.setName = function (name, index) {
        this.friends[index] = { name: name };
    };
    FriendsStore.isCreating = false;
    return FriendsStore;
})();
exports.FriendsStore = FriendsStore;
