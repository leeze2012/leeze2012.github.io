<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>var link ={
    init: function () {
        var that = this;
        //这里设置的是刚才生成的 json 文件路径
        $.getJSON("/links/linklist.json", function (data) {
            that.render(data);
        });
    },
    shuffle: function shuffle(arr){
        for(var i = 0, len = arr.length; i < len;i ++){
            var a = parseInt(Math.random()*len);
            var temp = arr[a];
            arr[a] = arr[i];
            arr[i] = temp;
        }
        return arr;
    },
    render: function (data) {
        data = this.shuffle(data);
        var linkitem, nickname, avatar, site, intro, html = "";
        for (var i = 0; i < data.length; i++) {
            nickname = data[i].nickname;
            avatar = data[i].avatar;
            site = data[i].site;
            intro = data[i].intro;
            linkitem = '<a href="' + site + '" target="_blank" class="link-item">' +
                            '<div class="link-cover-container">' +
                                '<div class="link-cover" style="background: url(' + avatar + ');"></div>' +
                                '<div class="link-intro"><p>' + intro + '</p></div>' +
                            '</div>' +
                            '<div class="link-info">' + 
                                '<div class="link-nickname"><p>' + nickname + '</p></div>' +
                            '</div>' +
                       '</a>';
           
            html += linkitem;
        };
        $("#links").empty();
        $("#links").append(html);
    }
};

link.init();
