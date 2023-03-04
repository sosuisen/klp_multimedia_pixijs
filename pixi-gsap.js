import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";

let app = new PIXI.Application({ width: 640, height: 640 });
gsap.registerPlugin(PixiPlugin);

app.ticker.stop();
document.body.appendChild(app.view);

const sprites = [];
const colors = [ 0xffffff, 0xffff70, 0xff7070, 0x70ff70 ];
for (let i = 0; i < colors.length; i++) {
  // kyoco.png(240x280)
  let sprite = PIXI.Sprite.from('kyoco.png');
  sprite.x = 100;
  sprite.y = 80 + i * 150;
  sprite.scale.x = 0.5;
  sprite.scale.y = 0.5;
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;
  sprite.tint = colors[i];
  app.stage.addChild(sprite);
  sprites.push(sprite);
}

// GSAPのtickを使う
gsap.ticker.add(time => {
  app.ticker.update(); // PixiJSの画面更新
  // 引き続きtimeを使った処理もできる。
  // GSAPのtimeはtickerが開始してからの時間
  sprites[0].y = 80 + 10 * Math.cos(time*5); // 上下に揺れ
});

// GSAPのTween が使える
/*
gsap.to(sprites[0], 1, { 
  x: 400,
});
*/

// Stagger
// scaleやangleのようなサブオブジェクトはpixiプロパティ経由でアクセス
/*
gsap.to(sprites, 1, { 
  x:200,
  stagger: 0.5,
  pixi: {
    angle: 360
  },
});
*/

// Timeline
/*
let tl = gsap.timeline()
// let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })
tl.to(sprites[0], { x: 480, duration: 1.5, ease: 'power3.out' });
tl.to(sprites[1], { x: 480, duration: 0.5, delay:0.2, ease: 'power3.out' });
tl.to(sprites[2], { x: 480, duration: 0.5, ease: 'power3.out' });
*/

// tickerで動かしているアニメは停止しない
document.getElementById('pauseBtn').addEventListener('click', () => tl.pause());
document.getElementById('resumeBtn').addEventListener('click', () => tl.resume());
