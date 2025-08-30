import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ballgame',
  templateUrl: './ballgame.component.html',
  styleUrls: ['./ballgame.component.scss']
})
export class BallgameComponent { @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;
  ballX = 100;
  ballY = 100;
  ballDX = 2;
  ballDY = 3;
  ballRadius = 15;

  paddleX = 0;
  paddleWidth = 100;
  paddleHeight = 15;

  score = 0;
  gameOver = false;

  // For keyboard control
  rightPressed = false;
  leftPressed = false;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;

    // Reset ball & score
    this.ballX = canvas.width / 2;
    this.ballY = 50;
    this.ballDX = 2;
    this.ballDY = 3;
    this.score = 0;
    this.gameOver = false;

    this.draw();
  }

  // Keyboard listeners
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = true;
    } else if (event.code === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = false;
    } else if (event.code === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawScore() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Score: ' + this.score, 8, 20);
  }

  draw() {
    if (this.gameOver) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawBall();
    this.drawPaddle();
    this.drawScore();

    // Move paddle with keys
    if (this.rightPressed && this.paddleX < canvas.width - this.paddleWidth) {
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }

    // Ball movement
    this.ballX += this.ballDX;
    this.ballY += this.ballDY;

    // Bounce from walls
    if (this.ballX + this.ballRadius > canvas.width || this.ballX - this.ballRadius < 0) {
      this.ballDX = -this.ballDX;
    }
    if (this.ballY - this.ballRadius < 0) {
      this.ballDY = -this.ballDY;
    }

    // Paddle collision
    if (
      this.ballY + this.ballRadius >= canvas.height - this.paddleHeight &&
      this.ballX > this.paddleX &&
      this.ballX < this.paddleX + this.paddleWidth
    ) {
      this.ballDY = -this.ballDY;
      this.score++;
    }

    // Game Over
    if (this.ballY + this.ballRadius >= canvas.height) {
      this.gameOver = true;
      return;
    }

    requestAnimationFrame(() => this.draw());
  }
}