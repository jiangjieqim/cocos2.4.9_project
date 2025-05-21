// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIFactory } from "./UIFactory";

const {ccclass, property} = cc._decorator;


@ccclass
export default class Test2 extends cc.Component {

    @property(cc.Button)
    button1: cc.Button = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    private count:number = 0;
    // private _tween1:cc.Tween;
    private lb:cc.Label;

    start () {
        let n = new cc.Node();
        let lb =n.addComponent(cc.Label);
        lb.string = Math.random().toString();
        n.parent = this.node;
        this.lb = lb;
        let outline = n.addComponent(cc.LabelOutline);
        outline.color = cc.Color.BLACK;
        outline.width = 2;
        n.y = n.parent.height/2-lb.fontSize;
        

        // this.node.opacity = 0;
    
        // this.scheduleOnce()
/*
        var timeCallback = function (dt) {
            cc.log("time: " + dt);
          }
        this.scheduleOnce(timeCallback, 2);
        // this.unschedule(timeCallback)
*/

        // let evt = new cc.Component.EventHandler();
        // evt.target = this.node;
        // evt.component = "Test2";
        // evt.handler = "onButtonClick"
        // this.button1.clickEvents.push(evt);

        // const outline = this.node.addComponent(cc.Outline);
        // outline.color = cc.Color.RED;
        // outline.width = 2;
          

        UIFactory.bindClick(this.node.getChildByName("loadbtn"),this,this.onLoadEvt);

        // let _comp1 = this.node.getChildByName("n0").addComponent(UI_TxtLimit);
        // // _comp1.dataSource = "myData";
        // _comp1.lvStr = "20级";
        // _comp1.plusStr = "111万"
        // _comp1.algin = "left";

        // UIFactory.bindClick(this.button1.node,this,this.onDelEvt);
        UIFactory.bindClick(this.node.getChildByName("release_btn"),this,this.onDelEvt);
        

        window['gc'] = function(){
            // if (cc.global.gc) {
                // global.gc();
            // }

            cc.loader.releaseAll()
        }
    }

    private onDelEvt(){
        // cc.assetManager.releaseAsset(this.sf);

        let bundle = cc.assetManager.getBundle(this.bunderName);
        bundle.releaseAll();
    }

    private readonly bunderName:string = "bunder1";
    private onLoadEvt(){
        cc.assetManager.loadBundle(this.bunderName, null, (err, bundle:cc.AssetManager.Bundle)=>{
            // cc.log(bundle);
            this.loadImg();
        });
    }
    private sf: cc.SpriteFrame;
    private loadImg(){
        // console.log(Math.random());
        // this.lb.string = Math.random()+" BREAK...";
        // console.log("I am here... +++++++++++++++++++++++++++++++");
    
        // let tween = new cc.Tween();


        // cc.tween(this.lb.node)
            // .to(1, { x: 100 })
            // .call(this.resetTw).start();

        // this.resetTween();

        /*
          // 获取显存信息
          if( cc['profiler']){
            let profiler = cc['profiler'];
            profiler['showStats']();
            // const vramInfo = profiler.getVRAMInfo();
            // console.log('显存使用情况:', vramInfo);

            // 或者获取更详细的内存信息
            // const memoryInfo = profiler.getMemoryInfo();
            
            // console.log('内存信息:', memoryInfo);
        }
        */
    //    cc.Texture2D


        let that = this;

    // 01c00eff-518a-496d-8548-4501a1456a3e (01wA7/UYpJbYVIRQGhRWo+), db://assets/bunder1/plist
        // let bunder1 = cc.assetManager.getBundle("bunder1");
        // cc.assetManager.releaseAsset()
        // console.log(bunder1);

        let spr1:cc.Sprite = this.node.getChildByName("spr1").getComponent(cc.Sprite);
        console.log(spr1);


        // cc.assetManager.loadBundle('bunder1', null, (err, bundle:cc.AssetManager.Bundle)=>{
            // if(err){
                // console.log(err);
            // }else{
                //  bundle.load("prefabs/view01",(err,asset)=>{
                //      console.log(asset);
                //      let obj:cc.Node = cc.instantiate(asset) as any;
                //      obj.parent = this.node;
                //     //  obj.active = true;
                //     //  this.node.addChild(obj)
                //  });

                // bundle.load()

                let bundle = cc.assetManager.getBundle(this.bunderName);
                bundle.load(`plist/temporary_img_bottom07`, cc.SpriteFrame, (err, sf: cc.SpriteFrame) => {
                    // sf.addRef();
                    // comp.spriteFrame = sf;
                    // this._sfs[url + ""] = sf;
                    // cb && cb()
                    if(!err){
                        console.log('cc.SpriteFrame',sf)

                        spr1.spriteFrame = sf;
                        this.sf = sf;
                        // that.scheduleOnce(()=>{
                        //     // cc.assetManager.releaseAll();
                            // cc.assetManager.releaseAsset(sf);
                        // },2)

                    }else{
                        console.log(err);
                    }
                });
                // });


// 9fb7883e-956a-4c97-9398-cd880f7d36ca (9ft4g+lWpMl5OYzYgPfTbK), db://assets/bunder1/plist/2.png
    }
    
    private resetTween(){
        this.scheduleOnce(this.onResetTween,2);
    }


    private onResetTween(){
        this.lb.node.opacity = 255;
        console.log(Date.now()+" resetTween 动画完成!");
        // this.lb.node.color = cc.Color.RED;
        this.lb.string = Date.now()+"";
        this.count++;
        cc.tween(this.lb.node).to(1, { opacity: 0 }).call(this.resetTweenOpactiy, this).start();
    }

    private resetTweenOpactiy(){
        console.log(Date.now()+" resetTweenOpactiy 动画完成!");
        this.lb.string = Date.now()+"";
        this.count++;

        // if(this.count > 3){
        //     cc.Tween.stopAllByTarget(this.lb.node);
        //     console.log("stop... count:" + this.count);
        //     return;
        // }

        cc.tween(this.lb.node).to(1, { opacity: 255 }).call(this.resetTween, this).start();
    }

    onDestroy(){
        this.unschedule(this.onResetTween);
    }


    //0.0165
    // update (dt:number) {
    // cc.log(dt);
    // }
}
