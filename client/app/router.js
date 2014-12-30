import Nav from './views/nav';
import Home from './views/home';
import Two from './views/two';
import Three from './views/three';


var ApplicationRouter = Backbone.Router.extend({

    initialize: function() {

        // this.bind('all', this._trackPageView);
        var self = this;

        this.nav = new Nav();

        Backbone.on('manager:goto', function(view) {
            self.nav.update();
        });

    },

    _trackPageView: function() {
        var url = Backbone.history.getFragment();
        _gaq.push(['_trackPageview', "/{url}"]);
    },

    routes: {
        '': 'home',
        'home': 'home',
        'two': 'two',
        'three': 'three'
    },

    home: function() {

        var view = new Home({
            id: 'home'
        });
        app.manager.goto(view);
    },

    two: function() {

        var view = new Two({
            id: 'two'
        });
        app.manager.goto(view);
    },

    three: function() {

        var view = new Three({
            id: 'three'
        });
        app.manager.goto(view);
    }

});

export default ApplicationRouter;
