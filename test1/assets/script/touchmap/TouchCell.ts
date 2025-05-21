import { GridMapFactory } from "./GridMapFactory";
import { GridShapeVo } from "./GridShapeVo";
import { MapEvent } from "./MapEvent";
import { MapModel } from "./MapModel";

const { ccclass, property } = cc._decorator;

/**
 * 单个可拖拽节点
 */
export class TouchCell extends cc.Component{
    private touchItem:cc.Node;
    private _touchNode:cc.Node;
    private _data:GridShapeVo;
    private get touchNode(){
        return this._touchNode;
    }
    onLoad(){
        GridMapFactory.debugDrawCircle(this.node);
        let touchNode = this.node.getChildByName("touchNode");
        this._touchNode = touchNode;
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), touchNode.uuid);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), touchNode.uuid);
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), touchNode.uuid);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle.bind(this), touchNode.uuid);

        //绘制形状
        let _vo = this._data;
        touchNode.width = _vo.gridW * _vo.size;
        touchNode.height= _vo.gridH * _vo.size;
        let ox = _vo.offsetX;
        let oy = _vo.offsetY;
        for(let i = 0;i < _vo.posList.length;i++){
            let cellVo = _vo.posList[i];
            let item = cc.instantiate(this.touchItem);
            item.x = cellVo.x + ox;
            item.y = cellVo.y + oy;
            item.parent = touchNode;
            GridMapFactory.debugDrawLine(item,_vo.size,cc.Color.GREEN);
        }
        this.model.on(MapEvent.Reset,this.onReset,this);
    }

    private onReset(){
        this.touchNode.setPosition(cc.Vec3.ZERO);
    }

    onDestroy(){
        this.model.off(MapEvent.Reset,this.onReset,this);
    }

    private get model(){
        return MapModel.Ins
    }
 
    private onTouchStart(event:cc.Event.EventTouch){
        let wpos1 = event.getLocation();
        console.log("onTouchStart:",wpos1.x,wpos1.y);
    }

    setData(vo:GridShapeVo,touchItem:cc.Node){
        this.touchItem = touchItem;
        this._data = vo;
        // console.log(1);
    }
    private onTouchCancle(event:cc.Event.EventTouch){
        let wpos1 = event.getLocation();
        // let pos = this.touchNode.convertToNodeSpaceAR(new cc.Vec3(wpos1.x, wpos1.y, 0));
        // this.touchNode.setPosition(pos);
        console.log("onTouchCancle:",wpos1.x,wpos1.y);
    }

    private onTouchMove(event:cc.Event.EventTouch){
        // let deltaMove = this.v_start.sub(event.getLocation())
        // if (deltaMove.mag() > 7) {
        //     let wpos = event.getLocation();
        //     EventCenter.dispatchEvent({ name: ENM.GAME_TOUCH_MOVE, wpos: wpos });
        // }
        let wpos1 = event.getLocation();

        let pos = this.touchNode.parent.convertToNodeSpaceAR(new cc.Vec3(wpos1.x, wpos1.y, 0));
        this.touchNode.setPosition(pos);
        
        // EventCenter.dispatchEvent({ name: ENM.GAME_TOUCH_MOVE_Zancun, wpos: wpos1 });
        // console.log("onTouchMove:",wpos1.x,wpos1.y);
    
        MapModel.Ins.emit(MapEvent.Move,{pos:wpos1,data:this._data} as IMoveData);
    }

    private onTouchEnd(event:cc.Event.EventTouch){
        let wpos1 = event.getLocation();
        // console.log("onTouchEnd:",wpos1.x,wpos1.y);
        MapModel.Ins.emit(MapEvent.End,{pos:wpos1,data:this._data} as IMoveData);
    }
}