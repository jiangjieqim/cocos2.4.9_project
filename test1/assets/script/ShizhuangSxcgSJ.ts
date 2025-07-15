const { ccclass } = cc._decorator;

@ccclass
export class ShizhuangSxcgSJ extends cc.Component {
    onLoad() {
        const spine: sp.Skeleton = this.node.getComponent(sp.Skeleton);
        spine.setEventListener((trackEntry, event) => {
            cc.log(`event name:${event.data.name},event params: ${event.stringValue}, ${event.intValue}, ${event.floatValue}`);
        });
        spine.setAnimation(0, "shizhuang_sxcg", false);
    }
}