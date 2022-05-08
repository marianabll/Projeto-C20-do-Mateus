
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// precisamos declarar as variáveis para o solo, block1, block2 e block3 aqui:


// e uma variável para o motor (engine) e para o mundo (world):



function preload() // não usaremos essa função, então pode apaga-la
{
	
}

function setup() {
	createCanvas(800, 700);
    background(0); // não precisamos da função background() na setup() e na draw(), pode apagar essa

	engine=Engine.create();
	World=engine.World; //esses "world" têm letra minúscula. É a variável onde está sendo criado um mundo, e não o módulo da Matter (linha 3)

    var plane_options = {
		isStatic:true
	}

	// precisamos criar o corpo plano (solo) e adiciona-lo ao mundo:



	// precisamos escrever os objetos javascript com as "options" ANTES da criação de seus corpos
    block1 = Bodies.circle(220,10,10,block1_options); // <-- então inverta a ordem desse
    World.add(world,block1);

	var block1_options = { // <-- com esse
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	block2 = Bodies.rectangle(110,50,10,10,block2_options); // <-- e inverta a ordem desse
    World.add(world,block2);

	var block2_options = { // <-- com esse
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	block3 = Bodies.rectangle(350,50,10,10,block3_options); // <-- e inverta a ordem desse
    World.add(world,block3);

	var block3_options = { // <-- com esse
		restiution:0.01,
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine); // não aprendemos e não precisamos usar esse comando, pode apagar ;)
}

function draw() {
  background(0);

  fill("brown") // esse comando colore as formas que você desenhou com rect() e ellipse()
  rectMode(CENTER);
  ellipseMode(RADIUS); // inclui esse comando, mas ele não é indispensável ;)
  
  ellipse(block1.position.x,block1.position.y,10);
  rect(block2.position.x,block2.position.y,10,10);
  rect(block3.position.x,block3.position.y,10,10);
  // agora falta desenhar o solo com um outro rect() aqui

  Engine.update(engine);
  drawSprites(); // não criamos sprites, então pode apagar essa função
}



