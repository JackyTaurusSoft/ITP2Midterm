//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var colorPicker = null;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//file
	c.style('border', '3px dashed')
	c.drop(gotFile);

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	// rgbP = new rgbPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new ellipseTool());
	toolbox.addTool(new rectangleTool());
	// toolbox.addTool(new inputTool());
	// toolbox.addTool(new mirrorDrawTool());


	input = createInput();
	input.position(1100, 8);
	button = createButton('submit');
	button.position(input.x + input.width, 8);
	button.mousePressed(greet);
	greeting = createElement('h2');
	greeting.position(100, 50);
	textAlign(CENTER);
	textSize(50);


}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user

	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}

}


function greet() {
	const name = input.value();
	greeting.html(name);
	input.value('');
}



function gotFile(file) {
	createP(`${file.name} ${file.size}`);
	let img = createImg(file.data).hide();
	image(img, 0, 0, 400, 200);
}



