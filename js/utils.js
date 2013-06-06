/*window.onload = function() {


	// Make things happen when hovering on left brain image
	var leftB = document.getElementById('leftbrain');
    leftB.addEventListener('click', function() {
    alert('Left brain!');
	}, false);

	// Add event for when not hovered

    // Make things happen when hovering on right brain image
	var rightB = document.getElementById('rightbrain');
    rightB.addEventListener('click', function() {
    alert('Right brain!');
	}, false);

    // Add event for when not hovered

};*/

/*
$(document).ready( function() {
	$('#brains').mouseover(function () {
		$('#leftdesc').style.visibility = 'true';
	});
});
*/

$(document).ready( function (){
	$('#brains').hover( function(){
		$(this).find('#leftdesc').fadeIn();
	}
		,function(){
			$(this).find('#leftdesc').fadeOut();
		}
	);
});

// Makes a div visible, given the div id
function showDiv(id) {

	var element = document.getElementById(id);

	element.style.visibility = 'visible';
}

// Hides a div, given the div id
function hideDiv(id) {

	var element = document.getElementById(id);
	element.style.visibility = 'hidden';
}