import * as PIXI from 'pixi.js'

const app = new PIXI.Application({ width: 640, height: 360 });

// app.viewはPixiJSの描画先となるcanvas要素
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from('kyoco_trans256x256.png');
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});