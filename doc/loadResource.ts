/**
 * 资源加载
 * @param groupName 资源分组名称
 * @param url 资源加载路径
 * @param type 资源类型
 * @param successCall 加载成功回调
 * @param failCall 加载失败回调
 * @param bundleName bundle名称
 */
loadResource(groupName: string, url: string, type, successCall ?: (name, res) => void, failCall ?: (err) => void, bundleName: BundleName | string = BundleName.resources, frameID ?: number) {
    if (this.res[groupName] == void (0))
        this.res[groupName] = [];
    // setTimeout(() => {
    if (this.res[groupName][url] == void (0) || !this.res[groupName][url].loaded) {
        let bundle = this.bundle(bundleName);
        bundle.load(url, type, successCall, failCall, groupName, frameID);
    } else {

        let isRun = true;
        if (frameID) {
            const ui = UIManager.getFrame(frameID) as UIBase
            isRun = ui.bActived;
        }
        if (isRun)
            successCall && successCall(this.res[groupName][url].name, this.res[groupName][url]);
    }
    // }, 0);
}