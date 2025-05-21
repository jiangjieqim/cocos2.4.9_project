const { ccclass, property } = cc._decorator;
// import { _decorator, Component, Graphics } from cc;

@ccclass
export class DynamicMask extends cc.Component{
    onLoad() {
        const g = this.addComponent(cc.Graphics);
        g.clear();
        let _color= new cc.Color(0,255,0,255);
        g.fillColor.set(_color); // 遮罩颜色
        g.circle(0, 0, 100); // 在 (0,0) 绘制半径为 100 的圆
        g.fill();
    }
}