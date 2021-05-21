$('.hover').mousemove(function(location)
{
	var decription = $(this).attr('text');
	$('#hoverdiv').text(description).show();
	$('#hoverdiv').css('top',location.clientY+10).css('left',location.clientX+10);
});