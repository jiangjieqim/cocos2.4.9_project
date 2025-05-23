interface IGameCore{
    showMsg(str:string);
    getQueryParam(name: string) ;
}
declare let gameCore:IGameCore;

declare let debug:boolean;