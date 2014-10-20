import viewOne from './views/one';
import viewTwo from './views/two';
import viewThree from './views/three';

var ApplicationRouter = Backbone.Router.extend({
  initialize: function(){
    // this.bind('all', this._trackPageView);
  },
  _trackPageView: function(){
    var url = Backbone.history.getFragment();
    _gaq.push(['_trackPageview', "/{url}"]);
  },

  routes: {
    '':       'one',
    'one':    'one',
    'two':    'two',
    'three':  'three'
  },

  one: function(){
    var view = new viewOne({id: 'one'});
    Backbone.trigger('manager:goto', view, 'one');
  },
  two: function(){
    var view = new viewTwo({id: 'two'});
    Backbone.trigger('manager:goto', view, 'two');
  },
  three: function(){
    var view = new viewThree({id: 'three'});
    Backbone.trigger('manager:goto', view, 'three');
  }

});

export default ApplicationRouter;