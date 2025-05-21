//#region 使用JSZip库
/*
+--------+
|设置步骤|
+--------+

1.修改微信模板
build-templates\wechatgame\game.js

line 15    window['JSZip'] = require('./jszip');
line 16    require('./main'); // TODO: move to common
line 17    // Adjust devicePixelRatio

2.修改抖音模板

3.修改preview-templates模板

    将 C:\ProgramData\cocos\editors\Creator\2.4.9\resources\templates\preview-template\preview-templates  
    放置到
        project-folder
        |--assets
        |--build
        |--preview-templates
*/
//#endregion
export class JSZipVer0 implements IJSZipBridge{
    load(buffer: ArrayBuffer,that:ILoadBinFile){
        let zip: IJSZip = JSZip(buffer);
        let buf = zip.files[`${that.Name}.bin`].asArrayBuffer();
        that.startParse(buf);
    }
}
//#region how to use
export class JSZipVer1 implements IJSZipBridge{
    private binaryStringToArrayBuffer(binaryString) {
        // Calculate the length of the binary string
        const length = binaryString.length;
        
        // Create a new ArrayBuffer with the appropriate size
        const buffer = new ArrayBuffer(length);
        
        // Create a Uint8Array view of the buffer
        const view = new Uint8Array(buffer);
        
        // Iterate through each character in the string
        for (let i = 0; i < length; i++) {
            // Get the character code and assign it to the view
            view[i] = binaryString.charCodeAt(i);
        }
        
        return buffer;
    }
    load(buffer: ArrayBuffer,that:ILoadBinFile){
        let __that = this;

        let zObj = new JSZip();
        // buffer:ArrayBuffer  原数据
        zObj.loadAsync(buffer).then(function(contents) {
            return contents.files[`${that.Name}.bin`].async("binarystring");
        }).then(function(content) {

            //解压后数据流
            let buf1:ArrayBuffer = __that.binaryStringToArrayBuffer(content);
            that.startParse(buf1);
        });
    }
}
//#endregion