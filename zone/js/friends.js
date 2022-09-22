$(document).ready(function(){

    let friends = {
        init: function(url) {
            $.ajaxSettings.async = false;
            let index = layer.load(2, {shade: [0.6, '#393D49']});
            $.getJSON(url,function(result){

                $.each(result, function(i, field){
                    $(".tools").append('<div class="card" onclick="window.open(\'' + field.url +'\')" >' +
                        '<img className="lazyload" data-src="/images/loading.gif" src=\"'+field.img+'\" data-loaded="true">' +
                        '<div class="card-header">' + '<div style="color: #33aaff;font-weight: bold;">' + field.name + '</div>' + '</div>' + '<div class="card-content">' + '<div style="border-top: 1px dashed #ddd;">' + field.dec + '</div>' + '</div>' + '</div>');

                });
                layer.close(index);
            });
            $.ajaxSettings.async = true;
        }
    };
    friends.init("/zone/db/friends.json");

});