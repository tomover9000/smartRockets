var population;
var lifespan = 300;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;

var rx = 300;
var ry = 200;
var rw = 200;
var rh = 10;
var input_rw, button, message_w;

function setup() {
	createCanvas(600, 400);
	population = new Population();
	lifeP = createP();
	target = createVector(width / 2, 50);

	input_rw = createInput();
	input_rw.position(200, 420);

	button = createButton('refresh');
	button.position(input_rw.x + input_rw.width, 420);
	button.mousePressed(refresh);

	message_w = createElement('h2', 'width:');
	message_w.position(100, 395);



}

function refresh() {

	if (input_rw.value())
		rw = input_rw.value();


	population = new Population();


}

function draw() {
	background(0);
	population.run();
	lifeP.html(count);



	count++;
	if (count == lifespan) {
		population.evaluate();
		population.selection();
		//population = new Population();
		count = 0;
	}

	fill(255);
	rectMode(CENTER);
	rect(rx, ry, rw, rh);

	ellipse(target.x, target.y, 16, 16);
}
