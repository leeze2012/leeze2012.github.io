var link ={
    init: function () {
        var that = this;
        //这里设置的是刚才生成的 json 文件路径
        $.getJSON("/links/linklist.json", function (data) {
            that.render(data);
        });
    },
    shuffle: function shuffle(arr){
        for(var i = 0, len = arr.length; i &lt; len;i ++){
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
        for (var i = 0; i &lt; data.length; i++) {
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
<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script><link rel="stylesheet" href="/css/spoiler.css" type="text/css"><script src="/js/spoiler.js" type="text/javascript" async></script>