import { Byte } from "./byte";
import { ByteCfg } from "./ByteCfg";
import { LoadBinFile } from "./LoadBinFile";

const {ccclass} = cc._decorator;

@ccclass
export class BinLoadParse extends cc.Component{

    private readonly bunderName: string = "bunder1";

    private _loadAllBin:LoadBinFile;

    onLoad() {
        this._loadAllBin = new LoadBinFile();
        // console.log();


        cc.assetManager.loadBundle(this.bunderName, null, (err, bundle: cc.AssetManager.Bundle) => {
            this.onComplete();
        });
    }



    private parseCell(){
        let bundle = cc.assetManager.getBundle(this.bunderName);
        bundle.load(`table/cfg_dungeon_config`, cc.BufferAsset, this.onArrayBufferComplete);
    }

    
    private onComplete() {

        //解析all配置

        this._loadAllBin.load(this,this.onLoadEnd);
        //单个配置解析
        // this.parseCell();
    }

    private onLoadEnd(){
        // console.log(this._loadAllBin.dataList);
        this.node.parent.getChildByName("lb").getComponent(cc.Label).string = "JSZip-->"+((typeof JSZip)+","+this._loadAllBin.dataList.length);
        console.log(this._loadAllBin.dataList);
    }

    private onArrayBufferComplete(err, _txt: cc.BufferAsset){

        function parse(buffer:ArrayBuffer){
            let ns = new Byte();
            // let ba = bs.readArrayBuffer(buffer.byteLength);//bs.readUint8Array(bs.pos,len);//
            ns.writeArrayBuffer(buffer);
            let b = new ByteCfg(ns);
            // b.indexKEY = "id";
            b.parse();

            console.log(b.list.length);
            console.log(b.list);
        }
 
        if (!err) {
            new window['TestLib']();

            // console.log("TestLib-->",typeof window['TestLib']);



            // let tex: cc.Texture2D = sf['_texture'];
            // console.log(url, '[' + tex['_native'] + ']', tex.getPixelFormat());
            // this.spr.spriteFrame = sf;
            console.log(_txt);
            
            let buffer:ArrayBuffer =_txt['_buffer'];  //ArrayBuffer
            // console.log("byteLength:"+buffer.byteLength);
            parse(buffer);
        } else {
            console.log(err);
        }
    }

   
}