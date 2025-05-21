import { EMapEnum } from "./EMapEnum";

/**地图区块格子 */
export class MapPos implements IMapPos{
    isox:number;
    isoy:number;

    /**使用状态 */
    gridType:EMapEnum = EMapEnum.NotUsed;
    cellSize:number;
    index:number;
    constructor(x:number,y:number,cellSize:number,index:number){
        this.index = index;
        this.isox = x;
        this.isoy = y;
        this.cellSize = cellSize;
    }

    /**
        检测顶点是否在内部

        n为中心点坐标

        a3--------a2-----
        |         |       |
        |    n    |     cellSize
        |         |       |
        a0--------a1-----
    */
    checkIn(x:number,y:number){
        let _size = this.cellSize;
        let minX = this.isox * _size - _size / 2;
        let maxX = this.isox * _size + _size / 2;

        let minY = this.isoy * _size - _size / 2;
        let maxY = this.isoy * _size + _size / 2;

        if( x >= minX && x <= maxX &&
            y >= minY && y <= maxY)
        {
            return true;
        }
        return false;
    }

    toString(){
        return `${this.isox},${this.isoy}`;
    }
}
