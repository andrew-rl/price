$(document).ready(function() {
	
	$('.section').click(function() {
		var name = '#' + $(this).attr('name');
		$('.hide').slideUp();
		if ( $(name).css('display') == "none" ) { $(name).slideDown(); }
	});
	
	$('#close').click(function() {
		$('#order').fadeOut();
		setTimeout( function() {
			$('#services').text('');
			$('#total').text('0.0');
		}, 500);

	});
	
}); // Конец ready(function)

function addPrice(code) {
	if ( $('#services #rem'+code).length == 0 ) {
		var id = '#list #add' + code;
		var el = $(id).html();
		var html = '<div class="eq" id="rem'+code+'" onclick="remPrice('+code+');">'+el+'</div>';
		$('#services').append(html);
		var price = Number( $(id + ' .price').text() );
		var total = (Number( $('#total').text() ) + price).toFixed(2);
		$('#total').text(total);
		$('#order').fadeIn();
	} else {
		var id = '#services #rem' + code;
		var el = $(id).html();
		var attr = $(id).attr('id');
		var code = parseInt( attr.replace('rem', '' ) * Math.random() );
		var html = '<div class="eq" id="rem'+code+'" onclick="remPrice('+code+');">'+el+'</div>';
		$('#services').append(html);
		var price = Number( $(id + ' .price').text() );
		var total = (Number( $('#total').text() ) + price).toFixed(2);
		$('#total').text(total);
	}
}
function remPrice(code) {
	var id = '#services #rem' + code;
	var el = $(id);
	var price = Number( $(id + ' .price').text() );
	var total = (Number( $('#total').text() ) - price).toFixed(2);
	$('#total').text(total);
	el.remove();
}
