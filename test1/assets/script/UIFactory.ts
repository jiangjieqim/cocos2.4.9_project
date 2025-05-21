export class UIFactory{
    static bindClick(btn:cc.Node,that,func:Function){
        btn.on("click",func,that);
    }
    static find(n: cc.Node, url: string): cc.Node {
        let arr = url.split("/");
        let find: cc.Node = n
        while (arr.length) {
            let s = arr.shift();
            if(find){
                find = find.getChildByName(s);
            }
        }
        return find;
    }

    static bindBtn(node:cc.Node,url:string,that,func:Function){
        let n = this.find(node,url);
        this.bindClick(n,that,func);
    }
}