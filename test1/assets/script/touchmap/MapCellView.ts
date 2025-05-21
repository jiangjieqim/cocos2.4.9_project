import { EMapEnum } from "./EMapEnum";
import { GridMapFactory } from "./GridMapFactory";
import { MapEvent } from "./MapEvent";
import { MapModel } from "./MapModel";
import { MapPos } from "./MapVo";
/**地图区块格子 */
export class MapCellView extends cc.Component {
    // private _size:number;
    private _vo: MapPos;
    private greenBg:cc.Node;
    onLoad() {
        let _node = this.node;
        let vo = this._vo;
        let size = vo.cellSize;
        _node.position = cc.v3(vo.isox * size, vo.isoy * size, 0);

        let bg = _node.getChildByName("bg");
        let greenBg = _node.getChildByName("greenBg");
        greenBg.active = false;
        this.greenBg = greenBg;
        GridMapFactory.debugCreateLabel(_node, `${vo.isox},${vo.isoy}`);
        if (vo.gridType == EMapEnum.NotUsed) {
            bg.getComponent(cc.Sprite).spriteFrame = null;
            GridMapFactory.debugDrawLine(_node, size, cc.Color.YELLOW);
        } else {
            GridMapFactory.debugDrawLine(_node, size, cc.Color.RED);
        }
        this.model.on(MapEvent.DrawGreen,this.onDrawGreen,this);
        this.model.on(MapEvent.Reset,this.onReset,this);

        // this.model.on(MapEvent.ClearDrawGreen,this.onClearDrawGreen,this);
    }

    private onReset(){
        this.greenBg.active = false;
    }

    private onDrawGreen(indexs:number[]){
        if(this._vo && indexs.indexOf(this._vo.index)!=-1){
           this.greenBg.active = true;
        }else{
            this.greenBg.active = false;
        }
    }

    // private onClearDrawGreen(vo:MapPos){
    // if(this._vo && this._vo == vo){
    // this.greenBg.active = false;
    //  }
    // }

    private get model(){
        return MapModel.Ins;
    }

    setData(_vo: MapPos) {
        this._vo = _vo;
    }

    onDestroy(){
        this.model.off(MapEvent.DrawGreen,this.onDrawGreen,this);
        this.model.off(MapEvent.Reset,this.onReset,this);
        // this.model.off(MapEvent.ClearDrawGreen,this.onClearDrawGreen,this)
    }
}