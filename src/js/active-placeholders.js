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