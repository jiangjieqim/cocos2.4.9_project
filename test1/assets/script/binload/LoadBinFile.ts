import { Byte } from "./byte";
import { ByteCfg } from "./ByteCfg";
import { JSZipVer0, JSZipVer1 } from "./JSZipVer";
enum EJSZipVer{
    Ver0 = 0,
    Ver1 = 1,
}
/**
 * https://stuk.github.io/jszip/
 */
export class LoadBinFile implements ILoadBinFile{
    dataList:any[];
    readonly Name: string = "all";
    private time:number;
    private _that;
    private _callBack:Function;
    // private readonly ver:EJSZipVer = EJSZipVer.Ver1;
    private jsZipMap = {};
    constructor() {
        this.jsZipMap[EJSZipVer.Ver0] = new JSZipVer0();
        this.jsZipMap[EJSZipVer.Ver1] = new JSZipVer1();
    }

    private parseBs(bs: Byte) {
        let cnt = bs.readUint32();
        let _list = [];
        this.dataList = _list;
        for (let i = 0; i < cnt; i++) {

            // console.log("pos:",bs.pos);
            let len = bs.readUint32();
            let ns = new Byte();
            let ba = bs.readArrayBuffer(len);//bs.readUint8Array(bs.pos,len);//
            ns.writeArrayBuffer(ba);
            let b = new ByteCfg(ns);

            b.parse();
            // console.log(i + "/" + cnt + "------>", b.tableName);

            _list.push(b);
        }

        console.log(`parse use ${(Date.now() - this.time)} ms`)
        
        // console.log(_list);
        this.onEnd();
    }

    private onEnd(){
        this._callBack.call(this._that);
    }

    startParse(buf:ArrayBuffer){
        let bs = new Byte();
        bs.endian = Byte.LITTLE_ENDIAN;
        bs.writeArrayBuffer(buf);
        bs.pos = 0;
        console.log(`${this.Name} ${bs.length} bytes`);
        this.parseBs(bs);
        bs.clear();
    }

    load(_that,_callBack:Function) {
        this._that = _that;
        this._callBack = _callBack;
        this.time = Date.now();
        let that = this;
        function onAllComplete(err, _txt: cc.BufferAsset) {
            if (!err) {
                let bridge:IJSZipBridge = that.jsZipMap[EJSZipVer.Ver1];
                bridge.load(_txt['_buffer'],that);
            } else {
                console.log(err);
            }
        }

        let bundle = cc.assetManager.getBundle(`bunder1`);
        bundle.load(`table/${this.Name}`, cc.BufferAsset, onAllComplete);
    }
}
