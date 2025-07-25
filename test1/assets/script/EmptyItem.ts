// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmptyItem extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log(`EmptyItem onLoad...`)
    }
    onEnable(){
        cc.log(`EmptyItem onEnable...`)
    }
    start () {
        cc.log(`EmptyItem start...`)
    }

    // update (dt) {}

    func1(){
        cc.log(`----------------> EmptyItem func1`);
    }

}
