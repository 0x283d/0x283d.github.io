//////////////////////////////////////////////////////////////
(function()
{
    //////////////////////////////////////////////////////////////
    //v.useful lil plugin
    //thx @mr.psycho ~ http://stackoverflow.com/a/12426657
    //////////////////////////////////////////////////////////////
    $.fn.noScrollOuter=function()
    {
        var _noScrollOuter=function(e)
        {
            var dy=e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var h=$(this).height(), sT=$(this).scrollTop(), sH=this.scrollHeight;
            return ( (sH==h) || !((dy>0 && sT<=0) || (dy<0 && sT>=(sH-h))) );
        }
        this.on("mousewheel DOMMouseScroll", _noScrollOuter);
        return this;
    }

    //////////////////////////////////////////////////////////////
    var showTheCraft=function()
    {
        $("#splash").css("visibility", "hidden");
        V313.runTestData.pause();
        $("#steps").show();
        window.dispatchEvent(new Event('resize'));
 
        var obj=$(window.location.hash);
        obj.length && $("html, body").scrollTop(obj.offset().top) || (window.location.hash="#intro");
    }

    //////////////////////////////////////////////////////////////
    var hideTheCraft=function()
    {
        $("#splash").css("visibility", "visible");
        $("#steps").hide();
    }

    //////////////////////////////////////////////////////////////
    //add deep linx to the browser addy-bar
    //////////////////////////////////////////////////////////////
    $.fn.addDeepLinx=function()
    {
        var _addDeepLinx=function(e)
        {
            this.hash && window.location.hash==this.hash && $("html, body").scrollTop($(this.hash).offset().top);
            return this.hash && (window.location.hash=this.hash) && false;
        }
        this.on("click", _addDeepLinx);
        return this;
    }

    //////////////////////////////////////////////////////////////
    $(function()
    {
        $("#splash").css("visibility", "visible").show();
        $("#steps").css("visibility", "visible").hide();

        window.location.hash && showTheCraft();
        $("#show-details").on("click", showTheCraft);
        $(".skullie").on("click", hideTheCraft);
        $('.section-anchor').addDeepLinx();

        $("a", "#sh-fanks").hover(function() { $(".c4", "#sh-fanks1").toggleClass("c4h") });
        $("a", "#wr-fanks").hover(function() { $(".c5", this).toggleClass("c5h") });
    });

})();

//////////////////////////////////////////////////////////////
//all done ;)
