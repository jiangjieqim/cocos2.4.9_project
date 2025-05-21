import { GridMapFactory } from "./GridMapFactory";
import { GridShapeVo } from "./GridShapeVo";
import { MapCellView } from "./MapCellView";
import { MapEvent } from "./MapEvent";
import { MapModel } from "./MapModel";
import { MapPos } from "./MapVo";
import { TouchCell } from "./TouchCell";

const { ccclass, property } = cc._decorator;

@ccclass
export class MapView extends cc.Component {

    @property(cc.Node)
    blackitem: cc.Node = null;

    @property(cc.Node)
    touchItem:cc.Node = null;

    @property(cc.Node)
    touchNodeParent:cc.Node = null;

    private get model(){
        return MapModel.Ins;
    }

    /**地板节点 */
    private map:cc.Node;
    onLoad() {
        

        this.map = this.node.getChildByName("map");

        this.initMapCell();

        this.initDragItem();

        // console.log(this.touchItem);
    
        this.model.on(MapEvent.Move,this.onMove,this)
        this.model.on(MapEvent.End,this.onEnd,this)

    }
    private get offsetPos(){
        return this.map.parent.convertToWorldSpaceAR(new cc.Vec3(this.map.x, this.map.y, 0));
    }
    private onEnd(_eventData:IMoveData){
        let greenIndex = GridMapFactory.getTouchIndexs(_eventData,this.offsetPos);
        
        let _data:GridShapeVo = _eventData.data;
        if(greenIndex.length >= _data.posList.length ){
            console.log(`succeed end..` + JSON.stringify(greenIndex));
        }
        else{
            console.log(`fail...`);
        }
        this.model.emit(MapEvent.Reset);
    }
    onDestroy(){
        this.model.off(MapEvent.Move,this.onMove,this);
        this.model.off(MapEvent.End,this.onEnd,this)
    }

    private onMove(_eventData:IMoveData){        
        let greenIndex = GridMapFactory.getTouchIndexs(_eventData,this.offsetPos);
        // console.log("---->find...",JSON.stringify(greenIndex)+","+`[${ox},${oy}]`);

        this.model.emit(MapEvent.DrawGreen,greenIndex);
    }

    private initDragItem(){
        this.createTouchShape("0,0|0,1",0,-200);
        // this.createTouchShape("-1,0|0,0|1,0",200,-200)
        this.createTouchShape("0,0|1,0|2,0",300,-200)
        // this.createTouchShape("0,0|1,0",300,-200)

    }

    private createGridSharp(str: string, size: number) {
        let vo = new GridShapeVo();
        vo.size = size;
        vo.setData(str);
        return vo;
    }

    private createTouchShape(str:string,x:number,y:number){
        let _node = cc.instantiate(this.touchNodeParent);
        _node.addComponent(TouchCell);
        _node.position=new cc.Vec3(x,y,0);
        // this.node.getChildByName("touchNodeParent");
        // console.log(_node)
        

        // "0,0|1,0|2,0"
        let vo = this.createGridSharp(str,this.model.cellSize);

        let touchCell:TouchCell = _node.getComponent(TouchCell);
        touchCell.setData(vo,this.touchItem);
        _node.parent = this.node; 
    }

    /**初始化地图区块 */
    private initMapCell(){
        let mapVos = this.model.mapCellVos;
        for(let i =0;i < mapVos.length;i++){
            let vo = mapVos[i];
            this.createCell(vo);
        }
    }

    private createCell(vo:MapPos){
        let _node = cc.instantiate(this.blackitem);
        // let size = this.model.cellSize;
        let comp:MapCellView = _node.addComponent(MapCellView);
        comp.setData(vo);
        _node.parent = this.map;

        return _node;
    }
}