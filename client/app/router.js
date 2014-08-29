import index from './views/index';
import profile from './views/profile';

var ApplicationRouter = Backbone.Router.extend({
  initialize: function(){
    // this.bind('all', this._trackPageView);
  },
  _trackPageView: function(){
    var url = Backbone.history.getFragment();
    _gaq.push(['_trackPageview', "/#{url}"]);
  },

  routes: {
    '':             'index',
    'coverage':     'coverage',
    'predictions':  'predictions',
    'history':      'history'
  },

  index: function(){
    window.location.hash = '/coverage';
  },
  coverage: function(){
    var view = new index({id: 'coverage'});
    Backbone.trigger('manager:goto', view, 'coverage');
  },
  predictions: function(){
    var view = new profile({id: 'predictions'});
    Backbone.trigger('manager:goto', view, 'predictions');
  },
  history: function(){
    var view = new profile({id: 'history'});
    Backbone.trigger('manager:goto', view, 'history');
  }

});

export default ApplicationRouter;