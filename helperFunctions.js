function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function () {
		background(255, 255, 255);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
		select('h2').html('');
		input.value('');
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function () {
		saveCanvas("myPicture", "png");
	});

	select("#lineWidth").mouseClicked(function () {
		var width = 3;
		select('#lineWidthValue').html(width)
	});

	select("#lineWidthAdd").mouseClicked(function () {
		var width = select('#lineWidthValue').html();
		if (width < 100) {
			width++;
			select('#lineWidthValue').html(width)
		}
	});

	select("#lineWidthCut").mouseClicked(function () {
		var width = select('#lineWidthValue').html();
		if (width > 1) {
			width--;
			select('#lineWidthValue').html(width)
		}
	});
}