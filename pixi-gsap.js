import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin); // プラグインを登録
PixiPlugin.registerPIXI(PIXI); // プラグインへPIXIオブジェクトへの参照を渡す

let app = new PIXI.Application({ width: 640, height: 640 });

app.ticker.stop();
document.body.appendChild(app.view);

const sprites = [];
const colors = [ 0xffffff, 0xffff70, 0xff7070, 0x70ff70 ];
for (let i = 0; i < colors.length; i++) {
  let sprite = PIXI.Sprite.from('kyoco_trans256x256.png');
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
  app.ticker.update();
  sprites[0].alpha = Math.abs(Math.sin(time));
  sprites[1].alpha = Math.abs(Math.cos(time));
});

// tickerで動かしているアニメはこのpause()では停止しない
document.getElementById('pauseBtn').addEventListener('click', () => tl.pause());
document.getElementById('resumeBtn').addEventListener('click', () => tl.resume());
