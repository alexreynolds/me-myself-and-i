window.onload = function() {

	// Switch to appropriate div for portfolio page
	var drawLink = document.getElementById('drawlink');
    drawLink.addEventListener('click',  switchDiv('draw'), false);

	var designLink = document.getElementById('designlink');
    //designLink.addEventListener('click', switchDiv('design'), false);
   // designLink.addEventListener('click', function() {

    	//})

	var photoLink = document.getElementById('photolink');
    photoLink.addEventListener('click', switchDiv('photo'), false);

	var progLink = document.getElementById('proglink');
    progLink.addEventListener('click', switchDiv('prog'), false);

};



// Switches out div shown, given the id of div to be shown
function switchDiv(id) {

	console.log("SWITCH DIV FOR " + id);

	// Hide current portfolio divs
	hideDivs();

	// Sets appropriate link to selected color
	var linkname = id + 'link';

	document.getElementById(linkname).style.color = '#c2ff1f';

	// Display relevant div
	document.getElementById(id).style.display = 'block';

}

// Hides the portfolio div currently visible, and restores respective
// 	link to unselected color
function hideDivs() {

	// The array of divs in the portfolio
	var divsArray = ['draw', 'design', 'photo', 'prog']	

	for (var i = 0; i < divsArray.length; i++) {

		var elem = document.getElementById(divsArray[i]);

		if (elem.style.display == 'block')
		{
			elem.style.display = 'none';
			alert('hid ' + divsArray[i]);
		}

		var linkname = divsArray[i] + 'link';

		document.getElementById(linkname).style.color = '#3bd8ff';
	}
}