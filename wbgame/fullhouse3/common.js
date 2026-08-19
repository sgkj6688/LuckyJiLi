
    function GetLinkParameterByName(name) {
      var url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function CheckReplayUrlSkin(name) {
      let zero = "0".charCodeAt( 0 );
      let nine = "9".charCodeAt( 0 );
      let char_a = "a".charCodeAt( 0 );
      let char_z = "z".charCodeAt( 0 );
      let char_A = "A".charCodeAt( 0 );
      let char_Z = "Z".charCodeAt( 0 );

      let decodedData = "";
      for ( let i = 0; i < replayData.length; i++ )
      {
          let data = replayData.charCodeAt( i );
          if ( data >= zero && data <= nine )
          {
              data = nine - ( data - zero );
              decodedData = decodedData + String.fromCharCode( data );
          }
          else if ( data >= char_a && data <= char_z && i % 2 == 0 )
          {
              data = char_z - ( data - char_a );
              decodedData = decodedData + String.fromCharCode( data );
          }
          else if ( data >= char_A && data <= char_Z && i % 3 == 0 )
          {
              data = char_Z - ( data - char_A );
              decodedData = decodedData + String.fromCharCode( data );
          }
          else
          {
              decodedData = decodedData + String.fromCharCode( data );
          }
      }

      let data = atob( decodedData );
      name = name.replace( /[[\]]/g, "\\$&" );
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(data);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function Log(eventId) {
    //   var title = document.title;
    //   var search = location.search.split(/(?:\?|&)/g);
    //   for (var i = 0; i < search.length; i++) {
    //     var gameId = search[i].split("gameID=")[1];
    //     if (gameId) {
    //       break;
    //     }
    //   }

    //   let apiId = GetLinkParameterByName('apiId');
    //   if ((apiId == "10210" || apiId == "6") && window.location.href.indexOf("\/fg\/") > 0) {
    //     gameId = "109";
    //   }
    //   if (gameId === null || gameId === undefined) {
    //     return;
    //   }
    //   let SSOKey = GetLinkParameterByName("ssoKey");
    //   let gs = (GetLinkParameterByName("domain_platform") || GetLinkParameterByName("gs") || "gnidnawcs")
    //     .split("").reverse().join("");
    //   let url = window.location.protocol+"//" + gs + "/webservice/event/trigger?";
    //   url += "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" + gameId + "&GameVersion=" + new Date().getTime() + "&EventID=" + eventId +
    //     "&EventStatus=0&SSOKey=" + SSOKey + "&CreateTime=" + new Date().toISOString() + "&ApiId=" + apiId;
    //   Send(url);
    }

    function Send(url) {
      var headers = {
        Accept: 'application/json, text/javascript, text/plain',
      };
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      if (headers) {
        Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
      }

      xhr.timeout = 5000;

      xhr.onload = evt => { };

      xhr.onerror = evt => {
        // Send(url);
      };

      xhr.ontimeout = evt => {
        // Send(url);
      };
      xhr.send();
    }

    function OnResize() {
      var isLandscape = document.body.clientWidth > document.body.clientHeight;

    }

    window.addEventListener('load', () => {
      OnResize();
    });

    Log(94);
    window.StartTime = Date.now();
    
    // 設定網頁icon
    let link = document.createElement('link');
    link.rel = 'icon';
    if (GetLinkParameterByName('skin') == 1) {
        link.href = 'favicon1.ico';
    } 
    else {
        link.href = 'favicon0.ico';
    }
    document.head.appendChild(link);

    // 取網址列參數
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlParams_get = function (name) {
      return urlParams.get(name) || '';
    }

    // 建立記錄時間的物件
    const pageLoadTiming = {
      logs: {},

      // 記錄時間點
      logTime(eventName) {
        this.logs[eventName] = new Date();
      },

      // 計算時間差（毫秒）
      calculateDuration(no, startEvent, endEvent) {
        if (isFirst && urlParams_get('demo') != 'true') {
          if (!this.logs[startEvent] || !this.logs[endEvent]) {
            return 'no Record';
          }
          let search = location.search.split(/(?:\?|&)/g);
          let gameId = '';
          for (var i = 0; i < search.length; i++) {
            gameId = search[i].split("gameID=")[1];
            if (gameId) {
              break;
            }
          }
          let value = this.logs[endEvent] - this.logs[startEvent];

          const report = 'https://' + urlParams_get('domain_platform').split('').reverse().join('') + '/webservice/event/loading';
          const params = '?EventNo=' + no + '&EventValue=' + value + '&AccountID=-1&GameVersion=-1' + '&SSOKey=' + urlParams_get('ssoKey') + '&ApiID=' + urlParams_get('apiId') + '&GameID=' + gameId;
          let xhr = new XMLHttpRequest();
          xhr.open('get', report + params);
          xhr.send();
        }
      }
    };

    // 記錄 head 開始時間
    pageLoadTiming.logTime('headStartTime');

    let isFirst = true;
    // 檢查 localStorage 是否可用
    try {
      const isSaved = localStorage.getItem('slotIndexFirstLog');
      if (isSaved) {
        isFirst = false;
      } else {
        localStorage.setItem('slotIndexFirstLog', '1');
      }
    } catch (e) {
      isFirst = false;
    }

    window.onload = function () {
      Log(95)
      // HTML 頁面載入完成時間點 Log
      pageLoadTiming.logTime('log955');
      pageLoadTiming.calculateDuration(955, 'headStartTime', 'log955');
    };

    // 記錄初始載入時間
    pageLoadTiming.logTime('log940');

    // Client API script injection
    if (urlParams_get("clientApiMode") == 1) {
      // 1X2 Network
      let s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      let jsUrl = "https://cdn.1x2networkhub.com/f1x2games/infrastr_generic-framework/clientAPI.game.min.js";
      if (location.hostname.startsWith("uat")) {
        jsUrl = "https://cdn-stage.1x2networkhub.com/f1x2games/infrastr_generic-framework/clientAPI.game.min.js";
      }
      s.setAttribute("src", jsUrl);
      document.head.appendChild(s);
    }
    else if (urlParams_get("clientApiMode") == 3) {
      // Relax
      let s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("src", "https://cf-mt-cdn1.relaxg.com/casino/relaxlibs/feim/1.17.1/rlxfeim.min.js");
      document.head.appendChild(s);
    }