const {ccclass, property} = cc._decorator;
@ccclass
export class TouchLoad extends cc.Component {
    onLoad(){
        let that = this;
        let _name:string = `bunder1`;
        cc.assetManager.loadBundle(_name, null, (err, bundle:cc.AssetManager.Bundle)=>{
            let url: string = `prefab/TouchMgr`;
            bundle.load(url, cc.Prefab, (err, prefab: cc.Prefab) => {
                if (!err) {
                    let _node = cc.instantiate(prefab);
                    _node.parent = this.node;
                    that.init();
                } else {
                    console.log(err);
                }
            });
        });   
    }

    init(){
        // this.node.getComponent(Touc)
    }
}
