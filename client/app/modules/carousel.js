function Carousel($el){
	this.$el = $el.find('.carousel');
	this.$inner = $el.find('.carousel-inner');
	this.$cards = $el.find('.card');
	this.viewPort = {
		w: window.innerWidth,
		h: window.innerHeight
	}
	this.cardSize = {
		w: null,
		h: null
	}

	setTimeout($.proxy(this.init, this),0); //set after next render tick
}

Carousel.prototype = {
	init: function(){
		this.setLayout();
	},
	setLayout: function(){
		// set inner
		this.setCards();
		var width = this.findInnerWidth(),
			height = this.$cards.innerHeight(),
			offsetX = ( this.viewPort.w - this.cardSize.w ) / 2;
		TweenLite.set(this.$inner, {
			'width': width,
			'height': height,
			'x': offsetX
		});

		// position vertically
		var offset = this.$el.offset().top,
			elHeight = this.$el.innerHeight(),
			offsetY = (this.viewPort.h - elHeight) / 2.25 - offset;
		console.log(offset)
		TweenLite.set(this.$el, {
			'y': offsetY
		});
	},
	setCards: function(){
		var winWidth = this.viewPort.w / 2,
			width = (winWidth > 780) ? 780 : winWidth;

		$.each(this.$cards, function(i, el){
			var $el = $(el);
			$el.css('width', width + 'px');

			if( !$el.hasClass('active') ) {
				TweenLite.set($el, {
					alpha: 0.25,
					scale: 0.9,
					x: - (i * 30)
				})
			}
		});
		this.cardSize.w = width;
	},
	findInnerWidth: function(){
		var total = 0;
		$.each(this.$cards, function(i, el){
			var w = $(el).outerWidth();
			total += w;
		});
		return total += 200;
	},
	resize: function(){
		this.setLayout();
	}
}

export default Carousel;