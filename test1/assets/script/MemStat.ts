import { MemUtils } from "./MemUtils";

export class MemStat extends cc.Component {
    private statLb: cc.Label;
    onLoad() {
        // if(CC_PREVIEW){
        let lb = new cc.Node();
        this.statLb = lb.addComponent(cc.Label);
        lb.anchorX = 0;
        lb.parent = this.node.parent;
        lb.name = "statLb";
        lb.parent = this.node;
    
        lb.x = -this.node.width / 2;
        lb.y = this.node.height/2 - this.statLb.fontSize;
    }
    update() {
        if (this.statLb) {
            this.statLb.string = MemUtils.calculateTotalTextureMemory() + ""
        }
    }
}