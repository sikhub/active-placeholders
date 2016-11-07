/* 
 * jQuery Active Placeholders Plugin - v1.0
 * Copyright (c)2016 Blaž Cigale <blaz.cigale@gmail.com>
 * 2016-11-07
 *
 */
 
(function ( $ ) {
 
    $.fn.activePlaceholders = function() {
		
		$('input', $(this)).on('focusin', function(){
			var $that = $(this);
			var $label = $that.siblings('label');

			$label.addClass('labeled');
		});
	
		$('input', $(this)).on('focusout', function(){
			var $that = $(this);
			var $label = $that.siblings('label');
			
			if($that.val().length == 0) {
				$label.removeClass('labeled');
			}
		});
	
    };
		
}( jQuery ));