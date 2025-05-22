import { MsgLabel } from "./MsgLabel";

const { ccclass, property } = cc._decorator;
@ccclass
export class GameCore extends cc.Component implements IGameCore{
    private _msgLabel:MsgLabel;
    
    onLoad() {
        // e99c70f9-c62b-4406-bda6-f7b024a3e244 (e9nHD5xitEBr2m97Ako+JE), db://assets/bunder1/prefab/MsgLabel.prefab
        let _name:string = `bunder1`;

        let that = this;
        cc.assetManager.loadBundle(_name, null, (err, bundle:cc.AssetManager.Bundle)=>{
            let url: string = `prefab/MsgLabel`;
            bundle.load(url, cc.Prefab, (err, prefab: cc.Prefab) => {
                if (!err) {
                    let _node = cc.instantiate(prefab);
                    that._msgLabel = _node.getComponent(MsgLabel);

                    // _node.parent = this.node;
                    // that.init();
                } else {
                    // console.log(err);
                }
            });
        });
        window['gameCore'] = this;
    }

    showMsg(_str:string){
        if(this._msgLabel){
            this._msgLabel.setData(_str);
            this._msgLabel.node.parent = this.node;
        }
    }
    
}

