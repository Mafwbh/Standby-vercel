
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f9358ca4-85fc-5943-9a66-8e61a80ee427")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62501],{869071:function(i,e,t){"use strict";let o=t(433385);function r(i){return/^[a-f0-9]{40}$/i.test(i)}e.Z=function(i,e){let t,a;if("string"!=typeof i||!i.length)return null;if(i.startsWith("git@"))switch(!0){case i.startsWith("git@github.com:"):t="github",a=i.replace("git@github.com:","");break;case e&&i.startsWith(`git@${e}:`):t="ghes",a=i.replace(`git@${e}:`,"");break;case i.startsWith("git@gitlab.com:"):t="gitlab",a=i.replace("git@gitlab.com:","");break;case i.startsWith("git@bitbucket.org:"):t="bitbucket",a=i.replace("git@bitbucket.org:","");break;default:return null}else{let r=o.parse(i);if(!r.pathname)return null;switch(r.hostname){case"github.com":case"www.github.com":t="github";break;case e:t="ghes";break;case"gitlab.com":case"www.gitlab.com":t="gitlab";break;case"bitbucket.org":case"www.bitbucket.org":t="bitbucket";break;default:return null}a=r.pathname.replace(/(^\/|\/$)/g,"")}let n=(a=a.replace(/\.git$/,"")).split("/").filter(Boolean);if(n.length<2)return null;if(2===n.length)return{type:t,owner:n[0],name:n[1],branch:"",sha:"",subdir:""};let s="",l="",b="",c=n[0],u=n[1];if("github"===t){if("blob"!==n[2]&&"tree"!==n[2]&&"commit"!==n[2])return null;r(n[3])?l=n[3]:s=n[3],b=n.slice(4).join("/")}else if("ghes"===t){if("blob"!==n[2]&&"tree"!==n[2]&&"commit"!==n[2])return null;r(n[3])?l=n[3]:s=n[3],b=n.slice(4).join("/")}else if("gitlab"===t){if("-"===n[2])("blob"===n[3]||"tree"===n[3]||"commit"===n[3])&&(r(n[4])?l=n[4]:s=n[4],b=n.slice(5).join("/"));else{let i=n.indexOf("-");-1===i?u=n.slice(1).join("/"):(u=n.slice(1,i).join("/"),("blob"===n[i+1]||"tree"===n[i+1]||"commit"===n[i+1])&&(r(n[i+2])?l=n[i+2]:s=n[i+2],b=n.slice(i+3).join("/")))}}else if("bitbucket"===t){if("src"!==n[2]&&"commits"!==n[2])return null;r(n[3])?l=n[3]:s=n[3],b=n.slice(4).join("/")}return{type:t,owner:c,name:u,branch:s,sha:l,subdir:b}}},375088:function(i,e,t){var o;!function(r,a){"use strict";var n="function",s="undefined",l="object",b="string",c="model",u="name",w="type",d="vendor",m="version",p="architecture",h="console",f="mobile",g="tablet",v="smarttv",x="wearable",k="embedded",_="Amazon",y="Apple",j="ASUS",N="BlackBerry",T="Browser",q="Chrome",S="Firefox",E="Google",C="Huawei",z="Microsoft",U="Motorola",A="Opera",O="Samsung",W="Sony",R="Xiaomi",B="Zebra",M="Facebook",P=function(i,e){var t={};for(var o in i)e[o]&&e[o].length%2==0?t[o]=e[o].concat(i[o]):t[o]=i[o];return t},$=function(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e},V=function(i,e){return typeof i===b&&-1!==I(e).indexOf(I(i))},I=function(i){return i.toLowerCase()},L=function(i,e){if(typeof i===b)return i=i.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof e===s?i:i.substring(0,255)},Z=function(i,e){for(var t,o,r,s,b,c,u=0;u<e.length&&!b;){var w=e[u],d=e[u+1];for(t=o=0;t<w.length&&!b;)if(b=w[t++].exec(i))for(r=0;r<d.length;r++)c=b[++o],typeof(s=d[r])===l&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):void 0:this[s[0]]=c?s[1].call(this,c,s[2]):void 0:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):void 0):this[s]=c||a;u+=2}},D=function(i,e){for(var t in e)if(typeof e[t]===l&&e[t].length>0){for(var o=0;o<e[t].length;o++)if(V(e[t][o],i))return"?"===t?a:t}else if(V(e[t],i))return"?"===t?a:t;return i},F={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,m],[/opios[\/ ]+([\w\.]+)/i],[m,[u,A+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[u,A]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[u,"UC"+T]],[/\bqbcore\/([\w\.]+)/i],[m,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+T],m],[/\bfocus\/([\w\.]+)/i],[m,[u,S+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[u,A+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[u,A+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[m,[u,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+T]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+T],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,M],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[u,q+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,q+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[u,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,m],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[m,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[m,D,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[u,S+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,I]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",I]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,I]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[d,O],[w,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[d,O],[w,f]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[d,y],[w,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[d,y],[w,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[d,C],[w,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[d,C],[w,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[d,R],[w,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[d,R],[w,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[d,"OPPO"],[w,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[d,"Vivo"],[w,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[d,"Realme"],[w,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[d,U],[w,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[d,U],[w,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[d,"LG"],[w,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[d,"LG"],[w,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[d,"Lenovo"],[w,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[d,"Nokia"],[w,f]],[/(pixel c)\b/i],[c,[d,E],[w,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[d,E],[w,f]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[d,W],[w,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[d,W],[w,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[d,"OnePlus"],[w,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[d,_],[w,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[d,_],[w,f]],[/(playbook);[-\w\),; ]+(rim)/i],[c,d,[w,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[d,N],[w,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[d,j],[w,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[d,j],[w,f]],[/(nexus 9)/i],[c,[d,"HTC"],[w,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[d,[c,/_/g," "],[w,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[d,"Acer"],[w,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[d,"Meizu"],[w,f]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[d,"Sharp"],[w,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[d,c,[w,f]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[d,c,[w,g]],[/(surface duo)/i],[c,[d,z],[w,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[d,"Fairphone"],[w,f]],[/(u304aa)/i],[c,[d,"AT&T"],[w,f]],[/\bsie-(\w*)/i],[c,[d,"Siemens"],[w,f]],[/\b(rct\w+) b/i],[c,[d,"RCA"],[w,g]],[/\b(venue[\d ]{2,7}) b/i],[c,[d,"Dell"],[w,g]],[/\b(q(?:mv|ta)\w+) b/i],[c,[d,"Verizon"],[w,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[d,"Barnes & Noble"],[w,g]],[/\b(tm\d{3}\w+) b/i],[c,[d,"NuVision"],[w,g]],[/\b(k88) b/i],[c,[d,"ZTE"],[w,g]],[/\b(nx\d{3}j) b/i],[c,[d,"ZTE"],[w,f]],[/\b(gen\d{3}) b.+49h/i],[c,[d,"Swiss"],[w,f]],[/\b(zur\d{3}) b/i],[c,[d,"Swiss"],[w,g]],[/\b((zeki)?tb.*\b) b/i],[c,[d,"Zeki"],[w,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[d,"Dragon Touch"],c,[w,g]],[/\b(ns-?\w{0,9}) b/i],[c,[d,"Insignia"],[w,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[d,"NextBook"],[w,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],c,[w,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[d,"LvTel"],c,[w,f]],[/\b(ph-1) /i],[c,[d,"Essential"],[w,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[d,"Envizen"],[w,g]],[/\b(trio[-\w\. ]+) b/i],[c,[d,"MachSpeed"],[w,g]],[/\btu_(1491) b/i],[c,[d,"Rotor"],[w,g]],[/(shield[\w ]+) b/i],[c,[d,"Nvidia"],[w,g]],[/(sprint) (\w+)/i],[d,c,[w,f]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[d,z],[w,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[d,B],[w,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[d,B],[w,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,c,[w,h]],[/droid.+; (shield) bui/i],[c,[d,"Nvidia"],[w,h]],[/(playstation [345portablevi]+)/i],[c,[d,W],[w,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[d,z],[w,h]],[/smart-tv.+(samsung)/i],[d,[w,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[d,O],[w,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[d,"LG"],[w,v]],[/(apple) ?tv/i],[d,[c,y+" TV"],[w,v]],[/crkey/i],[[c,q+"cast"],[d,E],[w,v]],[/droid.+aft(\w)( bui|\))/i],[c,[d,_],[w,v]],[/\(dtv[\);].+(aquos)/i],[c,[d,"Sharp"],[w,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[d,L],[c,L],[w,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,v]],[/((pebble))app/i],[d,c,[w,x]],[/droid.+; (glass) \d/i],[c,[d,E],[w,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[d,B],[w,x]],[/(quest( 2)?)/i],[c,[d,M],[w,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[d,[w,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[w,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[w,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,g]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[w,f]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[d,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[m,D,F]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[m,D,F]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,m],[/\(bb(10);/i],[m,[u,N]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[u,S+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[u,q+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,m],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[u,m]]},H=function(i,e){if(typeof i===l&&(e=i,i=a),!(this instanceof H))return new H(i,e).getResult();var t=i||(typeof r!==s&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=e?P(G,e):G;return this.getBrowser=function(){var i,e={};return e[u]=a,e[m]=a,Z.call(e,t,o.browser),e.major=typeof(i=e.version)===b?i.replace(/[^\d\.]/g,"").split(".")[0]:a,e},this.getCPU=function(){var i={};return i[p]=a,Z.call(i,t,o.cpu),i},this.getDevice=function(){var i={};return i[d]=a,i[c]=a,i[w]=a,Z.call(i,t,o.device),i},this.getEngine=function(){var i={};return i[u]=a,i[m]=a,Z.call(i,t,o.engine),i},this.getOS=function(){var i={};return i[u]=a,i[m]=a,Z.call(i,t,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(i){return t=typeof i===b&&i.length>255?L(i,255):i,this},this.setUA(t),this};H.VERSION="1.0.2",H.BROWSER=$([u,m,"major"]),H.CPU=$([p]),H.DEVICE=$([c,d,w,h,f,v,g,x,k]),H.ENGINE=H.OS=$([u,m]),typeof e!==s?(i.exports&&(e=i.exports=H),e.UAParser=H):t.amdO?a!==(o=(function(){return H}).call(e,t,e,i))&&(i.exports=o):typeof r!==s&&(r.UAParser=H);var X=typeof r!==s&&(r.jQuery||r.Zepto);if(X&&!X.ua){var Q=new H;X.ua=Q.getResult(),X.ua.get=function(){return Q.getUA()},X.ua.set=function(i){Q.setUA(i);var e=Q.getResult();for(var t in e)X.ua[t]=e[t]}}}("object"==typeof window?window:this)},435121:function(i){i.exports={link:"components_link__Y94ZX",baseText:"components_baseText__udpdE",bold:"components_bold__FRC5P",code:"components_code__4MjHQ",italic:"components_italic__3N1Z0",strikethrough:"components_strikethrough__mUe5K",textWrapper:"components_textWrapper__yOyu7",mentionElement:"components_mentionElement__uS_BL",currentUser:"components_currentUser__4BC9B",customEmoji:"components_customEmoji__IQ1g0",list:"components_list__47Rjz",quote:"components_quote__SaUM9"}},628499:function(i,e,t){"use strict";t.d(e,{f:function(){return m},B:function(){return u}});var o=t(23870),r=t(203713),a=(0,o.createContext)({Text:()=>null});function n(){return(0,o.useContext)(a)}function s(i){let{children:e,components:t}=i;return(0,r.jsx)(a.Provider,{value:t,children:e})}var l=t(173392),b=t(435121),c=(0,o.createContext)({});function u(i){let{children:e,components:t,...o}=i;return(0,r.jsx)(s,{components:t,children:(0,r.jsx)(c.Provider,{value:o,children:e})})}var w={link:({element:i,children:e})=>(0,r.jsx)("a",{className:b.link,href:i.url,rel:"noopener noreferrer",target:"_blank",children:e}),paragraph:({children:i})=>{let{Text:e}=n();return(0,r.jsx)(e,{className:b.textWrapper,as:"p",color:"inherit",children:i})},mention:({element:i,children:e})=>{let{Text:t}=n(),{userId:a}=(0,o.useContext)(c);return(0,r.jsxs)(t,{as:"span",className:(0,l.W)(b.mentionElement,{[b.currentUser]:a===i.user.id}),weight:500,children:["@",i.user.displayName,e]})},emoji:({children:i,element:e})=>(0,r.jsxs)("span",{title:`:${e.name}:`,children:[(0,r.jsx)("img",{alt:e.name,className:b.customEmoji,src:e.imageUrl}),i]}),list:({children:i,element:e})=>{let{Text:t}=n();return(0,r.jsx)(t,{as:e.ordered?"ol":"ul",className:b.list,color:"inherit",children:i})},"list-item":({children:i})=>(0,r.jsx)("li",{children:i}),quote:({children:i})=>{let{Text:e}=n();return(0,r.jsx)(e,{as:"blockquote",className:b.quote,color:"accents-6",children:i})}};function d({node:i}){let e=n();if("type"in i){let t=w[i.type];return t?(0,r.jsx)(t,{element:i,children:i.children.map(i=>(0,r.jsx)(d,{node:i}))}):(0,r.jsx)(e.Text,{className:b.textWrapper,as:"p",color:"inherit",children:i.children.map(i=>(0,r.jsx)(d,{node:i}))})}let t=(0,l.W)(b.baseText,{[b.bold]:i.bold,[b.italic]:i.italic,[b.code]:i.code,[b.strikethrough]:i.strikethrough});return(0,r.jsx)("span",{className:t,children:i.text})}function m(i){return(0,r.jsx)(r.Fragment,{children:i.body.map(i=>(0,r.jsx)(d,{node:i}))})}}}]);
//# debugId=f9358ca4-85fc-5943-9a66-8e61a80ee427
