
var user = user || {};

app.Users = Backbone.Collection.extend({
  url: "/users",


model: app.User,

initialize: function () {
  this.on("add", function ( post ) {
    var title = post.get("title");
  });
}

});

var userCollection = new app.Users();
