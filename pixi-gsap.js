let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// kyoco.png(240x280)
let sprite = PIXI.Sprite.from('kyoco.png');
sprite.y = 140;
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

app.stage.addChild(sprite);

app.ticker.stop();

// GSAPのtickを使う
let elapsed = 0.0;
gsap.ticker.add(() => {
  app.ticker.update(); // PixiJSの画面更新
  // elapsed += delta;
  // sprite.x = 320.0 + Math.cos(elapsed / 50.0) * 100.0;
});

gsap.to(sprite, {
  duration: 2,
  yoyo: true,
  repeat: -1,
  pixi: {
    scaleX: 1.5,
    scaleY: 1.5,
  }
});

gsap.to(sprite, {
  duration: 2,
  repeat: -1,
  pixi: {
    rotation: 360,
  }
});
