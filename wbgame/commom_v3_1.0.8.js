if (location.protocol === "http:") {
    function GetLinkParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    let isVconsole = parseInt(GetLinkParameterByName("isVconsole") || 0);
    if (isVconsole > 0) {
        //// 1. 动态创建 script 标签
        const script = document.createElement("script");
        // 2. 设置 vConsole 的 CDN 地址
        script.src = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js";
        // 3. 监听脚本加载完成事件，完成后再进行初始化
        script.onload = function () {
            // 建议加上判断，避免在正式线上环境对普通用户显示
            if (location.protocol === "http:") {
                // 脚本加载完后，window 上才会有 VConsole 对象
                window.vConsole = new window.VConsole();
                console.log("vConsole 初始化成功！");
            }
        };
        // 4. 将 script 标签插入到页面中，触发下载
        document.head.appendChild(script);
    }

    /////
    let isWebp = parseInt(GetLinkParameterByName("isWebp") || 0);
    if (isWebp > 0) {
        (function () {
            // 轮询等待 cc 对象初始化
            const timer = setInterval(() => {
                if (typeof cc !== "undefined") {
                    clearInterval(timer);
                    disableCocosASTC();
                }
            }, 50);

            function disableCocosASTC() {
                console.log("[Cocos Hack] 开始禁用全局 ASTC 纹理支持...");

                // -------------------------------------------------------------
                // 1. 禁用引擎宏配置中的 ASTC 格式
                // -------------------------------------------------------------
                if (cc.macro && cc.macro.SUPPORT_TEXTURE_FORMATS) {
                    // 从引擎支持列表中过滤掉 .astc
                    cc.macro.SUPPORT_TEXTURE_FORMATS = cc.macro.SUPPORT_TEXTURE_FORMATS.filter((ext) => ext !== ".astc" && ext !== "astc");
                    console.log("当前引擎支持格式:", cc.macro.SUPPORT_TEXTURE_FORMATS);
                }

                // -------------------------------------------------------------
                // 2. 欺骗 WebGL 硬件检测（让 Cocos 认为显卡不支持 ASTC 硬件解码）
                // -------------------------------------------------------------
                if (cc.sys && cc.sys.capabilities) {
                    // 强行关闭 astc 硬件加速标志位
                    cc.sys.capabilities["astc"] = false;
                    cc.sys.capabilities["WEBGL_compressed_texture_astc"] = false;
                }

                // -------------------------------------------------------------
                // 3. 针对 Cocos Creator 3.x 现代版本的额外检测清除
                // -------------------------------------------------------------
                if (cc.internal && cc.internal.registration) {
                    // 某些 3.x 版本中会有内部硬件检测缓存，直接将其置空
                    if (cc.internal.registration.hasExtension) {
                        const origHasExt = cc.internal.registration.hasExtension;
                        cc.internal.registration.hasExtension = function (name) {
                            if (name && name.toLowerCase().includes("astc")) {
                                return false;
                            }
                            return origHasExt.apply(this, arguments);
                        };
                    }
                }

                console.log("[Cocos Hack] ASTC 禁用完毕，引擎将自动切换为加载 WebP/PNG");
            }
        })();
    }
}
(() => {
    const _0x1a1f11 = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (..._0x26451a) {
        const _0x30b6a9 = this.send;
        const _0x571e06 = this;
        this.send = function (..._0x260524) {
            _0x571e06.setRequestHeader("x-front-page", window.location.href);
            return _0x30b6a9.apply(_0x571e06, _0x260524);
        };
        return _0x1a1f11.apply(this, _0x26451a);
    };
    const _0x516fa6 = new Proxy(WebSocket, {
        construct(_0x3cebd7, _0x49c427, _0xde6b4a) {
            if (_0x49c427[0x0].includes("?")) {
                _0x49c427[0x0] += "&xfrontpage=" + encodeURIComponent(window.location.href);
            } else {
                _0x49c427[0x0] += "?xfrontpage=" + encodeURIComponent(window.location.href);
            }
            return Reflect.construct(_0x3cebd7, _0x49c427, _0xde6b4a);
        },
    });
    window.WebSocket = _0x516fa6;
})();
(() => {
    let _0x44ca1d = XMLHttpRequest.prototype.open;
    function _0x5a601e(_0x109663) {
        var _0x7e6c7 = new RegExp("(^|&)" + _0x109663 + "=([^&]*)(&|$)", "i");
        var _0x15faab = window.location.search.substr(0x1).match(_0x7e6c7);
        if (_0x15faab != null) {
            return unescape(_0x15faab[0x2]);
        }
        return null;
    }
    let _0x3883d3 = _0x5a601e("hideWinMore");
    let _0x1e844b = _0x5a601e("hideBuyFeature");
    let _0x4f8109 = _0x5a601e("showBuyFeature");
    let _0x4d3741 = [
        "Node_Bar/BarNode_share",
        "BarNode/BarNode_share",
        "MainGame/BarNode/BarNode",
        "BarNode_new/BarNode_share",
        "MainView/Node_GameBar/BarNode_share",
    ];
    let _0x4d01af = 0x0;
    setInterval(() => {
        if (_0x4d01af == 0x0 || _0x4d01af == 0x1) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x2f03dc = (_0x388499) => {
                        if (_0x388499 == null) {
                            return;
                        }
                        _0x4d3741.forEach((_0x80b8eb) => {
                            if (_0x388499.children[0x1].getChildByPath == null) {
                                _0x388499.children[0x1].getChildByPath = function (_0x51938d) {
                                    let _0x13f56f = _0x51938d.split("/");
                                    let _0x242f53 = this;
                                    for (let _0x1755b0 = 0x1; _0x1755b0 < _0x13f56f.length && _0x242f53 != null; _0x1755b0++) {
                                        _0x242f53 = _0x242f53.getChildByName(_0x13f56f[_0x1755b0]);
                                        if (_0x1755b0 == _0x13f56f.length - 0x1) {
                                            return _0x242f53;
                                        }
                                    }
                                    return null;
                                }.bind(_0x388499.children[0x1]);
                            }
                            if (_0x388499.children.length > 0x0 && _0x388499.children[0x1].getChildByPath(_0x80b8eb) != null) {
                                try {
                                    _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0x5a23e8) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(
                                        _0x80b8eb + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0x56031c) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(
                                        _0x80b8eb + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0x365f24) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(
                                        _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0x3832a9) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(
                                        _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0x50c5f3) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(
                                        _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0xe1a0c5) {}
                                try {
                                    _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x4d01af = 0x1;
                                } catch (_0xf5cad) {}
                                try {
                                    let _0x53ccbb = _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x2550df = 0x0; _0x2550df < _0x53ccbb.children.length; _0x2550df++) {
                                        _0x53ccbb.children[_0x2550df].active = _0x2550df == _0x53ccbb.children.length - 0x1;
                                    }
                                } catch (_0x143b4e) {}
                                if (_0x3883d3 == "1") {
                                    try {
                                        _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x2fad1d) {}
                                    try {
                                        _0x388499.children[0x1].getChildByPath(
                                            _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x280157) {}
                                    try {
                                        _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/WinMore").active = false;
                                        _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x1fa2c4) {}
                                }
                                if (_0x1e844b == "1") {
                                    try {
                                        _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0x3ac471) {}
                                    try {
                                        _0x388499.children[0x1].getChildByPath(
                                            _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x42c7a8) {}
                                }
                                if (_0x4f8109 == "1") {
                                    try {
                                        _0x388499.children[0x1].getChildByPath(_0x80b8eb + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0x1e242f) {}
                                    try {
                                        _0x388499.children[0x1].getChildByPath(
                                            _0x80b8eb + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x2f51b8) {}
                                }
                            }
                        });
                    };
                    _0x2f03dc(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x1bb94f) => {
                        _0x2f03dc(_0x1bb94f);
                    });
                }
            } catch (_0x11f6ce) {}
        }
        if (_0x4d01af == 0x0 || _0x4d01af == 0x2) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x2f03dc = (_0x6bee89) => {
                        if (_0x6bee89 == null) {
                            return;
                        }
                        _0x4d3741.forEach((_0x1b3a69) => {
                            if (_0x6bee89.children[0x1].getChildByPath == null) {
                                _0x6bee89.children[0x1].getChildByPath = function (_0x1562da) {
                                    let _0x2111ab = _0x1562da.split("/");
                                    let _0x4a0038 = this;
                                    for (let _0x35b7d6 = 0x1; _0x35b7d6 < _0x2111ab.length && _0x4a0038 != null; _0x35b7d6++) {
                                        _0x4a0038 = _0x4a0038.getChildByName(_0x2111ab[_0x35b7d6]);
                                        if (_0x35b7d6 == _0x2111ab.length - 0x1) {
                                            return _0x4a0038;
                                        }
                                    }
                                    return null;
                                }.bind(_0x6bee89.children[0x1]);
                            }
                            if (_0x6bee89.children.length > 0x0 && _0x6bee89.children[0x0].getChildByPath(_0x1b3a69) != null) {
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                } catch (_0x29b6b4) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(
                                        _0x1b3a69 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x4d01af = 0x2;
                                } catch (_0x39afbc) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(
                                        _0x1b3a69 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x4d01af = 0x2;
                                } catch (_0x47e29f) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(
                                        _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x4d01af = 0x2;
                                } catch (_0x45883a) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(
                                        _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                } catch (_0x3c0aa8) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(
                                        _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x4d01af = 0x2;
                                } catch (_0x472c1e) {}
                                try {
                                    _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x4d01af = 0x2;
                                } catch (_0x292550) {}
                                try {
                                    let _0x36dcdf = _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x5c07a9 = 0x0; _0x5c07a9 < _0x36dcdf.children.length; _0x5c07a9++) {
                                        _0x36dcdf.children[_0x5c07a9].active = _0x5c07a9 == _0x36dcdf.children.length - 0x1;
                                    }
                                    _0x4d01af = 0x2;
                                } catch (_0xcf6352) {}
                                if (_0x3883d3 == "1") {
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x10f780) {}
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(
                                            _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x1fb3d6) {}
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/WinMore").active = false;
                                        _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x5d4ad9) {}
                                }
                                if (_0x1e844b == "1") {
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0x4bc9d1) {}
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(
                                            _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x39d8fa) {}
                                }
                                if (_0x4f8109 == "1") {
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(_0x1b3a69 + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0x4f532d) {}
                                    try {
                                        _0x6bee89.children[0x0].getChildByPath(
                                            _0x1b3a69 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x100cfa) {}
                                }
                            }
                        });
                    };
                    _0x2f03dc(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x3020d0) => {
                        _0x2f03dc(_0x3020d0);
                    });
                }
            } catch (_0x107166) {}
        }
    }, 0x3e8);
    window.addEventListener(
        "message",
        function (_0x3d7c81) {
            if (_0x3d7c81.data == "JILI_GAME_CloseWebView") {
                var _0x42dc34 = (_0x5efbb1) => {
                    if (_0x5efbb1 == null) {
                        return;
                    }
                    _0x4d3741.forEach((_0x2f6b51) => {
                        try {
                            if (_0x5efbb1.children[0x0].getChildByPath(_0x2f6b51) != null) {
                                _0x5efbb1.children[0x0].getChildByPath(_0x2f6b51 + "/webview").active = false;
                            }
                        } catch (_0x406c03) {}
                        try {
                            if (_0x5efbb1.children[0x1].getChildByPath(_0x2f6b51) != null) {
                                _0x5efbb1.children[0x1].getChildByPath(_0x2f6b51 + "/webview").active = false;
                            }
                        } catch (_0x715641) {}
                    });
                };
                _0x42dc34(window?.["cc"]?.["director"]?.["_scene"]);
                window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x473690) => _0x42dc34(_0x473690));
            }
        },
        false,
    );
    const _0x216c37 = window.location.pathname.split("/")[0x1].replaceAll("mpt_ori", "mpt").replaceAll("psd_ori", "psd");
    var _0x3bf842 = _0x5a601e("be").split("").reverse().join("");
    const _0x270329 = (_0x19fa3c, _0x2c0c21) => {
        if (typeof _0x19fa3c != "string") {
            return _0x19fa3c;
        }
        _0x19fa3c = _0x19fa3c.replace("htt/", "/");
        if (
            _0x19fa3c.indexOf("wss://") >= 0x0 ||
            _0x19fa3c.indexOf("api.") > 0x0 ||
            _0x19fa3c.indexOf("api_v2.") > 0x0 ||
            _0x19fa3c.indexOf(_0x216c37 + "/req") != -0x1 ||
            _0x19fa3c.endsWith(_0x216c37 + "/")
        ) {
            _0x19fa3c = _0x19fa3c.replaceAll(/\/\/[^/]*/g, "//" + _0x3bf842);
        }
        if (_0x19fa3c.indexOf("sso-login.api") > 0x0) {
            _0x19fa3c = _0x19fa3c + ("?gameId=" + _0x5a601e("gameId"));
        } else if (_0x19fa3c.includes("/web-mobile/assets/versions.json")) {
            const _0x448fd7 = new URL(window.location.href);
            const _0x5b6dba = _0x448fd7.searchParams.get("cav");
            if (_0x5b6dba && _0x5b6dba.trim() !== "") {
                _0x19fa3c = _0x19fa3c.replaceAll("/web-mobile/assets/versions.json", "/web-mobile/assets/versions-" + _0x5b6dba + ".json");
            }
        }
        _0x19fa3c = _0x19fa3c.replace("htt/", window.location.origin);
        return _0x19fa3c;
    };
    var _0x17a269 = new Proxy(WebSocket, {
        construct: function (_0x9ae329, _0x1dcace, _0x56ecd3) {
            _0x1dcace[0x0] = _0x270329(_0x1dcace[0x0]);
            var _0x26e11d = Reflect.construct(_0x9ae329, _0x1dcace, _0x56ecd3);
            return _0x26e11d;
        },
        apply: function (_0x267026, _0x36b35c, _0x37cc70) {
            return _0x267026.apply(_0x36b35c, _0x37cc70);
        },
    });
    window.WebSocket = _0x17a269;
    var _0x262851 = [
        "event/trigger",
        "webservice/event/error",
        "subagentservice/MakeUserSubAgent",
        "vipservice/VIPGet",
        "promotionservice/OnLoginV3",
        "user/GetMailList",
        "favoriteservice/OnLogin",
        "rankingservice/user/GetMailList",
        "smartnotice/notice/getReq",
        "mc/item/ItemListProto",
        "mc/item/GetMailProto",
        "mc/item/AllGameItemListProto",
        "longhu/GetLonghuListV2",
        "mc/unionjp/JPInfoProto",
        "mc/unionjp/JPInfoAllProto",
        "mc/fulljp/JPInfoAllProto",
        "mc/mission/GetDailyMissionProto",
        "smallicon/23r9jg032g34n0094.json",
        "webservice/event/loading",
    ];
    XMLHttpRequest.prototype.open = function (..._0x154cc6) {
        let _0x2b736a = this.send;
        let _0x1e0d53 = this;
        let _0xb1a08a = [];
        _0x154cc6[0x1] = _0x270329(_0x154cc6[0x1]);

        if (_0x154cc6[0x1].indexOf("/assetUpdate") >= 0x0) {
            return;
        }
        _0x154cc6[0x1] = _0x154cc6[0x1].replace("https://", `${window.location.protocol}//`);

        this.send = function (..._0x3eafa2) {
            _0xb1a08a = _0x3eafa2;
            return _0x2b736a.apply(_0x1e0d53, _0x3eafa2);
        };
        if (_0x154cc6[0x1].indexOf("setting") == -0x1 && /smallicon\/[a-zA-Z0-9_-]+\.json/.test(_0x154cc6[0x1])) {
            return;
        }
        for (let _0x434030 = 0x0; _0x434030 < _0x262851.length; _0x434030++) {
            if (_0x154cc6[0x1].indexOf(_0x262851[_0x434030]) > 0x0) {
                this.readyState = 0x4;
                this.response = this.responseText = "{}";
                this.status = 0xc8;
                this.statusText = "OK";
                this.setRequestHeader = () => {};
                this.send = () => {};
                setTimeout(() => {
                    if (this.onreadystatechange) {
                        this.onreadystatechange();
                    }
                }, 0.001);
                return;
            }
        }
        return _0x44ca1d.apply(this, _0x154cc6);
    };
    const _0x4594ab = window.fetch;
    window.fetch = async (_0x432b84, _0x28d123) => {
        const _0x22e5b6 = typeof _0x432b84 === "string" ? _0x432b84 : _0x432b84.url;
        const _0x1604bf = _0x270329(_0x22e5b6);
        let _0x250030 = _0x28d123 || {};

        // if (_0x1604bf && _0x1604bf.indexOf(".astc") > -1) {
        //     console.log("==========astcastcastc=============================astcastcastc=====================");
        //     _0x1604bf = _0x1604bf.replace(/\.astc(\?|$)/, ".webp$1");
        //     return _0x20cfe5(_0x1604bf, _0x250030)
        //         .then((_0x28cf90) => {
        //             return _0x28cf90;
        //         })
        //         ["catch"]((_0xcf04c2) => {
        //             return _0xcf04c2;
        //         });
        // }

        const _0x5992d8 = _0x432b84.body && typeof _0x432b84.body.getReader === "function" ? await new Response(_0x432b84.body).blob() : _0x432b84.body;
        if (_0x432b84 instanceof Request) {
            _0x1604bf = _0x1604bf.replace("https://", `${window.location.protocol}//`);
            const _0x9103b1 = new Headers(_0x432b84.headers || {});
            _0x9103b1.set("x-front-page", window.location.href);
            _0x250030 = {
                method: _0x432b84.method,
                headers: _0x9103b1,
                body: _0x5992d8,
                credentials: _0x432b84.credentials,
                mode: _0x432b84.mode,
                cache: _0x432b84.cache,
                redirect: _0x432b84.redirect,
                referrer: _0x432b84.referrer,
                duplex: "half",
            };
        }
        const _0x43f7ca = _0x250030.headers?.["get"]("Content-Type");
        const _0x12beeb = _0x43f7ca?.["includes"]("application/x-www-form-urlencoded");
        if (_0x12beeb && _0x250030.body) {
            const _0x2290fe = new URLSearchParams(_0x250030.body);
            _0x2290fe.append("gameId", _0x5a601e("gameId"));
            _0x2290fe.append("ssoKey", _0x5a601e("ssoKey"));
            _0x2290fe.append("ssoSess", btoa(btoa(btoa(Date.now() + ""))));
            _0x250030.body = _0x2290fe.toString();
            _0x250030.headers.set("Content-Type", "application/x-www-form-urlencoded");
        }
        const _0x1bc8c6 = _0x432b84 instanceof Request ? new Request(_0x1604bf, _0x250030) : undefined;
        return _0x4594ab(_0x1bc8c6 || _0x1604bf, _0x250030)
            .then((_0x34235e) => {
                return _0x34235e;
            })
            ["catch"]((_0x5540da) => {
                return _0x5540da;
            });
    };
    var _0x56efe6 = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
    Object.defineProperty(HTMLImageElement.prototype, "src", {
        set: function (_0x36de91) {
            if (_0x36de91.indexOf("htt/") >= 0x0) {
                _0x36de91 = _0x36de91.substr(_0x36de91.indexOf("htt/") + 0x3);
            }
            var _0x31fd0f = _0x56efe6.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x36de91);
            _0x56efe6.set.call(this, _0x36de91);
            return _0x31fd0f;
        },
    });
    var _0x2f2c94 = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
    const _0x359a04 = new URL(window.location.href);
    const _0x218d52 = _0x359a04.searchParams.has("ssoKey");
    const _0x23c2a4 = _0x359a04.searchParams.get("ssoKey").includes("open");
    const _0x5bc0bb = (_0x4f25e4) => {
        switch (window.location.protocol) {
            case "http:": {
                if (window.location.hostname == "localhost") {
                    if (_0x218d52 && _0x23c2a4) {
                        _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8002`);
                    } else {
                        _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8002`);
                    }
                } else {
                    if (_0x218d52 && _0x23c2a4) {
                        _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8022`);
                    } else {
                        _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8022`);
                    }
                }

                break;
            }
            case "https:": {
                if (_0x218d52 && _0x23c2a4) {
                    _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//intro-" + window.location.hostname);
                } else {
                    _0x4f25e4 = _0x4f25e4.replaceAll(/\/\/[^/]*/g, "//intro_" + window.location.hostname);
                }
                break;
            }
        }
        return _0x4f25e4;
    };
    const _0x30eebc = (_0x4eb1f3) => {
        if (_0x218d52 && _0x23c2a4) {
            _0x4eb1f3 = _0x4eb1f3.replaceAll(/\/\/[^/]*/g, "//history-" + window.location.hostname);
        } else {
            _0x4eb1f3 = _0x4eb1f3.replaceAll(/\/\/[^/]*/g, "//history_" + window.location.hostname);
        }
        return _0x4eb1f3;
    };
    Object.defineProperty(HTMLIFrameElement.prototype, "src", {
        set: function (_0x17c762) {
            if (_0x17c762.indexOf("sso-login.api") > 0x0) {
                _0x17c762 = _0x17c762 + "&" + "gameId=" + _0x359a04.searchParams.get("gameId");
            }
            if (_0x17c762.indexOf("/intro?") >= 0x0 || _0x17c762.indexOf("/intro/") >= 0x0) {
                _0x17c762 = _0x5bc0bb(_0x17c762);
                _0x17c762 = _0x17c762 + "&xfrontpage=" + encodeURIComponent(window.location.href);
            } else if (_0x17c762.indexOf("/ingame?") >= 0x0 || _0x17c762.indexOf("language-api.") >= 0x0) {
                _0x17c762 = _0x30eebc(_0x17c762);
                _0x17c762 = _0x17c762 + "&xfrontpage=" + encodeURIComponent(window.location.href);
            }
            var _0x29d448 = _0x2f2c94.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x17c762);
            _0x2f2c94.set.call(this, _0x17c762);
            return _0x29d448;
        },
    });
})();
(function () {
    const _0x2a8a3b = [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror",
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror",
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError",
    ];
    _0x2a8a3b.forEach((_0x1c95a6) => {
        if (_0x1c95a6 in Element.prototype) {
            Object.defineProperty(Element.prototype, _0x1c95a6, {
                value: function () {
                    return Promise.reject();
                },
            });
        }
    });
})();
(() => {
    var _0x1f5b12 = window.Date;
    var _0xaafb84 = _0x1f5b12.now;
    _0x1f5b12.now = () => {
        if (window.location.NAKXKSDS == null) {
            window.location.NAKXKSDS = 0x197f6c82000;
        }
        return window.location.NAKXKSDS + (_0xaafb84() % 0x337f9800);
    };
    _0x1f5b12.now.toString = () => {
        return "function Date() { [native code] }";
    };
    var _0x2e8d3b = new Proxy(_0x1f5b12, {
        construct: function (_0x322a3c, _0x49c8ad, _0x27fe8a) {
            if (_0x49c8ad.length == 0x0) {
                _0x49c8ad[0x0] = _0x1f5b12.now();
            }
            var _0x1626fa = Reflect.construct(_0x322a3c, _0x49c8ad, _0x27fe8a);
            _0x1626fa.i = _0x49c8ad;
            return _0x1626fa;
        },
        apply: function (_0x35cb0c, _0x2dd3f2, _0x15c352) {
            return _0x35cb0c.apply(_0x2dd3f2, _0x15c352);
        },
    });
    var _0x3a9f6d = ["now", "length", "name", "parse", "UTC"];
    for (var _0x2b1ffc = 0x0; _0x2b1ffc < _0x3a9f6d.length; _0x2b1ffc++) {
        var _0x116bcf = _0x3a9f6d[_0x2b1ffc];
        _0x2e8d3b[_0x116bcf] = _0x1f5b12[_0x116bcf];
    }
    _0x2e8d3b.toString = () => {
        return "function Date() { [native code] }";
    };
    window.Date = _0x2e8d3b;
})();
localStorage.clear();

if (location.protocol === "http:") {
    //sendcommand
    (function () {
        // 检查是否已经存在全局监控防线，防止重复注入导致死循环
        if (window.__SendCommand_Hooked__) {
            console.log("⚠️ 拦截防线已在运行中，请勿重复注入。");
            return;
        }
        window.__SendCommand_Hooked__ = true;

        // 核心劫持：通过属性描述符（Property Descriptor）锁定 Object 原型链
        Object.defineProperty(Object.prototype, "SendCommand", {
            set: function (originalFunc) {
                // 安全过滤：只有当对方赋予的是一个函数，且该函数还没被我们污染过时才进行重写
                if (typeof originalFunc === "function" && !originalFunc.__isHooked__) {
                    // 动态获取调用该函数的类名或上下文，方便我们在控制台一眼辨认来源
                    const contextName = this.constructor ? this.constructor.name : "AnonymousClass";

                    // ➔ 重写并构建我们自己的代理函数
                    const hookedFunc = function (...args) {
                        try {
                            console.log(
                                `%c[🎯 Object原型链捕获成功] ➔ 触发源: ${contextName}.SendCommand`,
                                "color: #ff007f; font-weight: bold; font-size: 13px;",
                            );

                            // 1. 【核心目标】：提取、捕获并打印出加密前的第一个参数明文
                            const firstParam = args[0];
                            console.log(`==SendCommand=args=${firstParam}`);

                            if (firstParam !== undefined && firstParam !== null) {
                                if (typeof firstParam === "object") {
                                    // 场景 A：第一个参数是复杂的明文 JSON 请求对象
                                    if (typeof firstParam.toJSON === "function") {
                                        let jsonData = firstParam.toJSON();
                                        console.log("【加密前明文(JSON)】:", jsonData);
                                    } else {
                                        try {
                                            // 深度克隆一份，防止混淆的原型链或复杂 Getter 干扰控制台阅读
                                            console.log("【加密前明文(Object)】:", JSON.parse(JSON.stringify(firstParam)));
                                        } catch (e) {
                                            console.log("【加密前明文(复杂引用)】:", firstParam);
                                        }
                                    }
                                } else {
                                    // 场景 B：第一个参数是基础类型（通常是路由命令字、消息 ID 或字符串，如 4001, "req_spin"）
                                    console.log(`【请求命令/ID】: %c${firstParam}`, "color: #00ff00; font-weight: bold; font-size: 12px;");
                                }
                            } else {
                                console.log("【提示】: 该命令发包时未携带任何参数（第一个参数为空）");
                            }

                            // 2. 补漏：打印出发包时携带的其余后续参数（如回调函数、超时时间等）
                            if (args.length > 1) {
                                console.log("【附带其余参数】:", args.slice(1));
                            }
                        } catch (hookError) {
                            // 顶级容错：确保即使我们的打印逻辑出错，也绝对不能卡死、中断或影响网页本身的通信
                            console.error("拦截内部异常(已安全跳过):", hookError);
                        }

                        // 3. 完美过桥：将执行权和所有参数原封不动交回给原厂函数，确保游戏网络通信完全正常、不崩溃
                        return originalFunc.apply(this, args);
                    };

                    // 为新函数打上免死金牌标记，防止其在内部二次触发 set 导致堆栈溢出
                    originalFunc.__isHooked__ = true;
                    this._SendCommand = hookedFunc;
                } else {
                    this._SendCommand = originalFunc;
                }
            },
            get: function () {
                return this._SendCommand;
            },
            configurable: true, // 允许我们在必要时删除或重新配置此属性
        });

        console.log("%c=====================================================", "color: #ff007f;");
        console.log("%c🚀 [Object 原型链 - SendCommand 动态捕捉网已全线布下] ", "color: #ff007f; font-weight: bold;");
        console.log("%c接下来只要页面任何位置初始化或调用该发包接口，控制台将即时刷出明文！", "color: #ffffff;");
        console.log("%c=====================================================", "color: #ff007f;");
    })();

    ///拦截外层msg结构
    (function () {
        // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
        const originalTextDecoder = window.TextDecoder && window.TextDecoder.prototype.decode;
        if (originalTextDecoder) {
            window.TextDecoder.prototype.decode = function (...args) {
                const result = originalTextDecoder.apply(this, args);

                if (result.length > 0) {
                    if (result.indexOf("error_msg") != -1) {
                        // let jsonRes = JSON.parse(result);
                        console.log(`==TextDecoder=jsonRes==:\r\n ${result}`);
                    }
                }

                return result;
            };
        }

        console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
    })();

    ///拦截内层data解析
    (function () {
        let originalDecode = null;

        // 1. 动态寻找并劫持 Object 原型链上的 decode 函数
        Object.defineProperty(Object.prototype, "decode", {
            set: function (fn) {
                // 如果传入的是一个函数，且还没被我们劫持过
                if (typeof fn === "function" && !fn.__isHooked__) {
                    const typeName = this.name || this.displayName || "UnknownProto";

                    // 重写真正的 decode 逻辑
                    const hookedFn = function (reader, length) {
                        // 执行原本的官方原生反序列化逻辑，拿到结果对象
                        const result = fn.apply(this, arguments);

                        try {
                            // 2. 核心打印逻辑
                            console.log(`%c[Protobuf 拦截成功] ➔ 结构名: ${typeName}`, "color: #00ff00; font-weight: bold; font-size: 12px;");

                            // 尝试转为纯净的 JSON 树结构打印，防止混淆的原生对象带有复杂原型
                            if (result && typeof result.toJSON === "function") {
                                // console.log("明文 JSON 数据:", result.toJSON());
                                console.log("明文 JSON 数据:", result.toJSON());
                            } else {
                                console.log("明文明细对象:", JSON.parse(JSON.stringify(result)));
                            }
                        } catch (e) {
                            // 容错处理：防止个别内部系统包转 JSON 失败导致游戏卡死
                            console.log("明文对象(解析异常):", result);
                        }

                        return result;
                    };

                    // 标记该函数已被劫持，防止死循环
                    fn.__isHooked__ = true;
                    this._decode = hookedFn;
                } else {
                    this._decode = fn;
                }
            },
            get: function () {
                return this._decode;
            },
            configurable: true,
        });

        console.log("%c=====================================================", "color: #00ffff;");
        console.log("%c🚀 [全自动通信破译网已布下] 接下来所有的 decode 接口都会在下方自动打印明文！", "color: #00ffff; font-weight: bold;");
        console.log("%c=====================================================", "color: #00ffff;");
    })();

    /////动态寻找并劫持 Object 原型链上的 encode 函数 并打印参数
    // 在 Google Protobuf（或者大名鼎鼎的 protobufjs 库）的运行机制中，
    // 所有的客户端明文请求数据在变成网络二进制乱码（Uint8Array）之前，百分之百必须通过 encode 函数进行序列化。
    // 通过 Object.defineProperty 动态劫持 Object.prototype.encode，
    // 可以在它接触到核心加密算法前的 1毫秒 拦截并捕获到最纯净、最赤裸的客户端发包请求明文对象。
    // 以下是为您量身定制的纯动态寻找并劫持 Object.prototype.encode 的一体化高阶脚本，它能自动捕获并打印加密前的核心参数：javascript
    (function () {
        // 1. 安全锁：防止在复杂的混淆环境或频繁刷新时重复注入导致死循环
        if (window.__Protobuf_Encode_Hooked__) {
            console.log("⚠️ 拦截防线已在运行中，请勿重复注入。");
            return;
        }
        window.__Protobuf_Encode_Hooked__ = true;

        // 2. 动态劫持核心：锁定 JavaScript 底层的 Object 原型链
        Object.defineProperty(Object.prototype, "encode", {
            set: function (originalEncodeFunc) {
                // 安全过滤：只有当对方赋予的是一个函数，且该函数还没被我们污染过时才进行重写
                if (typeof originalEncodeFunc === "function" && !originalEncodeFunc.__isEncodeHooked__) {
                    // 动态获取调用该函数的 Protobuf 结构体名称（例如：Request, SpinRequest, GameInfo等）
                    // 混淆严重时可能会返回 AnonymousClass 或特定代号，但结构体本身的形态可以通过参数还原
                    const protoMessageName = this.name || this.displayName || (this.constructor ? this.constructor.name : "UnknownProto");

                    // ➔ 重写并构建我们自己的代理函数
                    const hookedEncodeFunc = function (...args) {
                        try {
                            console.log(
                                `%c[🔒 Protobuf 动态拦截成功] ➔ 结构体/类名: ${protoMessageName}`,
                                "color: #00ffff; font-weight: bold; font-size: 13px;",
                            );

                            // 【核心目标】：在序列化加密前，提取并打印第一个参数明文
                            // 根据 Protobuf 官方规范：第一个参数 (args[0]) 是待加密的纯明文 JS 对象 (Message)
                            // 第二个参数 (args[1]) 是可选的二进制写入流 (Writer)
                            const rawMessage = args[0];

                            if (rawMessage !== undefined && rawMessage !== null) {
                                // 检查结构体本身是否自带官方的 toJSON 反序列化方案
                                if (typeof rawMessage.toJSON === "function") {
                                    console.log("【加密前明文 JSON】:", rawMessage.toJSON());
                                } else {
                                    try {
                                        // 深度克隆一份，防止混淆的原型链或复杂垃圾属性干扰控制台阅读
                                        console.log("【加密前明文对象】:", JSON.parse(JSON.stringify(rawMessage)));
                                    } catch (e) {
                                        // 针对含有 BigInt 或特殊循环引用的高阶混淆对象使用安全打印
                                        console.log("【加密前明文(复杂引用对象)】:", rawMessage);
                                    }
                                }
                            } else {
                                console.log("【提示】: 该 Protobuf 结构发包时未携带任何载荷（第一个参数为空）");
                            }

                            // 补漏：如果是嵌套加密，顺便监控一下写入流参数
                            if (args.length > 1 && args[1]) {
                                console.log("【附带 Writer/字节写入流状态】:", args[1]);
                            }
                        } catch (hookError) {
                            // 顶级容错：确保即使我们的打印逻辑出错，也绝对不能卡死、中断或影响网页原本的通信和发包
                            console.error("拦截内部异常(已安全跳过):", hookError);
                        }

                        // 3. 完美放行：将执行权和所有参数原封不动交回给原厂函数，确保游戏网络通信完全正常、不崩溃
                        return originalEncodeFunc.apply(this, args);
                    };

                    // 为新函数打上免死金牌标记，防止其在内部二次触发 set 导致堆栈溢出
                    originalFunc = originalEncodeFunc;
                    originalEncodeFunc.__isEncodeHooked__ = true;
                    this._encode = hookedEncodeFunc;
                } else {
                    this._encode = originalEncodeFunc;
                }
            },
            get: function () {
                return this._encode;
            },
            configurable: true, // 允许在必要时删除或重新配置此属性
        });

        console.log("%c=====================================================", "color: #00ffff;");
        console.log("%c🚀 [Object 原型链 - encode 动态发包监控网已布下] ", "color: #00ffff; font-weight: bold;");
        console.log("%c接下来只要页面任何位置初始化或调用 Protobuf 加密，控制台将即时刷出明文！", "color: #ffffff;");
        console.log("%c=====================================================", "color: #00ffff;");
    })();
}
