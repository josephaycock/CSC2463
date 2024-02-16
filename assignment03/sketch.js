let sprite;
let characters = [];

function preload() {
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
  };

  characters.push(new Character(100,100,80,80,'assets/gold.png',animations));
  characters.push(new Character(100,200,80,80,'assets/lime.png',animations));
  characters.push(new Character(100,300,80,80,'assets/red.png',animations));
}

function setup() {
  createCanvas(400, 400); 
  
}

function draw() {
  background(0);
  fill('green');
  rect(0, 131, 400);
  fill('blue');
  rect(0, 231, 400);
  fill('yellow');
  rect(0, 332, 400);
  
  // Left and Right Arrow Keys
  characters.forEach((character) => {
    if (kb.pressing('39')) {
      character.walkRight();
    } 
    else if (kb.pressing('37')) {
      character.walkLeft();
    } 
    else {
      character.stop();
    }

    if (character.sprite.x + character.sprite.width/4 > width) {
      character.walkLeft();
    } else if (character.sprite.x - character.sprite.width/4 < 0) {
      character.walkRight();
    }
  })
}

class Character {
  constructor(x,y,width,height,spriteSheet,animations) {
    this.sprite = new Sprite(x,y,width,height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.collider = 'none';
    this.sprite.anis.frameDelay = 8;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');
  }

  stop() {
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('stand');
  }
  
  walkRight() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1;
    this.sprite.vel.y = 0;
  }
  
  walkLeft() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
    this.sprite.vel.y = 0;
  }
}

// not used
function keyTypedOld() {
  switch(key) {
    case 'd':
      walkRight();
      break;
    case 'a':
      walkLeft();
      break;
  }
}