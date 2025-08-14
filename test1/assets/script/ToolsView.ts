import { Http } from "./Http";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ToolsView extends cc.Component {
    // private progressBar: cc.ProgressBar;
    private build_excel_btn: cc.Node;
    private build_web_btn: cc.Node;
    private isRun: boolean = false;
    // private url:string = `http://192.168.110.149:8005/api`;
    onLoad() {
        this.build_excel_btn = this.node.getChildByName("build_excel_btn")
        this.build_excel_btn.on("click", this.onBuildExcel, this);

        this.build_web_btn = this.node.getChildByName("build_web_btn")
        this.build_web_btn.on("click", this.onBuildWeb, this);
        // this.progressBar = this.node.getChildByName("progressBar").getComponent(cc.ProgressBar);
    }

    private get url(){
        return `http://${window.location.host}/api`;
    }

    /**构建web */
    private onBuildWeb() {
        this.apiCall(this.build_web_btn,"trunk_web")
    }

    /**打表 */
    private onBuildExcel() {
        // cc.log(event.node);
        // console.log(window.location.host)
        this.apiCall(this.build_excel_btn,"dev")
    }

    private apiCall(btn:cc.Node,str:string){
        btn.active = false;
        
        let body = `func=build&t=${str}`;//trunk_web
        let time = Date.now();
        this.isRun = true;
        Http.getFormData(this.url, "", null, body, (res) => {
            this.isRun = false;
            console.log(res);
            // this.build_web_btn.active = true;
            btn.active = true;
            this.node.getChildByName("lb_sec").getComponent(cc.Label).string = ((Date.now() - time) / 1000).toFixed(2) + "sec"
        });
    }

    update(t) {
        this.isRun && (this.node.getChildByName("sp_rot").angle += (500 * t));
    }
}
