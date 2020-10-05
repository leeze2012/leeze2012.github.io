// 采用一个多对象JSON文件存储所有数据的方式
stars = {
  init: function(url) {
    var that = this;
    $.getJSON(url,
      function(data){
        for(var className in data){
          var classData = data[className]
          that.render(classData,className)
        }
      }
    )
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
// 传入json文件的路径
stars.init("./allStars.json")




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