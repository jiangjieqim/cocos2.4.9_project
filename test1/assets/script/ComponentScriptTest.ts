@cc._decorator.ccclass
export class ComponentScriptTest extends cc.Component{
    onLoad(){
        console.log("onLoad");
    }
    start(){
        console.log("start");
        // this.node.destroy();
    
        // let spr = this.addComponent(cc.Sprite);
        // spr.spriteFrame
    }
    onDestroy(){
        console.log("onDestroy");
    }
    onDisable(){
        console.log("onDisable");
    }
    onEnable(){
        console.log("onEnable");
    }
}