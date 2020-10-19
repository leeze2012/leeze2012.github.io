var myUtil;
myUtil = {
    logStyle: "background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(106,189,205,1) 12%, rgba(129,204,102,1) 28%, rgba(94,139,201,1) 39%, rgba(152,183,221,1) 51%, rgba(137,117,209,1) 64%, rgba(190,232,233,1) 78%, rgba(133,214,197,1) 87%, rgba(231,186,232,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size: 2.0em;",
    checkPlugins: function() {
        navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) || setTimeout(function() {
                console.info("--------检测是否启用广告屏蔽插件--------");
                var o = document.querySelectorAll(".adsbygoogle"),
                    i = o.length;
                o.forEach(function(o, n) {
                    "" == o.innerHTML && 0 === (i -= 1) && console.info("检测到您启用广告屏蔽插件，请关闭")
                })
            },
            4e3)
    },
    xDecode: function(o) {
        return null == o || "" == o ? o: o.replace(/\\x(\w{2})/g,
            function(o, n) {
                return String.fromCharCode(parseInt(n, 16))
            })
    },
    xEncode: function(o) {
        return null == o || "" == o ? o: o.replace(/(\S)/g,
            function(o, n) {
                return "\\x" + n.charCodeAt(0).toString(16)
            })
    },
    isPC: function() {
        for (var o = navigator.userAgent,
                 n = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], i = !0, t = 0; t < n.length; t++) if (0 < o.indexOf(n[t])) {
            i = !1;
            break
        }
        return i
    },
    init: function() {
        window.console && console.log("%c ", "background: url(https://cdn.jsdelivr.net/gh/leeze2012/blog-assets/img/body-bg-6.jpg) no-repeat center;padding-left:1366px;padding-bottom: 490px;"),
        this.isPC() && window.console && (this.customLogInfo("---联系方式  > > >  QQ：374328123---"), this.customLogInfo("小四儿，Java软件工程师，多年Java EE 从业经验，目前在北京工作。\n主要技能点：Java后端开发、Spring Cloud微服务、聚合支付、公众号开发、小程序开发、Linux\n欢迎来到`小四儿`的技术博客，这里将深入探讨相关技术，包括行业动态，架构设计，设计模式，框架使用等。\n\n----------------友链----------------\n\n技术博客：https://www.xiaosige.com/\n个人简历：https://hacknical.com/leeze2012/resume?locale=zh\nGitHub：https://github.com/leeze2012\nGitee：https://gitee.com/leeze"))
    },
    customLog: function(o) {
        console.log("%c" + o, this.logStyle)
    },
    customLogInfo: function(o) {
        console.info("%c" + o, this.logStyle)
    }
},
window.onload = function() {
    myUtil.init()
};