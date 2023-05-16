import * as PIXI from "pixi.js";

const app = new PIXI.Application({ width: 640, height: 360 });

// app.viewはPixiJSの描画先となるcanvas要素
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from("kyoco_trans256x256.png");
const sprite2 = PIXI.Sprite.from("kyoco_trans256x256.png");

app.stage.addChild(sprite);

app.stage.addChild(sprite2);
sprite2.x = 300;

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  sprite.alpha = Math.abs(Math.sin(elapsed / 50.0));
  sprite2.alpha = Math.abs(Math.cos(elapsed / 50.0));
});
