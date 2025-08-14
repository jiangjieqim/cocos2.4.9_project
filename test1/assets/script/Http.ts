// import { MyUtil, Tools } from "../util/Tools";
// import { FrameID_Game, UIManager } from "../manager/common/UIManager";
// import { GameVersion } from "../global/gameDefine";

let GameVersion = 1.0;
export var Http = {
    pCopyData: { "mistakeSwitch": 0, "bannerSwitch": 1, "bannerPullLimit": 15, "forbidSwitch": 1, "version": "1.0.0", "expansions": [{ "version": "1.0.0", "fieldKey": "BANNER_IDS", "fieldValue": "adunit-88f3b9086727aff2;adunit-0f1564ece408812d;adunit-981e9238bb9bd805;adunit-2df932a43555678b;adunit-757a0b675dc4b7f9;adunit-1bb4862645c3cdf2;adunit-988defbd91f2b451;adunit-987db2c682b04d6;adunit-6f577c472e8a18ab9;adunit-6f84821813ba9547" }, { "version": "1.0.0", "fieldKey": "VIDEO_IDS", "fieldValue": "adunit-15f7d033c75a448c;adunit-b7765cc37a00aadc;adunit-2b6896df942e6130;adunit-eed592a66e97896a;adunit-dab0c67e46a1cd6f" }, { "version": "1.0.0", "fieldKey": "BANNER_REFRESH_TIME", "fieldValue": "" }, { "version": "1.0.0", "fieldKey": "MISLEAD_BUTTON_INTERVAL", "fieldValue": "" }, { "version": "1.0.0", "fieldKey": "MISLEAD_FRAME_INTERVAL", "fieldValue": "" }, { "version": "1.0.0", "fieldKey": "BANNER_MAINCITY_COUNT", "fieldValue": "" }, { "version": "1.0.0", "fieldKey": "ADD_POWER_TYPE", "fieldValue": "" }, { "version": "1.0.0", "fieldKey": "SIGNIN_TYPE", "fieldValue": "1" }] },
    // calback(err, data)
    // get: function(url, path, header, params, callback) {
    //     var xhr = cc.loader.getXMLHttpRequest();
    //     xhr.timeout = 5000;
    //     var requestURL = url + path;
    //     if (params) {
    //         requestURL = requestURL + "?" + params;
    //     }
    //     xhr.open("GET",requestURL, true);

    //     if (header) {
    //         // Tools.log("http get header:"+header.vHeader+"  "+header.vValue);
    //         xhr.setRequestHeader(header.vHeader, header.vValue);
    //     }

    //     // Tools.log("Http get url:"+requestURL);

    //     xhr.onreadystatechange = function() {
    //         if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
    //             try {
    //                 var ret = xhr.responseText;
    //                 ret = Tools.unexpectedTokenInJSON(ret);
    //                 ret = JSON.parse(ret);
    //                 // Tools.log("xhr.onreadystatechange: "+JSON.stringify(ret.data));
    //                 if(callback != null){
    //                     callback(ret.data);
    //                 }

    //                 return;
    //             } catch (e) {
    //                 // Tools.log("http get exception:"+e);
    //             }
    //         }
    //         else {
    //             // Tools.log(xhr.readyState + ":" + xhr.status, null);
    //         }
    //     };

    //     xhr.send();
    //     return xhr;
    // },

    
    getFormData(url, path, params, body, callback?) {
        // text/plains
        // URLSearchParams
        var xhr = new XMLHttpRequest();//从服务器获取数据 
        var _self = this;
        // xhr.timeout = 5000;
        var requestURL = url + path + "?" + body;
        xhr.open("GET", requestURL, true);

        if (params && params.noHeader) {

            // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        } else {

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback && callback(xhr.responseText)
            }
        };
        xhr.send();
        return xhr
    },
    post(url, path, params, body, callback?) {
        var xhr = new XMLHttpRequest();//从服务器获取数据 
        var _self = this;
        xhr.timeout = 5000;
        var requestURL = url + path;
        // xhr.ontimeout = function() {            
        //     if(callback != null)
        //         callback(_self.pCopyData);
        // }
        if (params && params.timeout) {
            var tt = setTimeout(function () {
                console.log("http post settimeout");
                if (callback != null) {
                    _self.pCopyData.version = GameVersion;
                    callback(_self.pCopyData);
                }
            }, 5000);
        }
        xhr.open("POST", requestURL, true);
        if (cc.sys.isNative) {
            // xhr.setRequestHeader("Accept-Encoding","gzip,deflate","text/html;charset=UTF-8");
        }

        if (body) {
            console.log("body:" + JSON.stringify(body));
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        console.log("Http post url:" + requestURL);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (params && params.timeout)
                    clearTimeout(tt);
                // Tools.log("xhr.readyState:"+xhr.readyState+"   xhr.status:"+xhr.status);
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        let ret = JSON.parse(xhr.responseText);
                        console.log("xhr.onreadystatechange code: " + JSON.stringify(ret.code));
                        console.log("xhr.onreadystatechange data: " + JSON.stringify(ret.data));
                        if (ret.code != 0) {
                            console.log("error:" + ret.errorMsg);
                            // UIManager.getFrame(FrameID_Game.FRAME_Prompt).showMessage(ret.errorMsg);

                        } else {
                            if (callback != null) {
                                // Tools.log("onreadystatechange:", xhr.readyState);
                                callback(ret.data);
                            }
                        }
                        return;
                    } catch (e) {
                        console.log("xhr catch error:" + e);
                        if (callback != null) {
                            _self.pCopyData.version = GameVersion;
                            callback(_self.pCopyData);
                        }
                    }
                } else {
                    if (callback != null) {
                        _self.pCopyData.version = GameVersion;
                        callback(_self.pCopyData);
                    }
                }
            }
        };
        if (body) {
            try {
                xhr.send(body);
            } catch (e) {
                if (params && params.timeout)
                    clearTimeout(tt);
                if (callback != null) {
                    _self.pCopyData.version = GameVersion;
                    callback(_self.pCopyData);
                }
            }
        }
        return xhr;
    },

    download: function (url, path, params, callback) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;
        var requestURL = url + path;
        if (params) {
            requestURL = requestURL + "?" + params;
        }

        xhr.responseType = "arraybuffer";
        xhr.open("GET", requestURL, true);
        // if (cc.sys.isNative) {
        //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
        // }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var buffer = xhr.response;
                var dataview = new DataView(buffer);
                var ints = new Uint8Array(buffer.byteLength);
                for (var i = 0; i < ints.length; i++) {
                    ints[i] = dataview.getUint8(i);
                }
                callback(null, ints);
            }
            else {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };
        xhr.send();
        return xhr;
    },

    checkArea: function () {
        var url = "https://ifconfig.co/json";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                console.log(response);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    },

};

