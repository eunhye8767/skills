var $cursor1 = $('.cursor1'),
	$cursor2 = $('.cursor2'),
	cursorHalfWidth1 = $cursor1.width() / 2,
	cursorHalfWidth2 = $cursor1.width() / 2;

$(document).on('mousemove', function(e){
	var cursorLeftPos1 = e.pageX - cursorHalfWidth1,
		cursorLeftPos2 = e.pageX - cursorHalfWidth2,
		cursorTopPos1 = e.pageY - cursorHalfWidth1,
		cursorTopPos2 = e.pageY - cursorHalfWidth2;
		
	TweenMax.to($cursor1, 0, {top: cursorTopPos1, left: cursorLeftPos1, ease:Linear.easeNone});
	TweenMax.to($cursor2, 0, {top: cursorTopPos2, left: cursorLeftPos2, ease:Linear.easeNone});
});

$('.cursor-link1').on('mousemove mouseover', function(){
	TweenMax.to($cursor1, 2.5, {
		scale: 1.5, 
		ease: Back.easeOut.config(4)
	});	
});
$('.cursor-link2').on('mousemove mouseover', function(){
	TweenMax.to($cursor2, 2.5, {
		scale: 1.5, 
		ease: Back.easeOut.config(4)
	});	
});

$('.cursor-link1').on('mouseleave', function(){
	TweenMax.to($cursor1, 0.5, {
		scale: 0, 
		ease: Back.easeInOut.config(1)
	});	
});

$('.cursor-link2').on('mouseleave', function(){
	TweenMax.to($cursor2, 0.5, {
		scale: 0, 
		ease: Back.easeInOut.config(1)
	});	
});