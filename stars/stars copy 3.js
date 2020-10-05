// 多个JSON数组文件多次调用
stars = {
  init: function(url, className) {
    var that = this
    $.getJSON(url,
      function(data) {
          that.render(data, className);
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