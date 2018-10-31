var player, cursors;

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
  this.load.image("platform1", "./assets/platform.png");
  this.load.image("star", "./assets/star.png");
  this.load.spritesheet("dude", "./assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.sprite(400, 300, "sky");
  this.add.sprite(80, 500, "platform1");
  this.add.sprite(800, 400, "platform1");
  this.add.sprite(100, 400, "star");

  player = this.physics.add.sprite(200, 400, "dude");
  //player.animations.add("left", [0, 1, 2, 3], 10, true);
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  }
}
