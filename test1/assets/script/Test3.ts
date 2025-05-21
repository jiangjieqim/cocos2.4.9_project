const {ccclass, property} = cc._decorator;
import { MemStat } from "./MemStat";
import { MemUtils } from "./MemUtils";
import { UIFactory } from "./UIFactory";

@ccclass
export class Test3 extends cc.Component{
    private readonly imgScale:number = 5;
    @property(cc.Node)
    load: cc.Node = null;

    @property(cc.Node)
    del: cc.Node = null;

    @property(cc.Sprite)
    spr: cc.Sprite = null;

    @property(cc.Node)
    assets_btn: cc.Node = null;
    
    @property(cc.Node)
    assets_cache:cc.Node = null;

    @property(cc.Prefab)
    prefab:cc.Prefab = null;

    private readonly bunderName:string = "bunder1";
    onLoad(){
        console.log('remoteServerAddress------>['+cc.assetManager.downloader.remoteServerAddress+"]");//cc.assetManager.downloader['_remoteServerAddress']
        console.log('PixelFormat:',JSON.stringify(cc.Texture2D.PixelFormat));

        // console.log(`your prefab is`,this.prefab);
        let p1 = cc.instantiate(this.prefab);
        p1.parent = this.node;

        UIFactory.bindClick(this.load,this,this.onLoadEvt);
        UIFactory.bindClick(this.del,this,this.onDelEvt);
        UIFactory.bindClick(this.assets_btn,this,this.onAssetsBtn);
        UIFactory.bindClick(this.assets_cache,this,this.onAssetsCache);
        UIFactory.bindBtn(this.node,"test",this,this.onTest)



        // console.log(Date.now()+" setTimeout start ...........")
        // let time1 = setTimeout(() => {
        //     console.log(Date.now()+" setTimeout test ...........")
        // }, 1000);
        // // clearTimeout(time1);

       
        // if(CC_PREVIEW){
            this.node.addComponent(MemStat);//增加内存查看
        // }
    }

    update(){
 
    }

    private onTest(){
        // console.log(2222222222222222222222);
        MemUtils.calculateTotalTextureMemory();
    }
    private onAssetsCache(){
        console.log(cc.loader['_cache'])
    }

    private onAssetsBtn(){
        console.log("cc.assetManager.bundles----->",cc.assetManager.bundles);
    }
    private onLoadEvt(){
        // console.log(1);
        cc.assetManager.loadBundle(this.bunderName, null, (err, bundle:cc.AssetManager.Bundle)=>{
            // cc.log(bundle);
            this.loadImg();
        });
    }
    private onDelEvt(){
        console.log(`销毁Bunder--->${this.bunderName}`);
        let bundle = cc.assetManager.getBundle(this.bunderName);
        bundle.releaseAll();
    }
    private loadImg(){
        let bundle = cc.assetManager.getBundle(this.bunderName);
        let url:string = `plist/img1`;//"img128"//;`temporary_img_bottom07`;

        bundle.load(url, cc.SpriteFrame, (err, sf: cc.SpriteFrame) => {
            // console.trace(`load img!`);
            // sf.addRef();
            // comp.spriteFrame = sf;
            // this._sfs[url + ""] = sf;
            // cb && cb()
            if(!err){


                // console.log('cc.SpriteFrame',sf)
                let tex:cc.Texture2D = sf['_texture'];
                // tex._native;
                console.log(url,'['+tex['_native']+']',tex.getPixelFormat());
                
                this.spr.node.scaleX = this.spr.node.scaleY = this.imgScale;
                this.spr.spriteFrame = sf;
                // this.sf = sf;
                // that.scheduleOnce(()=>{
                //     // cc.assetManager.releaseAll();
                    // cc.assetManager.releaseAsset(sf);
                // },2)

            }else{
                console.log(err);
            }
        });
        
    }
}
