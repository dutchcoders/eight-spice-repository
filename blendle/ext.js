
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
function main() {
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
}
// load jQuery and execute the main function
addJQuery(main);
