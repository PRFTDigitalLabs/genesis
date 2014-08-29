  import Carousel from '../modules/carousel';
var index = Backbone.View.extend({
  template: JST['client/templates/carousel.hbs'],
  carousel: null,
  initialize: function() {

  },
  render: function() {
    this.$el.html(this.template());
    this.carousel = new Carousel(this.$el);
  }
});

export default index;