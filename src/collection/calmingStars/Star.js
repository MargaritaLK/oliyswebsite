// export class Star {
//   constructor(p5, size, x, y) {
//     this.size = size;
//     this.pos = p5.createVector(x, y);
//   }


//   show(p5, alpha) {
//     p5.noStroke()

//     let color1 = p5.color('#ffd60a')
//     color1.setAlpha(50);
//     p5.fill(color1)
//     p5.ellipse(this.pos.x, this.pos.y, this.size, this.size)
//     p5.ellipse(this.pos.x, this.pos.y, this.size / 1.4, this.size / 1.4)
//     p5.ellipse(this.pos.x, this.pos.y, this.size / 1.8, this.size / 1.8)
//     p5.ellipse(this.pos.x, this.pos.y, this.size / 2, this.size / 2)

//     color1.setAlpha(200);
//     p5.fill(color1)
//     p5.ellipse(this.pos.x, this.pos.y, this.size / 3, this.size / 3)


//     let color2 = p5.color('#faf9f9')
//     color2.setAlpha(4);
//     p5.fill(color2)
//     p5.noStroke()
//     p5.ellipse(this.pos.x, this.pos.y, this.size * 5, this.size * 5)
//     p5.ellipse(this.pos.x, this.pos.y, this.size * 3, this.size * 3)
//     p5.ellipse(this.pos.x, this.pos.y, this.size * 2, this.size * 2)
//     p5.ellipse(this.pos.x, this.pos.y, this.size * 1.3, this.size * 1.3)
//     p5.ellipse(this.pos.x, this.pos.y, this.size, this.size)

//     color2.setAlpha(1000);
//     p5.fill(color2)
//     p5.noStroke()
//     p5.ellipse(this.pos.x, this.pos.y, this.size / 5, this.size / 5)

//   }

//   update(size_change) {
//     this.size *= size_change
//   }

// }
