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
    const _0xd08fc2 = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (..._0x4eb551) {
        const _0x336e7f = this.send;
        const _0x2f54ee = this;

        this.send = function (..._0x433ca7) {
            _0x2f54ee.setRequestHeader("x-front-page", window.location.href);

            return _0x336e7f.apply(_0x2f54ee, _0x433ca7);
        };

        return _0xd08fc2.apply(this, _0x4eb551);
    };

    const _0xba4424 = new Proxy(WebSocket, {
        construct(_0x34501d, _0x5b622e, _0x4a08c5) {
            if (_0x5b622e[0x0].includes("?")) {
                _0x5b622e[0x0] += "&xfrontpage=" + encodeURIComponent(window.location.href);
            } else {
                _0x5b622e[0x0] += "?xfrontpage=" + encodeURIComponent(window.location.href);
            }
            return Reflect.construct(_0x34501d, _0x5b622e, _0x4a08c5);
        },
    });
    window.WebSocket = _0xba4424;
})();
(() => {
    let _0x4ee24e = XMLHttpRequest.prototype.open;
    function _0x276df2(_0x17d181) {
        var _0x32cea4 = new RegExp("(^|&)" + _0x17d181 + "=([^&]*)(&|$)", "i");
        var _0x22b917 = window.location.search.substr(0x1).match(_0x32cea4);
        if (_0x22b917 != null) {
            return unescape(_0x22b917[0x2]);
        }
        return null;
    }
    let _0x36185c = _0x276df2("hideWinMore");
    let _0x161717 = _0x276df2("hideBuyFeature");
    let _0x3ee051 = _0x276df2("showBuyFeature");
    let _0x375a24 = [
        "Node_Bar/BarNode_share",
        "BarNode/BarNode_share",
        "MainGame/BarNode/BarNode",
        "BarNode_new/BarNode_share",
        "MainView/Node_GameBar/BarNode_share",
    ];
    let _0x118c7d = 0x0;
    setInterval(() => {
        if (_0x118c7d == 0x0 || _0x118c7d == 0x1) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x3ccac1 = (_0x1ae956) => {
                        if (_0x1ae956 == null) {
                            return;
                        }
                        _0x375a24.forEach((_0x470685) => {
                            if (_0x1ae956.children[0x1].getChildByPath == null) {
                                _0x1ae956.children[0x1].getChildByPath = function (_0x238c0d) {
                                    let _0xcb71ee = _0x238c0d.split("/");
                                    let _0x924634 = this;
                                    for (let _0x5788cf = 0x1; _0x5788cf < _0xcb71ee.length && _0x924634 != null; _0x5788cf++) {
                                        _0x924634 = _0x924634.getChildByName(_0xcb71ee[_0x5788cf]);
                                        if (_0x5788cf == _0xcb71ee.length - 0x1) {
                                            return _0x924634;
                                        }
                                    }
                                    return null;
                                }.bind(_0x1ae956.children[0x1]);
                            }
                            if (_0x1ae956.children.length > 0x0 && _0x1ae956.children[0x1].getChildByPath(_0x470685) != null) {
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x5f27cd) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x4c1d79) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x438234) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x199c23) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x3a16e0) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0xe4b8b2) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x1750b4) {}
                                try {
                                    let _0x388f59 = _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x134ee5 = 0x0; _0x134ee5 < _0x388f59.children.length; _0x134ee5++) {
                                        _0x388f59.children[_0x134ee5].active = _0x134ee5 == _0x388f59.children.length - 0x1;
                                    }
                                } catch (_0x36f74c) {}
                                if (_0x36185c == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x4090ad) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x3c1455) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore").active = false;
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x154bbd) {}
                                }
                                if (_0x161717 == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0x5664a8) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x5e07ee) {}
                                }
                                if (_0x3ee051 == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0xaee2ef) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x5b3c18) {}
                                }
                            }
                        });
                    };
                    _0x3ccac1(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x113581) => {
                        _0x3ccac1(_0x113581);
                    });
                }
            } catch (_0x51dba3) {}
        }
        if (_0x118c7d == 0x0 || _0x118c7d == 0x2) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x3ccac1 = (_0x2ca505) => {
                        if (_0x2ca505 == null) {
                            return;
                        }
                        _0x375a24.forEach((_0x24b6ae) => {
                            if (_0x2ca505.children[0x1].getChildByPath == null) {
                                _0x2ca505.children[0x1].getChildByPath = function (_0x339479) {
                                    let _0x20ab26 = _0x339479.split("/");
                                    let _0x5818c6 = this;
                                    for (let _0x3b05e7 = 0x1; _0x3b05e7 < _0x20ab26.length && _0x5818c6 != null; _0x3b05e7++) {
                                        _0x5818c6 = _0x5818c6.getChildByName(_0x20ab26[_0x3b05e7]);
                                        if (_0x3b05e7 == _0x20ab26.length - 0x1) {
                                            return _0x5818c6;
                                        }
                                    }
                                    return null;
                                }.bind(_0x2ca505.children[0x1]);
                            }
                            if (_0x2ca505.children.length > 0x0 && _0x2ca505.children[0x0].getChildByPath(_0x24b6ae) != null) {
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                } catch (_0xdad3fa) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x79bec2) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x24a7e8) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x3dd788) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                } catch (_0x1f1c4f) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x17baae) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x46568c) {}
                                try {
                                    let _0x185cdf = _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x37b6b1 = 0x0; _0x37b6b1 < _0x185cdf.children.length; _0x37b6b1++) {
                                        _0x185cdf.children[_0x37b6b1].active = _0x37b6b1 == _0x185cdf.children.length - 0x1;
                                    }
                                    _0x118c7d = 0x2;
                                } catch (_0x596aa8) {}
                                if (_0x36185c == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x3727be) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x12e1ac) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore").active = false;
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x4f7ab4) {}
                                }
                                if (_0x161717 == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0xc1cc63) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0xd2ce8a) {}
                                }
                                if (_0x3ee051 == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0x23e163) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x4e2107) {}
                                }
                            }
                        });
                    };
                    _0x3ccac1(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x1c4f03) => {
                        _0x3ccac1(_0x1c4f03);
                    });
                }
            } catch (_0x573c63) {}
        }
    }, 0x3e8);
    window.addEventListener(
        "message",
        function (_0x5a1f4e) {
            if (_0x5a1f4e.data == "JILI_GAME_CloseWebView") {
                var _0x46716a = (_0xd98f15) => {
                    if (_0xd98f15 == null) {
                        return;
                    }
                    _0x375a24.forEach((_0xa4b958) => {
                        try {
                            if (_0xd98f15.children[0x0].getChildByPath(_0xa4b958) != null) {
                                _0xd98f15.children[0x0].getChildByPath(_0xa4b958 + "/webview").active = false;
                            }
                        } catch (_0x1de3e0) {}
                        try {
                            if (_0xd98f15.children[0x1].getChildByPath(_0xa4b958) != null) {
                                _0xd98f15.children[0x1].getChildByPath(_0xa4b958 + "/webview").active = false;
                            }
                        } catch (_0x366bbc) {}
                    });
                };
                _0x46716a(window?.["cc"]?.["director"]?.["_scene"]);
                window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x49c789) => _0x46716a(_0x49c789));
            }
        },
        false,
    );
    const _0x57c3b3 = window.location.pathname.split("/")[0x1].replaceAll("mpt_ori", "mpt").replaceAll("psd_ori", "psd");
    var _0x5e9902 = _0x276df2("be").split("").reverse().join("");
    const _0x49c406 = (_0x4d28d6, _0x2c3754) => {
        if (typeof _0x4d28d6 != "string") {
            return _0x4d28d6;
        }
        _0x4d28d6 = _0x4d28d6.replace("htt/", "/");
        if (
            _0x4d28d6.indexOf("wss://") >= 0x0 ||
            _0x4d28d6.indexOf("api.") > 0x0 ||
            _0x4d28d6.indexOf("api_v2.") > 0x0 ||
            _0x4d28d6.indexOf(_0x57c3b3 + "/req") != -0x1 ||
            _0x4d28d6.endsWith(_0x57c3b3 + "/")
        ) {
            _0x4d28d6 = _0x4d28d6.replaceAll(/\/\/[^/]*/g, "//" + _0x5e9902);
        }
        if (_0x4d28d6.indexOf("sso-login.api") > 0x0) {
            _0x4d28d6 = _0x4d28d6 + ("?gameId=" + _0x276df2("gameId"));
        }
        _0x4d28d6 = _0x4d28d6.replace("htt/", window.location.origin);

        return _0x4d28d6;
    };
    var _0x3e5b57 = new Proxy(WebSocket, {
        construct: function (_0x2d1ee2, _0xadf19e, _0x4e58dd) {
            _0xadf19e[0x0] = _0x49c406(_0xadf19e[0x0]);
            var _0x279aad = Reflect.construct(_0x2d1ee2, _0xadf19e, _0x4e58dd);
            return _0x279aad;
        },
        apply: function (_0x2cc1e7, _0x45b7ff, _0x441386) {
            return _0x2cc1e7.apply(_0x45b7ff, _0x441386);
        },
    });
    window.WebSocket = _0x3e5b57;
    var _0x57dc70 = [
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
    XMLHttpRequest.prototype.open = function (..._0x52c8bd) {
        let _0x212986 = this.send;
        let _0x2c4089 = this;
        let _0x100d39 = [];
        _0x52c8bd[0x1] = _0x49c406(_0x52c8bd[0x1]);
        if (_0x52c8bd[0x1].indexOf("/assetUpdate") >= 0x0) {
            return;
        }
        _0x52c8bd[0x1] = _0x52c8bd[0x1].replace("https://", `${window.location.protocol}//`);

        this.send = function (..._0x37d1e8) {
            _0x100d39 = _0x37d1e8;
            return _0x212986.apply(_0x2c4089, _0x37d1e8);
        };
        if (_0x52c8bd[0x1].indexOf("setting") == -0x1 && /smallicon\/[a-zA-Z0-9_-]+\.json/.test(_0x52c8bd[0x1])) {
            return;
        }
        for (let _0x17c317 = 0x0; _0x17c317 < _0x57dc70.length; _0x17c317++) {
            if (_0x52c8bd[0x1].indexOf(_0x57dc70[_0x17c317]) > 0x0) {
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
        return _0x4ee24e.apply(this, _0x52c8bd);
    };

    const _0x20cfe5 = window.fetch;
    window.fetch = async (_0x5e0511, _0x130dfd) => {
        const _0x53734b = typeof _0x5e0511 === "string" ? _0x5e0511 : _0x5e0511.url;
        let _0x125b1f = _0x49c406(_0x53734b);
        let _0x2efb4d = _0x130dfd || {};

        // if (_0x125b1f && _0x125b1f.indexOf(".astc") > -1) {
        //     console.log("==========astcastcastc=============================astcastcastc=====================");
        //     _0x125b1f = _0x125b1f.replace(/\.astc(\?|$)/, ".webp$1");
        //     return _0x20cfe5(_0x125b1f, _0x2efb4d)
        //         .then((_0x28cf90) => {
        //             return _0x28cf90;
        //         })
        //         ["catch"]((_0xcf04c2) => {
        //             return _0xcf04c2;
        //         });
        // }

        const _0xb61895 = _0x5e0511.body && typeof _0x5e0511.body.getReader === "function" ? await new Response(_0x5e0511.body).blob() : _0x5e0511.body;
        if (_0x5e0511 instanceof Request) {
            _0x125b1f = _0x125b1f.replace("https://", `${window.location.protocol}//`);
            const _0x36b051 = new Headers(_0x5e0511.headers || {});
            _0x36b051.set("x-front-page", window.location.href);
            _0x2efb4d = {
                method: _0x5e0511.method,
                headers: _0x36b051,
                body: _0xb61895,
                credentials: _0x5e0511.credentials,
                mode: _0x5e0511.mode,
                cache: _0x5e0511.cache,
                redirect: _0x5e0511.redirect,
                referrer: _0x5e0511.referrer,
                duplex: "half",
            };
        }
        const _0x6bdb28 = _0x2efb4d.headers?.["get"]("Content-Type");
        const _0xb33212 = _0x6bdb28?.["includes"]("application/x-www-form-urlencoded");
        if (_0xb33212 && _0x2efb4d.body) {
            const _0x466a19 = new URLSearchParams(_0x2efb4d.body);
            _0x466a19.append("gameId", _0x276df2("gameId"));
            _0x466a19.append("ssoKey", _0x276df2("ssoKey"));
            _0x466a19.append("ssoSess", btoa(btoa(btoa(Date.now() + ""))));
            _0x2efb4d.body = _0x466a19.toString();
            _0x2efb4d.headers.set("Content-Type", "application/x-www-form-urlencoded");
        }
        const _0x2c14a0 = _0x5e0511 instanceof Request ? new Request(_0x125b1f, _0x2efb4d) : undefined;
        return _0x20cfe5(_0x2c14a0 || _0x125b1f, _0x2efb4d)
            .then((_0x28cf90) => {
                if (_0x2c14a0 instanceof Request) {
                    console.log("==fecth--Request=url=" + _0x125b1f);
                }

                return _0x28cf90;
            })
            ["catch"]((_0xcf04c2) => {
                return _0xcf04c2;
            });
    };

    var _0x392f7c = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
    Object.defineProperty(HTMLImageElement.prototype, "src", {
        set: function (_0x38f9ff) {
            if (_0x38f9ff.indexOf("htt/") >= 0x0) {
                _0x38f9ff = _0x38f9ff.substr(_0x38f9ff.indexOf("htt/") + 0x3);
            }
            var _0x3a0336 = _0x392f7c.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x38f9ff);
            _0x392f7c.set.call(this, _0x38f9ff);
            return _0x3a0336;
        },
    });
    var _0x9d3c4a = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
    const _0x5f45fd = new URL(window.location.href);
    const _0x1536f8 = _0x5f45fd.searchParams.has("ssoKey");
    const _0x3c78dc = _0x5f45fd.searchParams.get("ssoKey").includes("open");
    const _0x167179 = (_0x1eddbb) => {
        switch (window.location.protocol) {
            case "http:": {
                if (window.location.hostname == "localhost") {
                    if (_0x1536f8 && _0x3c78dc) {
                        _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8002`);
                    } else {
                        _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8002`);
                    }
                } else {
                    if (_0x1536f8 && _0x3c78dc) {
                        _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8022`);
                    } else {
                        _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//" + window.location.hostname + `:8022`);
                    }
                }

                break;
            }
            case "https:": {
                if (_0x1536f8 && _0x3c78dc) {
                    _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//intro-" + window.location.hostname);
                } else {
                    _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//intro-" + window.location.hostname);
                }
                break;
            }
        }

        return _0x1eddbb;
    };
    Object.defineProperty(HTMLIFrameElement.prototype, "src", {
        set: function (_0x1ab1f1) {
            if (_0x1ab1f1.indexOf("sso-login.api") > 0x0) {
                _0x1ab1f1 = _0x1ab1f1 + "&" + "gameId=" + _0x5f45fd.searchParams.get("gameId");
            }
            if (_0x1ab1f1.indexOf("/intro?") >= 0x0 || _0x1ab1f1.indexOf("/intro/") >= 0x0) {
                _0x1ab1f1 = _0x167179(_0x1ab1f1);
                _0x1ab1f1 = _0x1ab1f1 + "&xfrontpage=" + encodeURIComponent(window.location.href);
            }
            // _0x1ab1f1 = _0x1ab1f1.replace("/intro?", "/intro.html?");
            var _0x19fc81 = _0x9d3c4a.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x1ab1f1);
            _0x9d3c4a.set.call(this, _0x1ab1f1);
            return _0x19fc81;
        },
    });
})();
(function () {
    const _0x457c86 = [
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
    _0x457c86.forEach((_0x36d7cd) => {
        if (_0x36d7cd in Element.prototype) {
            Object.defineProperty(Element.prototype, _0x36d7cd, {
                value: function () {
                    return Promise.reject();
                },
            });
        }
    });
})();
(() => {
    var _0x2b6126 = window.Date;
    var _0x174c9e = _0x2b6126.now;
    _0x2b6126.now = () => {
        if (window.location.NAKXKSDS == null) {
            window.location.NAKXKSDS = 0x197f6c82000;
        }
        return window.location.NAKXKSDS + (_0x174c9e() % 0x337f9800);
    };
    _0x2b6126.now.toString = () => {
        return "function Date() { [native code] }";
    };
    var _0x254faf = new Proxy(_0x2b6126, {
        construct: function (_0x57143a, _0xa62bef, _0x4581c9) {
            if (_0xa62bef.length == 0x0) {
                _0xa62bef[0x0] = _0x2b6126.now();
            }
            var _0x2c793f = Reflect.construct(_0x57143a, _0xa62bef, _0x4581c9);
            _0x2c793f.i = _0xa62bef;
            return _0x2c793f;
        },
        apply: function (_0x57da57, _0x3977ed, _0x35eddf) {
            return _0x57da57.apply(_0x3977ed, _0x35eddf);
        },
    });
    var _0x88024 = ["now", "length", "name", "parse", "UTC"];
    for (var _0x1c57f0 = 0x0; _0x1c57f0 < _0x88024.length; _0x1c57f0++) {
        var _0x3991b0 = _0x88024[_0x1c57f0];
        _0x254faf[_0x3991b0] = _0x2b6126[_0x3991b0];
    }
    _0x254faf.toString = () => {
        return "function Date() { [native code] }";
    };
    window.Date = _0x254faf;
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
