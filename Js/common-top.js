
$(document).ready(function() {

    /*******************
     * 用户状态相关 
     *******************/
    if (!!username) {
    	$("#common-nav #username").text(username);
        $("#common-nav #username").show();
    	$("#common-nav #logout").show();
        $("#common-nav #login").hide();
    } else {
    	$("#common-nav #username").hide();
        $("#common-nav #logout").hide();
        $("#common-nav #login").show();
    }

    $("#common-nav #logout").click(function() {
    	$.get("/Ajax/Logout", function(result) {
    		$("#common-nav #username").hide();
    		$("#common-nav #logout").hide();
            $("#common-nav #login").show();
    	}, "json");
    });


    /*******************
     * 添加收藏 
     *******************/
    $('#addfavor').click(function() {
        if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
            window.sidebar.addPanel(document.title,window.location.href,'');
        } else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
            window.external.AddFavorite(location.href,document.title); 
        } else if(window.opera && window.print) { // Opera Hotlist
            this.title=document.title;
            return true;
        } else { // webkit - safari/chrome
            alert('按 ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏本页，访问更便捷。');
        }
    });


    /*******************
    * 目录下滑菜单 
    *******************/
    $("#header-link-mulu").mouseover(function(){
        $("#header-down").stop(true, false).slideDown(500);
    });

    $("#header-link-mulu").mouseout(function(){
        $("#header-down").stop(true, false).delay(200).slideUp(500);
    });

    $("#header-down").mouseover(function(){
        $(this).stop(true, false).slideDown(0);
    });

    $("#header-down").mouseout(function(){
        $(this).stop(true, false).slideUp(500);
    });

    $("body").mousewheel(function(){
        $("#header-down").stop(true, false).slideDown(500).delay(1000).slideUp(500);
    });
    
});