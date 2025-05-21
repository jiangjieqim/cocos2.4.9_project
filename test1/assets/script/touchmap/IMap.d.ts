interface IMoveData{
    pos:cc.Vec2;
    data;
}

interface IMapPos{
    gridType:number;
    isox:number;
    isoy:number;
    cellSize:number;
    index:number;
    checkIn(x:number,y:number);
}

interface IMapModel extends cc.EventTarget{
    mapCellVos:IMapPos[];
    cellSize:number;
    /**获取剩余数量 */
    getCount(id:number);
}

interface IMapSucceedData{
    selectIDs:number[];
    touchId:number;
}