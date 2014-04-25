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
        $(document).ready(function()
        {
            console.log('test tamper');

            $(document).on('click', '.v-post-tile', function() {

                console.log('opening article');

                setTimeout(function() {
                    console.log('trying to set refund hook');
                    $(document).on('mouseenter', '.v-close', function() {
                        setTimeout(function() {
                            console.log('trying to refund');
                            $('.item-refund .lnk-refund')[1].click();
                            setTimeout(function() {
                                $('#other').click();
                                $('textarea[name="other"]').val('eight-spice gratis blendle lezen plugin');
                                setTimeout(function() {
                                    $('.btn-refund').click();
                                    setTimeout(function() {
                                        $('.btn-okay').click();
                                    }, 200);
                                }, 100);
                            }, 500);
                        }, 10);
                    });
                }, 10000);
            });

        });
    });
})();