/*

单个格子数据描述

+----+
| 0,0|
+----+

+----+
| 0,1|
+----+
| 0,0|
+----+

+----+----+----+
| 0,0| 1,0| 2,0|
+----+----+----+
*/
export class GridShapeVo{
    id:number;
    posList:cc.Vec2[] = [];
    size:number;
    /**格子数量 */
    gridW:number;
    gridH:number;

    // centerList:cc.Vec2[] = [];
    private shapeList:cc.Vec2[] = [];

    get offsetX(){
        let v = (this.gridW - 1) * this.size/2 * -1;
        return v;
    }

    get offsetY(){
        let v = (this.gridH - 1) * this.size/2 * -1;
        return v;
    }

    /**
     * 0,0|0,1
     */
    setData(str:string){
        let arr = str.split("|");
        for(let i = 0;i < arr.length;i++){
            let a = arr[i].split(",");
            let v = new cc.Vec2(parseInt(a[0]),parseInt(a[1]));
            this.shapeList.push(v);
        }
        this.getSize();

        //构建中心点列表
        for(let i = 0;i < this.shapeList.length;i++){
            let cellVo = this.shapeList[i];
            let ox = cellVo.x * this.size;
            let oy = cellVo.y * this.size;
            this.posList.push(new cc.Vec2(ox,oy))
        }
    }

    private getSize(){
        let maxW:number = 0;
        let maxH:number = 0;
        for(let i = 0;i < this.shapeList.length;i++){
            let vo = this.shapeList[i];
            if(vo.x > maxW){
                maxW = vo.x;
            }
            if(vo.y > maxH){
                maxH = vo.y;
            }
        }
        this.gridW = (maxW+1);
        this.gridH = (maxH+1);
    }
}