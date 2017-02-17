var auto_refresh = setTimeout(function(){
	$('#command').load('cmd.html').fadeToggle(2000);

}, 1000);