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
    coverage: {
      enter: function(o){},
      exit: function(o){},
      transitions:{
        'onExitTo:predictions': transitions.slideLeft,
        'onExitTo:history': transitions.slideLeft
      }
    },
    predictions: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:coverage': transitions.slideRight,
        'onExitTo:history': transitions.slideRight
      }
    },
    history: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:coverage': transitions.slideRight,
        'onExitTo:predictions': transitions.slideLeft
      }
    }
  }

});

export default manager;