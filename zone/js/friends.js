$(document).ready(function(){

    let friends = {
        init: function(url) {
            let that = this;
            $.ajaxSettings.async = false;
            $.getJSON(url,function(result){
                let li = "";
                $.each(result, function(i, field){
                    li += '<div class="card" onclick="window.open(\'' + field.url +'\')" >' +
                        '<img className="lazyload" data-src="/images/loading.gif" src=\"'+field.img+'\" data-loaded="true">' +
                        '<div class="card-header">' + '<div style="color: #33aaff;font-weight: bold;">' + field.name + '</div>' + '</div>' + '<div class="card-content">' + '<div style="border-top: 1px dashed #ddd;">' + field.dec + '</div>' + '</div>' + '</div>';


                });
                $(".tools").append(li);
            });
            $.ajaxSettings.async = true;
        }
    };
    // 传入json文件的路径
    friends.init("/zone/db/friends.json");

});