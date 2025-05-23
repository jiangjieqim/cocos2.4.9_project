const { ccclass, property } = cc._decorator;

@ccclass
export class MsgLabel extends cc.Component {
    private lb: cc.Label;
    private _labelStr: string;
    onLoad() {
        this.setLabel();
    }

    private setLabel(){
        this.lb = this.node.getChildByName("lb").getComponent(cc.Label);
        this.lb.string = this._labelStr;
    }

    setData(_msg: string) {
        this._labelStr = _msg;
        this.setLabel();
        let that = this;
        this.scheduleOnce(()=>{
            // that.destroy();
            that.node.parent = null;
        },1);
    }
}