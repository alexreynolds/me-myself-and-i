/*$(document).ready(function(){
	$('#brains').mouseover(function(){
    	    	div = $('#leftdesc');
    	    	div.stop().animate({visibility: visible}, 150);
	}).mouseout(function(){
    	    	div.stop().animate({visibility: hidden}, 150);
	});
});
*/

//
document.getElementById('brains').onmouseover = function(){
    document.getElementById('leftdesc').style.visibility = 'visible';
}

document.getElementById('brains').onmouseout = function(){
    document.getElementById('leftdesc').style.visibility = 'hidden';
}