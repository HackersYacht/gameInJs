var player, cursors, platforms, A, D;

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 20 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", "./assets/sky.png");
  this.load.image("ground", "./assets/platform.png");
  this.load.image("star", "./assets/star.png");
  this.load.spritesheet("dude", "./assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.sprite(400, 300, "sky");
  //this.add.sprite(80, 500, "platform1");
  //this.add.sprite(800, 400, "platform1");
  this.add.sprite(100, 400, "star");

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
//resend email to lemi

  player = this.physics.add.sprite(200, 400, "dude");
  //player.animations.add("left", [0, 1, 2, 3], 10, true);
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, platforms);

  //console.log(Phaser.Input.Keyboard.KeyCodes.A)
  console.log(Phaser)
  console.log(this)
  A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
  D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
}

function update() {

  if (A.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  }
  else if (D.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  }

}
