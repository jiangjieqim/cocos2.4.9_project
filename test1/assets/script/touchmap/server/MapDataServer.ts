import { EMapEnum } from "../EMapEnum";

/**
 * 道具消耗物
 * 
*/
export class MapTouchVo{
    count:number;
    id:number;

    constructor(count:number,id:number){
        this.count = count;
        this.id = id;
    }

}
/**后端数据层 */
export class MapDataServer {
    
    dataList:MapTouchVo[] = [];
    constructor(){

        this.dataList.push(new MapTouchVo(2,1));
        this.dataList.push(new MapTouchVo(3,2));

    }

    private setMapType(model:IMapModel,index:number,gridType:EMapEnum){
        let mapCells = model.mapCellVos;
        let findVo =  mapCells.find(o=>o.index == index);
        if(findVo){
            findVo.gridType = gridType;
        }
    }

    /**消耗使用 */
    use(model:IMapModel,_data:IMapSucceedData,that,func:Function){
        let obj = this.dataList.find(o=>o.id == _data.touchId);
        if(!obj){
            return;
        }
        if(obj.count <= 0){  
            // console.error(`道具数量不足`);
            gameCore.showMsg(`道具数量不足`);
            return;
        }
        //-------------------------------------------------
        //数据处理
        let indexs = _data.selectIDs;
        for(let i = 0;i < indexs.length;i++){
            let curIndex:number = indexs[i];
            this.setMapType(model,curIndex,EMapEnum.Touched)
        }
        obj.count--;
        //-------------------------------------------------
        func.call(that);
    }
}