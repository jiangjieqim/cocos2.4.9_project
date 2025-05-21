'use strict';
const _0x3751 = [
    'setMenuBar',
    'ent\x20size',
    'wSwXX',
    'asset',
    'webRequest',
    'click',
    'defaultSes',
    'd.js',
    'type',
    'ders',
    'ZpLyQ',
    'qOhbh',
    'LEQjr',
    'Path',
    'url',
    ':focusNode',
    'dsuNI',
    'assets:hin',
    'closed',
    '&mode=',
    'mainPreloa',
    'resize',
    'setContent',
    'executeJav',
    'has\x20tray\x20a',
    'Mode()',
    'electron.h',
    './icon.png',
    'showWindow',
    'name',
    'index_low_',
    'fANMh',
    'webContent',
    'config.jso',
    'isPortrait',
    'getContent',
    'setReqHead',
    'requestHea',
    'loadURL',
    'Visibility',
    'JqZJS',
    'version',
    '13tBuuak',
    '3401MhiTCC',
    'de(',
    '18997mcYJcj',
    'ver',
    './tj',
    '16rrkmPp',
    'GDwHA',
    'disableWeb',
    'join',
    'tml',
    '7HaHLwq',
    'ggleSimple',
    'setContext',
    'sFBXn',
    'Windows',
    'Window',
    'MqdUI',
    'ector',
    'bind',
    'Selection',
    'EteoN',
    'simpleMode',
    'PtzXA',
    'setImage',
    'WvoEj',
    'BdnhE',
    'focusAsset',
    'setMenu',
    'electron',
    'OiFLU',
    'OpenDevToo',
    '4|3|0|2|1',
    'drUKu',
    'process',
    'Ipc',
    'removeAllL',
    'then',
    'uhAdQ',
    'file://',
    'VIyhU',
    'versions',
    '1XwqvDd',
    'setHeader',
    'json',
    'onfig.json',
    'dEVPy',
    'nspector-c',
    'lready!',
    'v.switchMo',
    '87EJCZek',
    'size',
    'fixed\x20cont',
    'readFileSy',
    'insertCSS',
    '1317623gtPpmF',
    'tryShowWin',
    'onBeforeSe',
    'dLIcm',
    'MAtib',
    'IGKfk',
    'PreviewSer',
    'Menu',
    'ZKhzf',
    'dow',
    'how',
    'nativeWin',
    'aScript',
    '52957mkKYuq',
    'index.html',
    'exports',
    'nfigDataFo',
    'path',
    'select',
    'i\x20Mode',
    'ector\x20v',
    'openDevToo',
    'focusNode',
    'createFrom',
    '1046759NjoGFU',
    'JWFjD',
    '1042280wuOugG',
    ':focusAsse',
    'ndHeaders',
    'isteners',
    'existsSync',
    'setting.to',
    'parse',
    'show',
    'xYKjv',
    'destroy',
    '../cocos-i',
    '1jppXFb',
    'Cocos\x20Insp',
    'registerHe',
    'zokkx',
    'Sec',
    'aderUrls',
    'sendToAll',
    '?port=',
    'node',
    'includes',
    'Toggle\x20Min',
    'WUtby',
    'previewPor',
    './package.',
    '#2e2c29',
    'warn',
    'returnValu',
    'ready-to-s',
    'append',
    'rMain',
    'pZaWS',
    'utf-8',
    'Size',
    'HupTd',
    'setting.co',
    'FddEd',
    '15881vCZpPk',
    'eRoxm',
    'NqIZP',
    'error',
    'qmEgg',
    'sion',
    'split'
];
const _0x2e9518 = _0x50d9;
(function (_0x4fbf0e, _0x317149) {
    const _0x10a847 = _0x50d9;
    while (!![]) {
        try {
            const _0x3c9d5b = parseInt(_0x10a847(0x1d2)) * -parseInt(_0x10a847(0x150)) + parseInt(_0x10a847(0x152)) + parseInt(_0x10a847(0x1a8)) * parseInt(_0x10a847(0x1a9)) + parseInt(_0x10a847(0x145)) * parseInt(_0x10a847(0x1b3)) + -parseInt(_0x10a847(0x177)) * -parseInt(_0x10a847(0x1da)) + parseInt(_0x10a847(0x1ab)) * parseInt(_0x10a847(0x1ae)) + parseInt(_0x10a847(0x1df)) * -parseInt(_0x10a847(0x15d));
            if (_0x3c9d5b === _0x317149)
                break;
            else
                _0x4fbf0e['push'](_0x4fbf0e['shift']());
        } catch (_0x7e0789) {
            _0x4fbf0e['push'](_0x4fbf0e['shift']());
        }
    }
}(_0x3751, 0x7326e + -0xd * -0x4c81 + 0xcbae));
const {Tray, BrowserWindow, nativeImage, app, remote, ipcMain, session, Menu, MenuItem} = require(_0x2e9518(0x1c5)), path = require(_0x2e9518(0x149)), pcs = require(_0x2e9518(0x1ca)), os = require('os'), folder = '', devTools = ![];
function _0x50d9(_0x5a43b3, _0x397c9b) {
    _0x5a43b3 = _0x5a43b3 - (0x556 * -0x5 + 0x875 + 0x5 * 0x3e6);
    let _0x4e6ccb = _0x3751[_0x5a43b3];
    return _0x4e6ccb;
}
let win, tray = null, mode = -0x815 + -0x290 + 0x5 * 0x221, unloaded = ![];
const PKG_NAME = require(_0x2e9518(0x16a) + _0x2e9518(0x1d4))[_0x2e9518(0x19b)], PKG_VERSION = require(_0x2e9518(0x16a) + _0x2e9518(0x1d4))[_0x2e9518(0x1a7)];
let {ebtMain} = require(_0x2e9518(0x1ad)), fs = require('fs'), _configPath = path[_0x2e9518(0x1b1)](__dirname, _0x2e9518(0x19f) + 'n'), __parentConfig = path[_0x2e9518(0x1b1)](__dirname, _0x2e9518(0x15c) + _0x2e9518(0x1d7) + _0x2e9518(0x1d5));
function readConfig() {
    const _0xb99750 = _0x2e9518, _0x5be4cf = { 'qmEgg': _0xb99750(0x172) };
    let _0x1d9bca = '';
    return fs[_0xb99750(0x156)](__parentConfig) ? _0x1d9bca = fs[_0xb99750(0x1dd) + 'nc'](__parentConfig, { 'encoding': _0x5be4cf[_0xb99750(0x17b)] }) : _0x1d9bca = fs[_0xb99750(0x1dd) + 'nc'](_configPath, { 'encoding': _0x5be4cf[_0xb99750(0x17b)] }), JSON[_0xb99750(0x158)](_0x1d9bca);
}
let config = readConfig(), disableWebSec = Boolean(config[_0x2e9518(0x1b0) + _0x2e9518(0x161)]), dw = -0x2572 + -0x1b62 + 0x159c * 0x3, dh = 0x1b32 + -0x3 * -0x3e3 + -0x26db;
function changeDWH() {
    const _0x576613 = _0x2e9518, _0x14ecac = {
            'FddEd': _0x576613(0x1b7),
            'MqdUI': function (_0x510913, _0x15ac3a) {
                return _0x510913 + _0x15ac3a;
            }
        };
    dw = config[_0x576613(0x1be)] ? config[_0x576613(0x1a0)] ? config[_0x576613(0x1db)][0x134b * 0x1 + 0x1 * 0xd33 + -0x207e] : config[_0x576613(0x1db)][-0x635 + -0x72c + 0x6 * 0x23b] : -0xef * -0x13 + 0x1b0 + -0x249 * 0x7;
    if (os[_0x576613(0x186)]()[_0x576613(0x166)](_0x14ecac[_0x576613(0x176)])) {
    }
    dh = config[_0x576613(0x1be)] ? _0x14ecac[_0x576613(0x1b9)](config[_0x576613(0x1a0)] ? config[_0x576613(0x1db)][-0x2528 + -0x102 + -0x3 * -0xcb9] : config[_0x576613(0x1db)][-0x1 * 0x1ec1 + 0x26b6 + -0x7f5], 0x1 * 0x13f7 + -0x94a * -0x3 + 0x17d1 * -0x2) : -0xf9c + -0x253a + 0x1 * 0x372e;
}
changeDWH();
const customHeaders = {};
module[_0x2e9518(0x147)] = {
    async 'load'() {
        const _0xef588c = _0x2e9518;
        ipcMain['on'](PKG_NAME + _0xef588c(0x18d), this[_0xef588c(0x14e)][_0xef588c(0x1bb)](this)), ipcMain['on'](PKG_NAME + (_0xef588c(0x153) + 't'), this[_0xef588c(0x1c3)][_0xef588c(0x1bb)](this)), ipcMain['on'](_0xef588c(0x15f) + _0xef588c(0x162), this[_0xef588c(0x15f) + _0xef588c(0x162)][_0xef588c(0x1bb)](this)), ipcMain['on'](_0xef588c(0x1a2) + 'er', this[_0xef588c(0x1d3)][_0xef588c(0x1bb)](this));
    },
    'unload'() {
        const _0x57fc2e = _0x2e9518, _0x84af98 = { 'EteoN': _0x57fc2e(0x1c8) }, _0x5bca0a = _0x84af98[_0x57fc2e(0x1bd)][_0x57fc2e(0x17d)]('|');
        let _0x11b4a4 = -0x2048 + 0x41f * 0x1 + -0x9 * -0x321;
        while (!![]) {
            switch (_0x5bca0a[_0x11b4a4++]) {
            case '0':
                ipcMain[_0x57fc2e(0x1cc) + _0x57fc2e(0x155)](PKG_NAME + (_0x57fc2e(0x153) + 't'));
                continue;
            case '1':
                ipcMain[_0x57fc2e(0x1cc) + _0x57fc2e(0x155)](_0x57fc2e(0x1a2) + 'er');
                continue;
            case '2':
                ipcMain[_0x57fc2e(0x1cc) + _0x57fc2e(0x155)](_0x57fc2e(0x15f) + _0x57fc2e(0x162));
                continue;
            case '3':
                ipcMain[_0x57fc2e(0x1cc) + _0x57fc2e(0x155)](PKG_NAME + _0x57fc2e(0x18d));
                continue;
            case '4':
                unloaded = !![];
                continue;
            }
            break;
        }
    },
    'focusNode'(_0xedf4d9, _0x24f40e) {
        const _0x555d55 = _0x2e9518, _0x214ac1 = { 'JWFjD': _0x555d55(0x165) };
        Editor[_0x555d55(0x1bc)][_0x555d55(0x14a)](_0x214ac1[_0x555d55(0x151)], _0x24f40e);
    },
    'focusAsset'(_0x3250f8, _0x44dec4) {
        const _0x536dd3 = _0x2e9518, _0x588767 = {
                'wSwXX': _0x536dd3(0x18f) + 't',
                'ZKhzf': _0x536dd3(0x181)
            };
        Editor[_0x536dd3(0x1cb)][_0x536dd3(0x163)](_0x588767[_0x536dd3(0x180)], _0x44dec4), Editor[_0x536dd3(0x1bc)][_0x536dd3(0x14a)](_0x588767[_0x536dd3(0x1e7)], _0x44dec4);
    },
    'registerHeaderUrls'(_0x48851e, _0x591b05) {
        const _0x1e4ffd = _0x2e9518, _0x4f9c43 = {
                'JqZJS': function (_0x470518, _0x4490d3) {
                    return _0x470518(_0x4490d3);
                }
            }, _0x2a7f32 = { 'urls': _0x591b05 };
        session[_0x1e4ffd(0x184) + _0x1e4ffd(0x17c)][_0x1e4ffd(0x182)][_0x1e4ffd(0x1e1) + _0x1e4ffd(0x154)](_0x2a7f32, (_0x3bb8dd, _0x40bc7f) => {
            const _0x36925b = _0x1e4ffd;
            try {
                let _0x2481be = customHeaders[_0x3bb8dd[_0x36925b(0x18c)]];
                for (let _0x23e3ad in _0x2481be) {
                    _0x3bb8dd[_0x36925b(0x1a3) + _0x36925b(0x187)][_0x23e3ad] = _0x2481be[_0x23e3ad];
                }
                _0x4f9c43[_0x36925b(0x1a6)](_0x40bc7f, { 'requestHeaders': _0x3bb8dd[_0x36925b(0x1a3) + _0x36925b(0x187)] });
            } catch (_0x506e7d) {
                Editor[_0x36925b(0x17a)](_0x506e7d), _0x506e7d[_0x36925b(0x16d) + 'e'] = ![];
            }
        }), _0x48851e[_0x1e4ffd(0x16d) + 'e'] = !![];
    },
    'setHeader'(_0x47aeeb, _0x5e6af0, _0xda8a6b) {
        const _0x2d5b1d = _0x2e9518;
        customHeaders[_0x5e6af0] = _0xda8a6b, _0x47aeeb[_0x2d5b1d(0x16d) + 'e'] = !![];
    },
    'showWindow'() {
        const _0xa73dac = _0x2e9518, _0x1c268d = {
                'zokkx': function (_0x57cdf2) {
                    return _0x57cdf2();
                },
                'dsuNI': function (_0x4f6769, _0xad8354) {
                    return _0x4f6769 != _0xad8354;
                },
                'ZpLyQ': _0xa73dac(0x1dc) + _0xa73dac(0x17f),
                'WUtby': _0xa73dac(0x175) + _0xa73dac(0x148) + _0xa73dac(0x170),
                'drUKu': _0xa73dac(0x15e) + _0xa73dac(0x1ba),
                'VIyhU': function (_0x3f9ed3, _0x28ce7e) {
                    return _0x3f9ed3 + _0x28ce7e;
                },
                'xYKjv': _0xa73dac(0x15e) + _0xa73dac(0x14c),
                'PtzXA': _0xa73dac(0x16b),
                'eRoxm': _0xa73dac(0x193),
                'dEVPy': _0xa73dac(0x16e) + _0xa73dac(0x1e9),
                'OiFLU': _0xa73dac(0x190),
                'LEQjr': function (_0x15e7ca, _0x13203f) {
                    return _0x15e7ca >= _0x13203f;
                },
                'IGKfk': function (_0x15aa94, _0x380126) {
                    return _0x15aa94 + _0x380126;
                },
                'sFBXn': function (_0x5bf82e, _0x15002a) {
                    return _0x5bf82e + _0x15002a;
                },
                'NqIZP': function (_0x195d2a, _0x1acf71) {
                    return _0x195d2a + _0x1acf71;
                },
                'uhAdQ': _0xa73dac(0x164),
                'MAtib': _0xa73dac(0x191)
            };
        if (win) {
            win[_0xa73dac(0x159)](), win[_0xa73dac(0x19e) + 's'][_0xa73dac(0x195) + _0xa73dac(0x1eb)](_0xa73dac(0x1d9) + _0xa73dac(0x1aa) + mode + ')');
            return;
        }
        let _0x50eedc = new Editor[(_0xa73dac(0x1b8))](_0x1c268d[_0xa73dac(0x1c9)], {
            'width': dw,
            'height': dh,
            'title': _0x1c268d[_0xa73dac(0x1d0)](_0x1c268d[_0xa73dac(0x15a)], PKG_VERSION),
            'backgroundColor': _0x1c268d[_0xa73dac(0x1bf)],
            'webPreferences': {
                'useContentSize': !![],
                'enablePreferredSizeMode': ![],
                'preferredSizeMode': ![],
                'webviewTag': !![],
                'nodeIntegration': !![],
                'enableRemoteModule': !![],
                'sandbox': ![],
                'devTools': devTools,
                'contextIsolation': ![],
                'webSecurity': !disableWebSec,
                'resizable': !config[_0xa73dac(0x1be)],
                'minimizable': !config[_0xa73dac(0x1be)],
                'maximizable': !config[_0xa73dac(0x1be)],
                'preload': path[_0xa73dac(0x1b1)](__dirname, folder + (_0xa73dac(0x192) + _0xa73dac(0x185)))
            }
        });
        win = _0x50eedc[_0xa73dac(0x1ea)];
        win[_0xa73dac(0x19e) + 's'] && (win[_0xa73dac(0x19e) + 's'][_0xa73dac(0x1de)] = function (..._0x1081ab) {
        });
        try {
            win[_0xa73dac(0x1c4)](null), win[_0xa73dac(0x17e) + _0xa73dac(0x1a5)](![]), win[_0xa73dac(0x17e) + _0xa73dac(0x1a5)] = win[_0xa73dac(0x1c4)] = function (_0x5a3b4d) {
            };
        } catch (_0xae32d3) {
        }
        win['on'](_0x1c268d[_0xa73dac(0x178)], () => {
            const _0x26a693 = _0xa73dac, _0x484697 = {
                    'WvoEj': function (_0x1b5ae7) {
                        const _0xca6367 = _0x50d9;
                        return _0x1c268d[_0xca6367(0x160)](_0x1b5ae7);
                    },
                    'GDwHA': function (_0x4b5b1a, _0x29f5a2) {
                        const _0x16468e = _0x50d9;
                        return _0x1c268d[_0x16468e(0x18e)](_0x4b5b1a, _0x29f5a2);
                    },
                    'pZaWS': _0x1c268d[_0x26a693(0x188)]
                };
            try {
                win[_0x26a693(0x19e) + 's'][_0x26a693(0x195) + _0x26a693(0x1eb)](_0x1c268d[_0x26a693(0x168)])[_0x26a693(0x1cd)](function (_0xe57cdb) {
                    const _0x32d066 = _0x26a693;
                    if (_0xe57cdb)
                        config = _0xe57cdb;
                    _0x484697[_0x32d066(0x1c1)](changeDWH);
                    if (config[_0x32d066(0x1be)] && win[_0x32d066(0x19e) + 's']) {
                        let _0x4e9b21 = win[_0x32d066(0x1a1) + _0x32d066(0x173)]();
                        (_0x484697[_0x32d066(0x1af)](dw, _0x4e9b21[0x239c + 0x643 + 0xdf5 * -0x3]), _0x484697[_0x32d066(0x1af)](dh, _0x4e9b21[-0x2084 + -0x10ed + -0x18b9 * -0x2])) && (win[_0x32d066(0x194) + _0x32d066(0x173)](dw, dh), devTools && Editor[_0x32d066(0x16c)](_0x484697[_0x32d066(0x171)]));
                    }
                });
            } catch (_0x3056cb) {
                Editor[_0x26a693(0x17a)](_0x3056cb);
            }
        }), win['on'](_0x1c268d[_0xa73dac(0x1d6)], () => {
            const _0x224443 = _0xa73dac;
            win[_0x224443(0x159)]();
        }), win['on'](_0x1c268d[_0xa73dac(0x1c6)], () => {
            const _0x3be805 = _0xa73dac;
            win[_0x3be805(0x15b)](), win = null;
            if (tray)
                tray[_0x3be805(0x15b)]();
            tray = null;
        });
        let _0x25d52c = folder + (_0xa73dac(0x19c) + _0xa73dac(0x198) + _0xa73dac(0x1b2));
        _0x1c268d[_0xa73dac(0x18a)](process[_0xa73dac(0x1d1)][_0xa73dac(0x1c5)][_0xa73dac(0x17d)]('.')[0x26d + -0x7 * 0x95 + 0xd3 * 0x2], 0x6 * 0x511 + -0x5 * 0x98 + -0x1b69) && (_0x25d52c = folder + _0xa73dac(0x146));
        let _0x18dd93 = path[_0xa73dac(0x1b1)](__dirname, _0x1c268d[_0xa73dac(0x1d0)](_0x1c268d[_0xa73dac(0x1e4)](_0x1c268d[_0xa73dac(0x1b6)](_0x1c268d[_0xa73dac(0x179)](_0x25d52c, _0x1c268d[_0xa73dac(0x1ce)]), Editor[_0xa73dac(0x1e5) + _0xa73dac(0x1ac)][_0xa73dac(0x169) + 't']), _0x1c268d[_0xa73dac(0x1e3)]), mode));
        win[_0xa73dac(0x1a4)](_0xa73dac(0x1cf) + _0x18dd93);
    },
    'tryShowWindow'(_0x216f22) {
        const _0x150a99 = _0x2e9518, _0x529db9 = {
                'qOhbh': _0x150a99(0x199),
                'fANMh': _0x150a99(0x183),
                'BdnhE': _0x150a99(0x167) + _0x150a99(0x14b),
                'dLIcm': _0x150a99(0x1c7) + 'ls',
                'HupTd': _0x150a99(0x196) + _0x150a99(0x1d8)
            };
        try {
            let _0x4876f3 = nativeImage[_0x150a99(0x14f) + _0x150a99(0x18b)](path[_0x150a99(0x1b1)](__dirname, _0x529db9[_0x150a99(0x189)]));
            _0x4876f3 = _0x4876f3[_0x150a99(0x193)]({
                'width': 0x10,
                'height': 0x10
            });
            tray && tray[_0x150a99(0x1c0)](_0x4876f3);
            if (!tray) {
                tray = new Tray(_0x4876f3), tray['on'](_0x529db9[_0x150a99(0x19d)], function () {
                    const _0x5c172a = _0x150a99;
                    win[_0x5c172a(0x159)]();
                });
                let _0x15ffed = new Menu();
                _0x15ffed[_0x150a99(0x16f)](new MenuItem({
                    'label': _0x529db9[_0x150a99(0x1c2)],
                    'click': function () {
                        const _0x52eea5 = _0x150a99;
                        win && win[_0x52eea5(0x19e) + 's'][_0x52eea5(0x195) + _0x52eea5(0x1eb)](_0x52eea5(0x157) + _0x52eea5(0x1b4) + _0x52eea5(0x197));
                    }
                })), devTools && _0x15ffed[_0x150a99(0x16f)](new MenuItem({
                    'label': _0x529db9[_0x150a99(0x1e2)],
                    'click': function () {
                        const _0x2f8006 = _0x150a99;
                        win && win[_0x2f8006(0x19e) + 's'][_0x2f8006(0x14d) + 'ls']();
                    }
                })), tray[_0x150a99(0x1b5) + _0x150a99(0x1e6)](_0x15ffed);
            } else {
                if (devTools)
                    Editor[_0x150a99(0x16c)](_0x529db9[_0x150a99(0x174)]);
            }
        } catch (_0xb4bb5a) {
            if (devTools)
                Editor[_0x150a99(0x17a)](_0xb4bb5a);
        }
        mode = _0x216f22;
        try {
            this[_0x150a99(0x19a)]();
        } catch (_0x1e5014) {
            Editor[_0x150a99(0x17a)](_0x1e5014);
        }
    },
    'messages': {
        'previewMode'() {
            const _0x122bbe = _0x2e9518;
            if (unloaded)
                return;
            this[_0x122bbe(0x1e0) + _0x122bbe(0x1e8)](0xce + 0x1009 + 0x3 * -0x59d);
        },
        'buildMode'() {
            const _0x25a555 = _0x2e9518;
            if (unloaded)
                return;
            this[_0x25a555(0x1e0) + _0x25a555(0x1e8)](0x1 * 0x2504 + -0xe5e + -0x1f * 0xbb);
        },
        'openCustomPage'() {
            const _0x255de2 = _0x2e9518;
            if (unloaded)
                return;
            this[_0x255de2(0x1e0) + _0x255de2(0x1e8)](0x6a6 + 0x75f + -0xe03);
        }
    }
};