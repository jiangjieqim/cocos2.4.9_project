const { ccclass, property } = cc._decorator;

@ccclass
export class TipsAlphaTween extends cc.Component {

    private readonly waitTimeSecond: number = 2;//驻留时间(秒)
    private readonly playTimeSecond: number = 1;//播放时间
    start() {
        this.resetTween();
    }

    private resetTween() {
        this.scheduleOnce(this.onResetTween, this.waitTimeSecond);
    }

    private onResetTween() {
        this.node.opacity = 255;
        cc.tween(this.node).to(this.playTimeSecond, { opacity: 0 }).call(this.resetTweenOpactiy, this).start();
    }

    private resetTweenOpactiy() {
        cc.tween(this.node).to(this.playTimeSecond, { opacity: 255 }).call(this.resetTween, this).start();
    }

    onDestroy() {
        this.unschedule(this.onResetTween);
        cc.Tween.stopAllByTarget(this.node);
    }
}