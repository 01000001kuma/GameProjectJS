class Game {
    screen = 0; // 0= splash start, 1 = game, 2 = gamover
    points = 0;
    ctx = null;
  
    init() {
      console.log("game initialised");
      if (this.ctx === null) {
        this.ctx = document.getElementById("canvas").getContext("2d");
      }
      this.setCanvasToFullScreen();
      this.start();
    }
  
    setCanvasToFullScreen(){
        this.ctx.canvas.height = window.innerHeight
        this.ctx.canvas.width = window.innerWidth
    }
  }