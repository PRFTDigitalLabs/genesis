import router from './router';
import nav from './views/nav';
import transitions from './transitions';

var manager = Backbone.View.extend({
  el: ".root",

  initialize: function(){
    var _this = this;
    this.router = new router();
    this.nav = new nav();

    Backbone.StateManager.addStateManager(this);
    Backbone.on('manager:goto', function(view, state){
      _this.goto(view, state);
      _this.nav.update();
    });

  },

  goto: function(view, state){

    var _this = this,
        next = view,
        previous = this.currentPage || null,
        options = {
          next: next,
          previous: previous,
          callback: function(){
            if(previous){
              previous.remove();
            }
          }
        };
    next.render({'page':true});
    this.$el.append( next.$el );
    this.triggerState(state, options);
    _this.currentPage = next;
  },

  states: {
    one: {
      enter: function(o){},
      exit: function(o){},
      transitions:{
        'onExitTo:two': transitions.slideLeft,
        'onExitTo:three': transitions.slideLeft
      }
    },
    two: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:one': transitions.slideRight,
        'onExitTo:three': transitions.slideLeft
      }
    },
    three: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:one': transitions.slideRight,
        'onExitTo:two': transitions.slideRight
      }
    }
  }

});

export default manager;