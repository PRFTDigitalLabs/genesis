var viewOne = Backbone.View.extend({
  template: JST['client/templates/page.hbs'],
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Page one',
      description: 'Do re mi fa',
    }));
  }
});

export default viewOne;