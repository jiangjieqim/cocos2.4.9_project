// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    
    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _button01: cc.Button;

    // private onComplete(err, bundle:cc.AssetManager.Bundle){
    //     let btn =  this.node.getChildByName("Button01");
    //     let i = 0;

    //     if (this._button01) {
    //         this._button01.node.on("click", (event) => {
    //             cc.log(`...........1`);
    //         })
    //     }else{
    //         cc.log('11111');
    //     }
    // }

    @property(cc.Node)
    collier:cc.Node = null;

    private onEvtTest(obj){
        cc.log(JSON.stringify(obj));

    }
/*
           // let ui = this.node.getChildByName("prefabs")

            // if(ui){
            //     let view01 = ui.getChildByName("view01");
            //     console.log(view01)
            // }

            // let btn =  this.node.getChildByName("Button01");
            // let i = 0;
    
            // if (this._button01) {
            //     this._button01.node.on("click", (event) => {
            //         cc.log(`...........1`);
            //     })
            // }else{
            //     cc.log('11111');
            // }

            // cc.log(sp1);
            //  sp1.getComponent(cc.Sprite).spriteFrame = `1`;
            // bundle.

            
            bundle.load('plist/myAtlas01/2',(o,asset:cc.SpriteFrame)=>{
                cc.log(o);
                cc.log(asset);
                cc.log(1);

                // 'plist/myAtlas01/2'
                let sp1 = this.node.getChildByName("New Sprite(Splash)");
                sp1.getComponent(cc.Sprite).spriteFrame = asset;
                cc.log(sp1);
            })
            


            // bundle.load("plist/myAtlas01/AutoAtlas",cc.SpriteAtlas,(err, res:cc.SpriteAtlas)=>{
            // sp.spriteFrame = res.getSpriteFrame("item_z10001");
                // cc.log(err);
                // cc.log(res);

                // let sp1 = this.node.getChildByName("New Sprite(Splash)");
                // sp1.getComponent(cc.Sprite).spriteFrame = res;
            
            // })
*/

    //#region 实例化一个预制体
    private instanecePrefab(){
        cc.assetManager.loadBundle('bunder1', null, (err, bundle:cc.AssetManager.Bundle)=>{
            if(err){
                console.log(err);
            }else{
                 bundle.load("prefabs/view01",(err,asset)=>{
                     console.log(asset);
                     let obj:cc.Node = cc.instantiate(asset) as any;
                     obj.parent = this.node;
                    //  obj.active = true;
                    //  this.node.addChild(obj)
                 });
            }
        });

        // cc.assetManager.releaseAsset()
        // cc.assetManager.removeBundle()
    }
    //#endregion


    start() {
        // cc.log(this);
        // cc.log('sadaisdahsdiahsdia');   
        // cc.assetManager.loadBundle()

        //#region loadBundle

        // let btn =  this.node.getChildByName("button01");

        // let _btnCtl = btn.getComponent(cc.Button);
        // console.log(btn);
        // console.log(_btnCtl);

        // // _btnCtl.clickEvents = [];
        // // let list1 = [];
        // // list1.push(new cc.Component.EventHandler())
        // btn.on('click',()=>{
        //     cc.log(Math.random()+'.');
        //     // cc
        // })


    
        let cc1 = new cc.EventTarget();
        cc1.on("testEvent",this.onEvtTest,this)


        cc1.emit("testEvent",{a:"name1",id:2})

        // let i = 0;

        // this.instanecePrefab();

   
            // console.log(err)
            // bundle.load("buff/1",cc.SpriteFrame,(err1,asset:cc.SpriteFrame)=>{   
            //     if(err1){
            //         return;
            //     }
            //     // cc.log(asset);
            //     this.node.getComponent(cc.Sprite).spriteFrame = asset;

            // })

         
        // this.drawCollier(this.collier);

        // this.collier.addComponent(UIPolygonCollider);

      

        //#endregion



     
    }

    // update (dt) {}
}
