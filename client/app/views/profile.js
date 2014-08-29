var profile = Backbone.View.extend({
  template: JST['client/templates/profile.hbs'],
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Profile',
      description: 'This is the profile page',
    }));
  }
});

export default profile;