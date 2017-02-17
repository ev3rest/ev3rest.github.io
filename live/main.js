var auto_refresh = setInterval(function(){
	$('#command').load('cmd.html').fadeToggle(2000);

}, 1000);