export class MemUtils {
    private static calculateTextureMemory(texture: cc.Texture2D): number {
        const pixelCount = texture.width * texture.height;
        let bytesPerPixel = 4; // 默认为RGBA8888

        // 根据实际格式调整
        if (texture.getPixelFormat() === cc.Texture2D.PixelFormat.RGB888) {
            bytesPerPixel = 3;
        } else if (texture.getPixelFormat() === cc.Texture2D.PixelFormat.RGBA4444 ||
            texture.getPixelFormat() === cc.Texture2D.PixelFormat.RGB565) {
            bytesPerPixel = 2;
        } else if (texture.getPixelFormat() === cc.Texture2D.PixelFormat.A8) {
            bytesPerPixel = 1;
        }

        // 考虑mipmap
        let v = 1;
        if(texture['hasMipmaps'] && texture['hasMipmaps']()){
            v = 1.33;
        }

        const mipmapFactor = v;

        return pixelCount * bytesPerPixel * mipmapFactor;
    }

    // 计算所有纹理的总内存
    static calculateTotalTextureMemory(): number {
        let total = 0;
        cc.assetManager.assets.forEach((asset) => {
            if (asset instanceof cc.Texture2D) {
                total += this.calculateTextureMemory(asset);
            }
        });

        // const totalMB = total;
        // cc.log(`Total texture memory: ${total}`);
        return total;
    }
}