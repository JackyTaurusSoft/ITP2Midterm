//a tool for fill in text

function inputTool(){
	this.icon = "assets/input.png";
	this.name = "InputTool";

	//draws the line to the screen
	this.draw = function(){
		createCanvas(710, 400);
		input = createInput();
		input.position(120, 65);
		createCanvas(300, 300)
		background(220, 220, 220)
		button = createButton('submit');
		button.position(input.x + input.width, 65);
		button.mousePressed(greet);
		greeting = createElement('h2', '1111');
		greeting.position(20, 5);
		console.log(name);

		textAlign(CENTER);
		textSize(50);
		const name = input.value();

	};

	function greet() {
		const name = input.value();
		select("#content").html(name);
		// console.log(name);
		// text(name, 100, 200)
		// greeting.html('hello ' + name + '!');
		input.value('');

		// for (let i = 0; i < 200; i++) {
		// 	push();
		// 	fill(random(255), 255, 255);
		// 	translate(random(width), random(height));
		// 	rotate(random(2 * PI));
		// 	text(name, 0, 0);
		// 	pop();
		// }
	}


}


