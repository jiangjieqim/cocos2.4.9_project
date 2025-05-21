import { EMapEnum } from "./EMapEnum";
import { MapPos } from "./MapVo";
/**地图数据数据结构 */
export class MapModel extends cc.EventTarget {
    /**地图横向格子数 */
    w:number;
    /**地图纵向格子数 */
    h:number;
    cellSize:number;
    private posList:MapPos[] = [];

    static _Ins:MapModel;
    static get Ins(){
        if(!this._Ins){
            this._Ins = new MapModel();
        }
        return this._Ins;
    }

    setSize(w:number,h:number){
        this.w = w;
        this.h = h;
    }
    setCellSize(val:number){
        this.cellSize = val;
    }

    constructor(){
        super();
        this.init();
    }

    /**初始化数据 */
    private init(){

        this.w = 6;
        this.h = 4;
        this.setCellSize(100);
        //-------------------------------------
        //初始化地图格子
        this.initGrid();

        //设置可以拖拽的区域
        this.setMapGrid(0,0,EMapEnum.Used);
        this.setMapGrid(1,0,EMapEnum.Used);
        this.setMapGrid(1,1,EMapEnum.Used);
        this.setMapGrid(1,2,EMapEnum.Used);
        this.setMapGrid(2,0,EMapEnum.Used);
        this.setMapGrid(2,1,EMapEnum.Used);
        this.setMapGrid(2,2,EMapEnum.Used);
        this.setMapGrid(3,0,EMapEnum.Used);
        this.setMapGrid(3,1,EMapEnum.Used);
        this.setMapGrid(3,2,EMapEnum.Used);
        this.setMapGrid(4,1,EMapEnum.Used);

        // this.setMapGrid(0,0,EMapEnum.Used);
        // this.setMapGrid(1,0,EMapEnum.Used);
        // this.setMapGrid(2,0,EMapEnum.Used);

    }

    private initGrid(){
        let index:number = 0;
        for(let i = 0;i < this.w;i++){
            for(let k = 0;k < this.h;k++){
                this.posList.push(new MapPos(i,k,this.cellSize,index));
                index++;
            }
        }
    }

    private setMapGrid(x:number,y:number,gridType:EMapEnum){
        let cell = this.posList.find(o=>o.isox == x && o.isoy == y);
        if(cell){
            cell.gridType = gridType;
        }
    }

    get mapCellVos(){
        return this.posList;
    }
}