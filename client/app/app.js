import manager from './manager';

function App(){
	window.app = {
	  init: function(){
	    this.instance = new manager();
	    Backbone.history.start({ pushState: true });
	  }
	}

	$(function(){
	  window.app.init();
	  if (Backbone.history && Backbone.history._hasPushState) {
	  	
		$(document).delegate("a", "click", function(evt) {
			var href = $(this).attr("href");
			var protocol = this.protocol + "//";
			if (href.slice(protocol.length) !== protocol) {
			 evt.preventDefault();
			 Backbone.history.navigate(href, true);
			}
	 	});
	 }

	});
}

export default App;

