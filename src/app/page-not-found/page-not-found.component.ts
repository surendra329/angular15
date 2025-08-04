import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
 constructor(private router: Router) {}

ngAfterViewInit(): void {
    const canvas = document.getElementById('notFoundCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ball {
      color: string;
      constructor(
        public x: number,
        public y: number,
        public dx: number,
        public dy: number,
        public radius: number,
        public label: string
      ) {
        this.color = this.randomColor();
      }

      randomColor(): string {
        const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#FF6F91', '#845EC2'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          this.radius / 5,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, '#ffffffcc');
        gradient.addColorStop(1, this.color);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();

        // Text
        ctx.fillStyle = '#000';
        ctx.font = `${this.radius / 2.5}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.label, this.x, this.y);
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx *= -1;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy *= -1;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const balls: Ball[] = [];
    const totalBalls = 50;

    for (let i = 0; i < totalBalls; i++) {
      const radius = Math.random() * 20 + 30;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const label = i < totalBalls / 2 ? 'Not' : 'Found';
      balls.push(new Ball(x, y, dx, dy, radius, label));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => ball.update());
      requestAnimationFrame(animate);
    };

    animate();
  }

  @HostListener('window:resize')
  onResize() {
    const canvas = document.getElementById('notFoundCanvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}