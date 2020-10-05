// 在此处添加JSON文件地址和渲染的节点className
links = [
  {
    "url": "./mine.json",
    "className": ".mine"
  },
  {
    "url": "./docs.json",
    "className": ".docs"
  },
]

stars = {
  init: function(links, className) {
    var that = this
      stars.forEach(function (element) {
        var url = element.url
        var className = element.className
        $.getJSON(url,
          function(data) {
              that.render(data, className);
          });
      });
  },
  render: function(data, name) {
      var nickname, site, li = "";
      for (var i = 0; i &lt; data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')">' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(name).append(li);
  }
}

stars.init(links)

// stars.init("./mine.json", ".mine")
// stars.init("./docs.json", ".docs")
// stars.init("./code.json", ".code")
// stars.init("./skill.json", ".skill")
// stars.init("./school.json", ".school")
// stars.init("./community.json", ".community")
// stars.init("./serve.json", ".serve")
// stars.init("./sitetool.json", ".sitetool")
// stars.init("./design.json", ".design")
// stars.init("./tools.json", ".tools")
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