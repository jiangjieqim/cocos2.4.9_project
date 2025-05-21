export class UI_TxtLimit extends cc.Component{
    /**战斗力限制 */
    public plusStr:string;
    /**等级限制 */
    public lvStr:string;
    /**对齐方式 */
    public algin:string = "right";
    protected start(){
        let initX:number = this.node.x;

        let lb0:cc.Node = this.node.getChildByName("lb0")
        let sp1:cc.Node = this.node.getChildByName("sp1");
        let lb2:cc.Node = this.node.getChildByName("lb2");
        
        let algin:string = this.algin;

        //战斗力
        if(this.plusStr){
            lb2.active = true;

            // let s1 = (this.lvStr ? "/":"");
            // if(algin == "left"){
                lb2.getComponent(cc.Label).string = this.plusStr;
            // }else{
                // lb2.getComponent(cc.Label).string = this.plusStr+s1;
            // }
        }else{
            lb2.active = false;
        }

        //等级
        if(this.lvStr){
            let _sign:string = "";
            if(this.plusStr){
                _sign = "/";
            }
            lb0.getComponent(cc.Label).string = this.lvStr + _sign;
            lb0.active = true;
        }else{
            lb0.active = false;
        }
        //----------------------------------------------

        sp1.active = lb2.active ;
        let offsetX:number = 0;
        this.scheduleOnce(()=>{
            console.log(2);

            //right

            if(lb2.active){
                //战力
                lb2.x = -lb2.width;
                sp1.x = lb2.x-sp1.width*sp1.scaleX;
                offsetX = sp1.x;
            }
            
            if(lb0.active){
                //等级
                lb0.x = offsetX-lb0.width;
                offsetX = lb0.x;
            }

            let ox = offsetX;
            if(algin == "left"){
                ox = Math.abs(ox);
                this.node.x = initX+ox;
            }else{
                this.node.x = initX;
            }
        })
    }
}