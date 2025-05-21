// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIFactory } from "./UIFactory";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpineTest1 extends cc.Component {

    @property(cc.Node)
    spine: cc.Node = null;

    start () {
        // let btn1 = UIFactory.find(this.node,"button1");
        UIFactory.bindBtn(this.node,"button1",this,this.onClickHander);

        // let skel:sp.Skeleton = this.spine.getComponent(sp.Skeleton);
        // skel.animation = "dead";
        // skel.loop = true;

        // this.onWatch();

/*
        let arr = [3,1,5];
        arr.sort((a,b)=>{
            if(a < b){
                return -1;
            }
            else if(a > b){
                return 1;
            }
            return 0;
        })
        console.log(JSON.stringify(arr));
*/
    }
    /*
    private count:number = 0;
    private onWatch(){
        this.count++;
        if(this.count >= 3){
            this.destroy();
        }
        console.log('... count:'+this.count+","+Date.now());
        this.schedule(this.onWatch,1)
    }
    */
    onClickHander(){
        // cc.log(11);
        let skel:sp.Skeleton = this.spine.getComponent(sp.Skeleton);
        skel.animation = "attack01";
        skel.loop = false;
        let time = Date.now();

        //设置动画完成事件
        skel.setCompleteListener((trackEntry: sp.spine.TrackEntry, loopCount) => {
            skel.setAnimation(0, "stand", true);
            // LogSys.Log("cur anim:" + _enemySpine.getComponent(sp.Skeleton).animation);
            console.log(`use ${Date.now()-time} ms,duration:${trackEntry.animation.duration} s`);
        })
    }
}
