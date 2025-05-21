'use strict';
let { execSync } = require('child_process')

/**结束前处理 */
function onBeforeBuildFinish(options, callback) {
    let prefabUrl = `db://assets/bunder1/prefab1.prefab`
    var prefabUuid = Editor.assetdb.urlToUuid(prefabUrl);

    options.bundles.forEach(bundle => {
        // // 通过 bundle.buildResults 访问 BuildResults
        // var buildResults = bundle.buildResults;
        // // 获得指定资源依赖的所有资源
        // if(buildResults){
        //     var depends = buildResults.getDependencies(prefabUuid);
        //     for (var i = 0; i < depends.length; ++i) {
        //         var uuid = depends[i];
        //         // 获得工程中的资源相对 URL（如果是自动图集生成的图片，由于工程中不存在对应资源，将返回空）
        //         var url = Editor.assetdb.uuidToUrl(uuid);
        //         // 获取资源类型
        //         var type = buildResults.getAssetType(uuid);
        //         // 获得工程中的资源绝对路径（如果是自动图集生成的图片，同样将返回空）
        //         var rawPath = Editor.assetdb.uuidToFspath(uuid);
        //         // 获得构建后的原生资源路径（原生资源有图片、音频等，如果不是原生资源将返回空）
        //         var nativePath = buildResults.getNativeAssetPath(uuid);

        //         Editor.log(`buildResults-------------------->${prefabUrl} depends on: ${rawPath || nativePath} (${type})`);
        //     }
        // }
        // else{
        //     Editor.log(`---------------------------------> didt found ${prefabUrl} `);
        // }
    });

    callback();
}

module.exports = {
    load() {
        Editor.Builder.on('before-change-files', onBeforeBuildFinish);
    },
    unload() {
        Editor.Builder.removeListener('before-change-files', onBeforeBuildFinish);
    },
    messages: {
        'startAction'() {

            var package1 = Editor.url('packages://foobar/panel/index.css',"utf-8");//插件目录
            Editor.log('startAction...'+execSync(`echo ${JSON.stringify(Editor.Project)}---Project.path is [${Editor.Project.path}] package is [${package1}]`).toString());
        }
    },
};
