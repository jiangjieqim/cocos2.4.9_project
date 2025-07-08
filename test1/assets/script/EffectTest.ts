// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export class EffectTest extends cc.Component {

    onLoad() {
        // let hz_baoyang: cc.Node = this.node.getChildByName("hz_baoyang")
        // console.log(hz_baoyang);
      


        this.node.getChildByName("btn1").on("click",()=>{
            // console.log(`---------------------->`+Math.random());
            let time:number = Date.now();
            let hz_baoyang: cc.Node = this.node.getChildByName("hz_baoyang");
            let sp1 = hz_baoyang.getComponent(sp.Skeleton);
            sp1.setAnimation(0,"hz_baoyang",false);
            // console.log(`need play:` + attrId+",val:"+this.vo.maxValue);
            sp1.setCompleteListener(()=>{
                sp1.node.active = false;
                console.log(`------------------- sp1 is hide now... use ${(Date.now() - time)} ms`);
            })
            sp1.node.active = true;


        })
    }
    start() {

    }

    update(dt) {

    }
}
