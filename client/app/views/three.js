import BaseView from './baseView';

var two = BaseView.extend({
       
    render: function() {

        var template = JST['client/templates/three.hbs'];
        this.$el.html(template);
    },

    transitionIn: function(callback) {
        
        TweenLite.fromTo(this.$('h1'), .5, {
            x: -100,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            ease: 'easeOutExpo'
        });

    },
    transitionOut: function(callback) {

        var self = this;

         TweenLite.to(this.$('h1'), .5, {
            x: 100,
            autoAlpha: 0,
            ease:'easeInExpo',
            onComplete: function(){
                callback();
                
            }
        });

    }    

});

export default two;
