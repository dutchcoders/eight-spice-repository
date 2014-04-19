(function() {
    function loadScript(url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    var j = jQuery.noConflict();
                    callback(j);
                }
            };
        } else { //Others
            script.onload = function() {
                var j = jQuery.noConflict();
                callback(j);
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function($) {
        $(document).ready(function() {
            $('div.list ul li[data-vr-contentbox] a').each(function(index, value) {
                var href = $(value).attr('href');
                $.get(href, function(data) {
                    console.log(href);
                    $(value).after($(data).find('div.article h2.summary').html());
                });
            });
        });
    });
})();