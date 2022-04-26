class Game {
    screen = 1; // 0= splash start, 1 = game, 2 = gamover
    points = 0;
    ctx = null;
    frameId = null;
    background = null;
    player = null;
    
  
    init() {
      if (this.ctx === null) {
        
        this.ctx = document.getElementById("canvas").getContext("2d");
      }
      this.setCanvasToFullScreen();
      this.setEventHandlers();
      this.start();
    }
  
    start() {
      switch (this.screen) {
        case 0:
          this.displaySplashStart();
          break;
        case 1:
          this.reset();
          this.frameId = window.requestAnimationFrame(this.play.bind(this));
          break;
        case 2:
          break;
        default:
          console.log("This screen code is unknown!");
      }
    }
  
    setCanvasToFullScreen() {
      this.ctx.canvas.height = window.innerHeight;
      this.ctx.canvas.width = window.innerWidth;
    }
  
    setEventHandlers() {
      window.addEventListener("resize", this.setCanvasToFullScreen.bind(this));
    }
  
    displaySplashStart() {
      const startButton = document.createElement("button");
      startButton.id = "game-start";
      startButton.textContent = "Start Game";
      startButton.onclick = () => {
        this.screen = 1;
        this.start();
        startButton.remove();
      };
      document.body.appendChild(startButton);
    }
  
    reset() {
      this.background = new Background(this.ctx);
      this.player = new Player(this.ctx);
    }
  
    play() {
      this.background.move(this.frameId);
      this.background.draw(this.frameId);
      this.player.draw(this.frameId);
      this.frameId = requestAnimationFrame(this.play.bind(this));
    }
  }
  