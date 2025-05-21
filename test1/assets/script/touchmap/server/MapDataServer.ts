export class MapTouchVo{
    count:number;
    id:number;

    constructor(count:number,id:number){
        this.count = count;
        this.id = id;
    }

}

export class MapDataServer {
    
    dataList:MapTouchVo[] = [];
    constructor(){

        this.dataList.push(new MapTouchVo(2,1));
        this.dataList.push(new MapTouchVo(3,2));

    }

    
}