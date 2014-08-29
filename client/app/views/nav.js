var nav = Backbone.View.extend({
  el: 'nav',
  initialize: function(){
    return this.render();
  },
  render: function(){
    var template = JST['client/templates/nav.hbs'];
    this.$el.html(template);
  },
  update: function(){
    var fragment = Backbone.history.fragment,
        active = this.$el.find('.active'),
        attr = '[href="/' + fragment + '"]',
        link = this.$el.find(attr).parent();
    if(active){
      active.removeClass('active');
    }
    link.addClass('active');
  }
});

export default nav;