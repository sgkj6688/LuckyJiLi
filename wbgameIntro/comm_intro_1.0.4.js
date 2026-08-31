// 修复低版本安卓 WebView 不支持 replaceAll 的问题
if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search, replacement) {
        // 如果输入的是字符串，需要转义特殊字符并转为全局正则
        if (typeof search === "string") {
            return this.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), replacement);
        }
        // 如果本身就是正则，确保带有 /g
        return this.replace(search, replacement);
    };
}

// //// 1. 动态创建 script 标签
// const script = document.createElement("script");
// // 2. 设置 vConsole 的 CDN 地址
// script.src = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js";
// // 3. 监听脚本加载完成事件，完成后再进行初始化
// script.onload = function () {
//     // 脚本加载完后，window 上才会有 VConsole 对象
//     window.vConsole = new window.VConsole();
//     console.log("vConsole 初始化成功！");
// };
// // 4. 将 script 标签插入到页面中，触发下载
// document.head.appendChild(script);

(() => {
    const _0x4d33b0 = new URL(window.location.href);
    const _0x2111ce = _0x4d33b0.searchParams.get("xfrontpage");
    const _0xe39776 = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (..._0x3bc9f0) {
        const _0x2d69df = this.send;
        const _0x534253 = this;
        this.send = function (..._0x21d17e) {
            // console.log(_0x534253);
            _0x534253.setRequestHeader("x-front-page", _0x2111ce);
            return _0x2d69df.apply(_0x534253, _0x21d17e);
        };

        console.log(_0x534253);
        return _0xe39776.apply(this, _0x3bc9f0);
    };
    const _0x2cf2fe = new Proxy(WebSocket, {
        construct(_0x179acf, _0x388b7d, _0x45bd06) {
            if (_0x388b7d[0x0].includes("?")) {
                _0x388b7d[0x0] += "&xfrontpage=" + _0x2111ce;
            } else {
                _0x388b7d[0x0] += "?xfrontpage=" + _0x2111ce;
            }
            return Reflect.construct(_0x179acf, _0x388b7d, _0x45bd06);
        },
    });
    window.WebSocket = _0x2cf2fe;
    const _0x5122c4 = window.fetch;
    window.fetch = function (_0x271921, _0x34518c = {}) {
        const _0x346986 = typeof _0x271921 === "string" ? new Request(_0x271921, _0x34518c) : _0x271921;
        const _0x1b7c17 = new Headers(_0x346986.headers || {});
        _0x1b7c17.set("x-front-page", _0x2111ce);
        const _0x213c65 = new Request(_0x346986, {
            headers: _0x1b7c17,
        });
        return _0x5122c4(_0x213c65);
    };
})();

const hasOpen = window.location.href.includes("intro-");
function GetLinkParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const chref = new URL(window.location.href);
const xfrontpage = chref.searchParams.get("xfrontpage");
const hostName = GetLinkParameterByName("be", xfrontpage).split("").reverse().join("");

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        if (!document.body) {
            return;
        }
        const _0x42f619 = Node.prototype.appendChild;
        Node.prototype.appendChild = function (_0x55fc6e) {
            if (_0x55fc6e.srcset) {
                // console.log(_0x55fc6e.srcset);
                _0x55fc6e.srcset = _0x55fc6e.srcset.replace(/^(https?:\/\/|wss?:\/\/)([^\/:]+)/i, (_0x429613, _0x4634e1) => "" + _0x4634e1 + hostname);
            }
            return _0x42f619.call(this, _0x55fc6e);
        };
    });
})();
function a10(_0x3517a2) {
    var _0x199113 = new RegExp("(^|&)" + _0x3517a2 + "=([^&]*)(&|$)", "i");
    var _0x48c383 = window.location.search.substr(0x1).match(_0x199113);
    if (_0x48c383 != null) {
        return unescape(_0x48c383[0x2]);
    }
    return null;
}
var sthost = a10("sthost");
var gameId = a10("game");
var hasAddBackClick = false;
setInterval(() => {
    if (hasAddBackClick == false) {
        var _0x2053c4 = document.getElementsByClassName("back-button");
        try {
            if (_0x2053c4 == null || _0x2053c4.length == 0x0) {
                return;
            }
            _0x2053c4[0x0].addEventListener("click", () => {
                window.parent.postMessage("JILI_GAME_CloseWebView", "*");
            });
            hasAddBackClick = true;
        } catch (_0xb73176) {}
    }
}, 0x3e8);
replaceHost = (_0x48d614, _0x7c9b6b) => {
    if (_0x7c9b6b == true) {
        if (hasOpen) {
            _0x48d614 = _0x48d614.replaceAll(/\/\/[^/]*/g, "//" + hostName);
            // console.log(_0x48d614);
        } else {
            _0x48d614 = _0x48d614.replaceAll(/\/\/[^/]*/g, "//" + hostName);
        }
        // console.log(`replaceHost-0000-_0x48d614-${_0x48d614}`);

        _0x48d614 = _0x48d614.replace(/^https?:\/\/(uat-history-api|uat-language-api)\.1b12\.pro/, location.protocol + "//" + hostName);

        // console.log(`replaceHost-1111-_0x48d614-${_0x48d614}`);
    } else {
        _0x48d614 = _0x48d614.replaceAll(/\/\/[^/]*/g, "//" + hostName);

        // console.log(`replaceHost-2222-_0x48d614-${_0x48d614}`);
    }
    if (_0x48d614.indexOf("/language/") > 0x0) {
        _0x48d614 = _0x48d614 + "&gameId=" + gameId;

        // console.log(`replaceHost-3333-_0x48d614-${_0x48d614}`);
    }

    _0x48d614 = _0x48d614.replace("https://", `${window.location.protocol}//`);
    console.log(`replaceHost-4444-_0x48d614-${_0x48d614}`);
    return _0x48d614;
};
var openBase = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (..._0x4289b6) {
    let _0x29e8cc = this.send;
    let _0x5a1f4d = this;
    let _0x7d9971 = [];
    if (_0x4289b6[0x1].indexOf("/token") > 0x0) {
        console.log(`-------------window.fetch---/token----------------`);
        _0x4289b6[0x0] = "GET";
    }
    _0x4289b6[0x1] = replaceHost(_0x4289b6[0x1], true);
    this.send = function (..._0x3cb115) {
        _0x7d9971 = _0x3cb115;
        return _0x29e8cc.apply(_0x5a1f4d, _0x3cb115);
    };
    return openBase.apply(this, _0x4289b6);
};
let fecthBase = window.fetch;
window.fetch = (..._0x6146a8) => {
    // console.log(`-------------window.fetch-------------------`);
    _0x6146a8[0x0] = replaceHost(_0x6146a8[0x0], false);
    return fecthBase(..._0x6146a8);
};
