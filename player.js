class Player {
    constructor(ctx) {
      this.ctx = ctx;
      this.width = 150;
      this.height = 200;
      this.y = this.ctx.canvas.height - this.height;
      this.x = 20;
      this.spritesCount = 3;
      this.spriteNumber = 0;
      this.img = new Image();
      this.img.src = "./Pictures/player.png";
    }
  
    animate(frameId) {
      this.spriteNumber = Math.floor((frameId / 10) % this.spritesCount);
    }
  
    draw(frameId) {
      this.animate(frameId);
      const sx = this.spriteNumber * this.width;
      const sy = 0;
      const sWidth = 150;
      const sHeight = 200;
  
      const dx = this.x;
      const dy = this.y;
      const dWidth = this.width;
      const dHeight = this.height;
  
      this.ctx.drawImage(
        this.img,
        sx,
        sy,
        sWidth,
        sHeight,
        dx,
        dy,
        dWidth,
        dHeight
      );
    }
  }
  