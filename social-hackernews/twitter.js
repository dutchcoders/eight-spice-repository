(function() {
function loadScript(url, callback) {
	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState) { //IE
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				var j = jQuery.noConflict();
				callback(j);
			}
		};
	} else { //Others
		script.onload = function () {
			var j = jQuery.noConflict();
			callback(j);
		};
	}

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
}


loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function ($) {
    var cssLink = $("<link>");
    cssLink.insertBefore($('link:first')); // prepend allows overrule
    cssLink.attr({
        rel: "stylesheet",
        type: "text/css",
        href: '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
    });

    $(document).ready(function() {
        $('.title').each(function(i, elem) {
            $("<a href='https://twitter.com/share?url="+$(this).attr('href')+"&text="+$(this).text()+"' class='twitter-share-button' data-lang='en'>Tweet</a>").appendTo($(this));
        });
        
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    });
 });
})();

