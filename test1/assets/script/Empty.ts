import EmptyItem from "./EmptyItem";

const {ccclass} = cc._decorator;

@ccclass
export default class Empty extends cc.Component {

    onLoad () {
        cc.log(`Empty onLoad...`)
        this.node.getChildByName("emptyItem").getComponent(EmptyItem).func1();
    }

    start () {

    }

    // update (dt) {}
}
