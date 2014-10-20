var viewTwo = Backbone.View.extend({
  template: JST['client/templates/page.hbs'],
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Page two',
      description: 'So la te do',
    }));
  }
});

export default viewTwo;