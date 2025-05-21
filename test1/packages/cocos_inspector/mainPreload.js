const _0x1189 = [
    'ync',
    'onfig.json',
    'join',
    '316Wtuzwk',
    'readConfig',
    '453FPZqtF',
    'path',
    'cktfn',
    '176701ZjzyVe',
    '../cocos-i',
    'existsSync',
    'parse',
    '10666urHpzl',
    'utf-8',
    'writeFileS',
    '223145PjvXvw',
    'stringify',
    'nspector-c',
    '95592YNikmT',
    '211794rHHAmK',
    'saveConfig',
    '660199JHUmnv',
    'config.jso',
    'uTayF',
    'readFileSy'
];
const _0x5f8e03 = _0x30b5;
function _0x30b5(_0x2dfcee, _0x4412fe) {
    _0x2dfcee = _0x2dfcee - (-0x1f3f + 0x2 * 0xd00 + 0x5f9);
    let _0x456d42 = _0x1189[_0x2dfcee];
    return _0x456d42;
}
(function (_0x2f38a4, _0x134b12) {
    const _0x454e93 = _0x30b5;
    while (!![]) {
        try {
            const _0x2ab320 = -parseInt(_0x454e93(0xd0)) + -parseInt(_0x454e93(0xc4)) * parseInt(_0x454e93(0xc6)) + -parseInt(_0x454e93(0xbb)) + -parseInt(_0x454e93(0xcd)) + -parseInt(_0x454e93(0xba)) + parseInt(_0x454e93(0xc9)) + parseInt(_0x454e93(0xbd));
            if (_0x2ab320 === _0x134b12)
                break;
            else
                _0x2f38a4['push'](_0x2f38a4['shift']());
        } catch (_0x34a4aa) {
            _0x2f38a4['push'](_0x2f38a4['shift']());
        }
    }
}(_0x1189, 0x13cae + -0x3d298 + 0x4e9d5));
let fs = require('fs'), path = require(_0x5f8e03(0xc7)), _configPath = path[_0x5f8e03(0xc3)](__dirname, _0x5f8e03(0xbe) + 'n'), __parentConfig = path[_0x5f8e03(0xc3)](__dirname, _0x5f8e03(0xca) + _0x5f8e03(0xd2) + _0x5f8e03(0xc2));
global[_0x5f8e03(0xc5)] = () => {
    const _0x3e5238 = _0x5f8e03, _0x113967 = { 'cktfn': _0x3e5238(0xce) };
    let _0x6e7e08 = '';
    return fs[_0x3e5238(0xcb)](__parentConfig) ? _0x6e7e08 = fs[_0x3e5238(0xc0) + 'nc'](__parentConfig, { 'encoding': _0x113967[_0x3e5238(0xc8)] }) : _0x6e7e08 = fs[_0x3e5238(0xc0) + 'nc'](_configPath, { 'encoding': _0x113967[_0x3e5238(0xc8)] }), JSON[_0x3e5238(0xcc)](_0x6e7e08);
}, global[_0x5f8e03(0xbc)] = _0x4e41b5 => {
    const _0xe11ad2 = _0x5f8e03, _0x2b82b5 = { 'uTayF': _0xe11ad2(0xce) };
    let _0x4fc598 = JSON[_0xe11ad2(0xd1)](_0x4e41b5);
    fs[_0xe11ad2(0xcf) + _0xe11ad2(0xc1)](__parentConfig, _0x4fc598, { 'encoding': _0x2b82b5[_0xe11ad2(0xbf)] });
};