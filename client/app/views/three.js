var viewThree = Backbone.View.extend({
  template: JST['client/templates/page.hbs'],
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Page three',
      description: 'Foo bar',
    }));
  }
});

export default viewThree;