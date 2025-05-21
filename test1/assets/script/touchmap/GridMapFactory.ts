import { EMapEnum } from "./EMapEnum";
import { GridShapeVo } from "./GridShapeVo";
import { MapModel } from "./MapModel";

export class GridMapFactory {
    private static get debug(){
        return true;
    }
   
    static createRenderCell(vec: cc.Vec2) {

    }

    static debugDrawLine(target: cc.Node, size: number, color: cc.Color) {
        if(!this.debug){
            return;
        }
        const node = new cc.Node('LineNode');
        const graphics = node.addComponent(cc.Graphics);

        graphics.lineWidth = 2;
        graphics.strokeColor = color;

        graphics.moveTo(0, 0);
        graphics.lineTo(size, 0);
        graphics.lineTo(size, -size);
        graphics.lineTo(0, -size);
        graphics.lineTo(0, 0);

        graphics.stroke();

        node.x = -size / 2;
        node.y = size / 2;
        node.parent = target;
    }

    static debugDrawCircle(target: cc.Node, radius: number = 5) {
        if(!this.debug){
            return;
        }
        const node = new cc.Node('LineNode');
        const graphics = node.addComponent(cc.Graphics);
        graphics.strokeColor = cc.Color.RED;
        graphics.lineWidth = 4;
        const centerX = 0;
        const centerY = 0;
        // const radius = 100;
        graphics.circle(centerX, centerY, radius);
        graphics.stroke();
        node.parent = target;
    }

    static debugCreateLabel(target:cc.Node,str:string){
        if(!this.debug){
            return;
        }
        let _lbNode = new cc.Node("Label");
        let txt = _lbNode.addComponent(cc.Label);
        txt.fontSize = 20;
        txt.lineHeight = 20;
        txt.string = str;
        _lbNode.parent = target;
    }

    static getTouchIndexs(_eventData:IMoveData,offsetPos:cc.Vec3){
        let model = MapModel.Ins;

        let _vo:cc.Vec2 = _eventData.pos;
        let ox = _vo.x - offsetPos.x;
        let oy = _vo.y - offsetPos.y;

        let _shapeVo:GridShapeVo = _eventData.data;
        let offsetX:number = _shapeVo.offsetX;
        let offsetY:number = _shapeVo.offsetY;
        let _shapePosList = _shapeVo.posList;

        // let findVo:MapPos;
        let greenIndex:number[] = [];
        let mapCellVos = model.mapCellVos;
        for(let i = 0;i < mapCellVos.length;i++){
            let vo = mapCellVos[i];
            if(vo.gridType == EMapEnum.Used){

                for(let n = 0;n < _shapePosList.length;n++){
                    
                    let cellPos = _shapePosList[n];
                    let nx = cellPos.x + ox + offsetX;
                    let ny = cellPos.y + oy + offsetY;

                    if(vo.checkIn(nx,ny)){
                        greenIndex.push(vo.index)
                        // findVo = vo;
                        // this.model.emit(MapEvent.DrawGreen,vo);
                    }else{
                        // this.model.emit(MapEvent.ClearDrawGreen,vo);
                    }
                }
            }
        }
        return greenIndex;
    }
}