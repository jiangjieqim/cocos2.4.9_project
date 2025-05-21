const { ccclass, property } = cc._decorator;

@ccclass
export class LoadImg extends cc.Component {
    private readonly bunderName: string = "bunder1";
    private spr: cc.Sprite = null;

    onLoad() {
        cc.assetManager.loadBundle(this.bunderName, null, (err, bundle: cc.AssetManager.Bundle) => {
            // cc.log(bundle);
            this.loadImg();
        });
        this.spr = this.getComponent(cc.Sprite);
    }

    private loadImg() {
        let bundle = cc.assetManager.getBundle(this.bunderName);
        let url: string = `plist/img1`;//"img128"//;`temporary_img_bottom07`;

        bundle.load(url, cc.SpriteFrame, (err, sf: cc.SpriteFrame) => {
            if (!err) {
                let tex: cc.Texture2D = sf['_texture'];
                console.log(url, '[' + tex['_native'] + ']', tex.getPixelFormat());
                this.spr.spriteFrame = sf;
            } else {
                console.log(err);
            }
        });
    }
}