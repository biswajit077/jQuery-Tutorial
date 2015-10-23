// How to Create Simple jQuery Plugin

(function($){
	$.fn.simplePlugin = function(content){
		alert(this.html()); //this always referes to assign object
		alert(this.html(content));
	}
})(jQuery);