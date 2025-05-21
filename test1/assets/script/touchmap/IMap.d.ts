interface IMoveData{
    pos:cc.Vec2;
    data;
}


interface IMapModel extends cc.EventTarget{
    mapCellVos:MapPos[];
    cellSize:number;
    /**获取剩余数量 */
    getCount(id:number);
}