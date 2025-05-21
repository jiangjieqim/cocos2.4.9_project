// declare function JSZip(data?);
interface IJSZip{
    files;
}

interface IJSZipBridge{
    load(buffer: ArrayBuffer,that:ILoadBinFile);
}

interface ILoadBinFile{
    startParse(buf:ArrayBuffer);
    Name:string;
}
//window['JSZip'];
declare let JSZip;