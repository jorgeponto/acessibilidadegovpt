var app = {};
var pathname = window.location.pathname;

$(document).ready(function () {
    app = {
        vars:{
            initBreakpointDesktop: null
        },
        init: function () {
            app.checkMenu();
			app.experienceMenu();
			app.smallMenu();
            app.onLoadResize();
            app.cookies();
            app.searchSubmit();
            app.accessMonitorSend();
        },
        //CHECK MENU
        checkMenu:function(){
            if(pathname == '/acessibilidade/index.php' || pathname == '/acessibilidade/'){
                $("#top-bar2 #site_title").empty();
                $("#top-bar2 #site_title").append('<h1 class="d-block"><span class="bold">acessibilidade</span><br class="d-sm-none d-block">.gov.pt</h1>');
                $("#small_menu #site_title_small").empty();
                $("#small_menu #site_title_small").append('<h1 class="d-block"><span class="bold">acessibilidade<br class="d-sm-none d-block"></span>.gov.pt</h1>');
            }
            else{
                $("#top-bar2 #site_title").empty(); 
                $("#top-bar2 #site_title").append('<a href="index.php" title="ir para a página de entrada do acessibilidade.gov.pt"><span class="bold">acessibilidade</span><br class="d-sm-none d-block">.gov.pt</a>');
                $("#small_menu #site_title_small").empty();
                $("#small_menu #site_title_small").append('<a href="index.php" title="ir para a página de entrada do acessibilidade.gov.pt"><span class="bold">acessibilidade<br class="d-sm-none d-block"></span>.gov.pt</a>');
            }
            switch(pathname) {
                case "/acessibilidade/index.php":
                    $("#nav_index").attr("aria-current","page");
                    $("#nav_small_index").parent().attr("aria-current","page");
                    $("#nav_small_index").attr("aria-current","page");
                    $("#title_description_small").show();
                break;
                case "/acessibilidade/":
                    $("#nav_index").attr("aria-current","page");
                    $("#nav_small_index").parent().attr("aria-current","page");
                    $("#nav_small_index").attr("aria-current","page");
                    $("#title_description_small").show();
                break;
                case "/acessibilidade/about.php":
                    $("#nav_about").attr("aria-current","page");
                    $("#nav_small_about").parent().attr("aria-current","page");
                    $("#nav_small_about").attr("aria-current","page");
                break;
                case "/acessibilidade/about_article.php":
                    $("#nav_about").attr("aria-current","page");
                    $("#nav_small_about").parent().attr("aria-current","page");
                    $("#nav_small_about").attr("aria-current","page");
                break;
                case "/acessibilidade/contact.php":
                    $("#nav_contact").attr("aria-current","page");
                    $("#nav_small_contact").parent().attr("aria-current","page");
                    $("#nav_small_contact").attr("aria-current","page");
                break;
                case "/acessibilidade/blogue.php":
                    $("#nav_blogue").attr("aria-current","page");
                    $("#nav_small_blogue").parent().attr("aria-current","page");
                    $("#nav_small_blogue").attr("aria-current","page");
                break;
                case "/acessibilidade/blogue_category.php":
                    $("#nav_blogue").attr("aria-current","page");
                    $("#nav_small_blogue").parent().attr("aria-current","page");
                    $("#nav_small_blogue").attr("aria-current","page");
                break;
                case "/acessibilidade/b_article.php":
                    $("#nav_blogue").attr("aria-current","page");
                    $("#nav_small_blogue").parent().attr("aria-current","page");
                    $("#nav_small_blogue").attr("aria-current","page");
                break;
                case "/acessibilidade/publications.php":
                    $("#nav_publications").attr("aria-current","page");
                    $("#nav_small_publications").parent().attr("aria-current","page");
                    $("#nav_small_publications").attr("aria-current","page");
                break;
                case "/acessibilidade/tutorials.php":
                    $("#nav_tutorials").attr("aria-current","page");
                    $("#nav_small_tutorials").parent().attr("aria-current","page");
                    $("#nav_small_tutorials").attr("aria-current","page");
                break;
                case "/acessibilidade/tools.php":
                    $("#nav_tools").attr("aria-current","page");
                    $("#nav_small_tools").parent().attr("aria-current","page");
                    $("#nav_small_tools").attr("aria-current","page");
                break;
                case "/acessibilidade/tutorial.php":
                    $("#nav_tutorials").attr("aria-current","page");
                    $("#nav_small_tutorials").parent().attr("aria-current","page");
                    $("#nav_small_tutorials").attr("aria-current","page");
                break; 
                case "/acessibilidade/tutorial_pag2.php":
                    $("#nav_tutorials").attr("aria-current","page");
                    $("#nav_small_tutorials").parent().attr("aria-current","page");
                    $("#nav_small_tutorials").attr("aria-current","page");
                break; 
                case "/acessibilidade/tutorial_full.php":
                    $("#nav_tutorials").attr("aria-current","page");
                    $("#nav_small_tutorials").parent().attr("aria-current","page");
                    $("#nav_small_tutorials").attr("aria-current","page");
                break;        
            }



            // Instantiate the Bootstrap carousel
                $('.multi-item-carousel').carousel({
                    interval: false
                });
                
                // for every slide in carousel, copy the next slide's item in the slide.
                // Do the same for the next, next item.
                $('.multi-item-carousel .item').each(function(){
                    var next = $(this).next();
                    if (!next.length) {
                    next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                    
                    if (next.next().length>0) {
                    next.next().children(':first-child').clone().appendTo($(this));
                    } else {
                        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                    }
                });
                
        },


        //IF MOBILE ADD CLASSES (ACCORDIONS)
        onLoadResize:function(){
            var width = window.innerWidth;
                if(width < 992){
                //Pre-footer
                $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                    $(this).attr("data-toggle", "collapse");
                    $(this).attr("aria-expanded", "false");

                });
                $('#pre_footer div[data-toggle="collapse"] a').click(function (e) {
                   e.preventDefault();
                });

                //Experience Menu - HEADER
                $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                    $(this).attr("data-toggle", "collapse");
                    $(this).attr("aria-expanded", "false");
                });

                $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                    e.preventDefault();
                });

                 if(width < 767){
                    $("#experience_menu_desc").addClass("collapse");
                    $("#experience_menu #experience_menu_title").attr("data-toggle", "collapse");
                    $("#experience_menu #experience_menu_title").attr("data-target", "#experience_menu_desc");
                    
                }
                else{
                    $("#experience_menu_desc").removeClass("collapse");
                    $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                    $("#experience_menu #experience_menu_title").attr("data-target", "")
                }

                //TOOLS & PUBLICATIONS - ACCORDIONS
                $(".tools_list .w-100").addClass("collapse");
                $(".tools_list .tool_category").each(function(){
                    $(this).attr("data-toggle", "collapse");
                    $(this).attr("aria-expanded", "false");
                });

                //TUTORIAL STICKY BAR
                if(pathname == "/acessibilidade/tutorial.php" || pathname == "/acessibilidade/tutorial_pag2.php"){
                    $("#index_tutorial").addClass("sticky-top");
                    $("#index_sticky").removeClass("sticky-top");
                }
                if(pathname == "/acessibilidade/tutorial_full.php"){
                    $("#index_tutorial_full").addClass("sticky-top");
                    $("#index_sticky").removeClass("sticky-top");
                }
                //SEARCH - FILTERS
                if(pathname == "/acessibilidade/search.php"){
                    $("#filters").addClass("sticky-top");
                }
            }else{
                /*if(width > 1514){
                    var margin = (width-1336-(2*89))/2;
                    $(".top-bar-left").css({"margin-left" : margin +"px"});
                    $(".top-bar-right").css({"margin-right" : margin +"px"});
                }*/

                //TUTORIAL STICKY BAR
                if(pathname == "/acessibilidade/tutorial.php" || pathname == "/acessibilidade/tutorial_pag2.php"){
                    $("#index_tutorial").removeClass("sticky-top");
                    $("#index_sticky").addClass("sticky-top");
                }
                if(pathname == "/acessibilidade/tutorial_full.php"){
                    $("#index_tutorial_full").removeClass("sticky-top");
                    $("#index_sticky").addClass("sticky-top");
                }
                //SEARCH - FILTERS
                if(pathname == "/acessibilidade/search.php"){
                    $("#filters").removeClass("sticky-top");
                }
            
                //Pre-footer
                $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                    $(this).attr("data-toggle", "");
                    $(this).attr("aria-expanded", "");
                });

                //Experience Menu homepage
                $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                    $(this).attr("data-toggle", "");
                    $(this).attr("aria-expanded", "");
                });
                $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                $("#experience_menu #experience_menu_title").attr("data-target", "");
                $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                    e.preventDefault();
                 });

                //TOOLS & PUBLICATIONS 
                $(".tools_list .w-100").removeClass("collapse");
                $(".tools_list .tool_category").each(function(){
                    $(this).attr("data-toggle", "");
                    $(this).attr("aria-expanded", "");
                });
            }

            $(window).on("resize", function(){
                var width = window.innerWidth;
                if(width < 992){
                    //Pre-footer
                    $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                        $(this).attr("data-toggle", "collapse");
                        $(this).attr("aria-expanded", "false");
                    });
                    $('#pre_footer div[data-toggle="collapse"] a').click(function (e) {
                        e.preventDefault();
                     });

                    //Experience Menu - HEADER
                    $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                        $(this).attr("data-toggle", "collapse");
                        $(this).attr("aria-expanded", "false");
                    });
                    
                    $('#experience_menu div[data-toggle="collapse"] a').click(function (e) {
                        e.preventDefault();
                    });

                    if(width < 767){
                        $("#experience_menu_desc").addClass("collapse");
                        $("#experience_menu #experience_menu_title").attr("data-toggle", "collapse");
                        $("#experience_menu #experience_menu_title").attr("data-target", "#experience_menu_desc");
                        
                    }
                    else{
                        $("#experience_menu_desc").removeClass("collapse");
                        $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                        $("#experience_menu #experience_menu_title").attr("data-target", "")
                    }
                    
                    //TOOLS & PUBLICATIONS - ACCORDIONS
                    $(".tools_list .w-100").addClass("collapse");
                    $(".tools_list .tool_category").each(function(){
                        $(this).attr("data-toggle", "collapse");
                        $(this).attr("aria-expanded", "false");
                    });


                    //TUTORIAL STICKY BAR
                    if(pathname == "/acessibilidade/tutorial.php" || pathname == "/acessibilidade/tutorial_pag2.php"){
                        $("#index_tutorial").addClass("sticky-top");
                        $("#index_sticky").removeClass("sticky-top");
                    }
                    if(pathname == "/acessibilidade/tutorial_full.php"){
                        $("#index_tutorial_full").addClass("sticky-top");
                        $("#index_sticky").removeClass("sticky-top");
                    }
                    //SEARCH - FILTERS
                    if(pathname == "/acessibilidade/search.php"){
                        $("#filters").addClass("sticky-top");
                    }
                }
                else{
                    /*if(width > 1514){
                        var margin = (width-1336-(2*89))/2;
                        $(".top-bar-left").css({"margin-left" : margin +"px"});
                        $(".top-bar-right").css({"margin-right" : margin +"px"});
                    }*/

                    //TUTORIAL STICKY BAR
                    if(pathname == "/acessibilidade/tutorial.php" || pathname == "/acessibilidade/tutorial_pag2.php"){
                        $("#index_tutorial").removeClass("sticky-top");
                        $("#index_sticky").addClass("sticky-top");
                    }
                    if(pathname == "/acessibilidade/tutorial_full.php"){
                        $("#index_tutorial_full").removeClass("sticky-top");
                        $("#index_sticky").addClass("sticky-top");
                    }
                    //SEARCH - FILTERS
                    if(pathname == "/acessibilidade/search.php"){
                        $("#filters").removeClass("sticky-top");
                    }
                
                    //Pre-footer
                    $('#pre_footer .container .row .col-lg-4').children('.align-items-center').each(function () {
                        $(this).attr("data-toggle", "");
                        $(this).attr("aria-expanded", "");
                    });
                    $('#pre_footer div[data-toggle=""] a').click(function (e) {
                        window.location = this.href;
                     }); 

                    //Experience Menu homepage
                    $('#experience_menu .container #experience_links .col-12').children('.d-inline-flex').each(function () {
                        $(this).attr("data-toggle", "");
                        $(this).attr("aria-expanded", "");
                    });

                    $("#experience_menu #experience_menu_title").attr("data-toggle", "");
                    $("#experience_menu #experience_menu_title").attr("data-target", "")

                    //TOOLS & PUBLICATIONS 
                    $(".tools_list .w-100").removeClass("collapse");
                    $(".tools_list .tool_category").each(function(){
                        $(this).attr("data-toggle", "");
                        $(this).attr("aria-expanded", "");
                    });
                }
            });
        },

        //COOKEIS
        cookies:function(){
            $( ".btn_cookies" ).click(function() {
                $("#cookies_bar").css("display", "none")
            });
        },


        //EXPERIENCE MENU - OPEN/CLOSE
        experienceMenu:function(){            
            $("#btn_experience_menu" ).click(function(event) {
               /* event.preventDefault();
                var origin = window.location.origin;
                var state = $(this).attr("aria-expanded");
                if(state == "false"){
                    window.location.href = origin + "/acessibilidade/experience_menu.php";
                }
                else{
                    var oldURL = document.referrer;
                    console.log(oldURL);
                    if (oldURL.indexOf(origin) >= 0){
                        parent.history.back();  
                    }
                    else{
                        window.location.href = origin + "/acessibilidade/";
                    }
                    //parent.history.back();
                }*/
                $("#experience_menu").toggle();
                if($("#experience_menu").is(":visible")){
                    $("#btn_experience_menu").attr("aria-expanded","true");
                    $("#top-bar2").hide();
                    $("#navbar").hide();
                    $("main").children("section").each(function(){
                        $(this).hide();
                    });
                    $("#pre_footer").hide();
                    $(".footer").hide();
                    $("#cookies_bar").hide();
                    $("#jump_main").hide();

                    $("#top-bar2").attr("aria-hidden","true");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","true");
                    });
                    $("#pre_footer").attr("aria-hidden","true");
                    $(".footer").attr("aria-hidden","true");
                    $("#cookies_bar").attr("aria-hidden", "true");
                    $("#jump_main").attr("aria-hidden", "true");

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 180 +'deg)'});
                    //Disable scroll
                  $('body').css({
                        overflow: 'hidden',
                        height: '100%'
                    });
                }
                else{
                    $("#btn_experience_menu").attr("aria-expanded","false");
                    $("#top-bar2").show();
                    $("#navbar").show();
                    $("main").children("section").each(function(){
                        $(this).show();
                    });
                    $("#pre_footer").show();
                    $(".footer").show();
                    $("#cookies_bar").show();
                    $("#jump_main").show();

                    $("#top-bar2").attr("aria-hidden","false");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","false");
                    });
                    $("#pre_footer").attr("aria-hidden","false");
                    $(".footer").attr("aria-hidden","false");
                    $("#cookies_bar").attr("aria-hidden", "false");
                    $("#jump_main").attr("aria-hidden", "false");
                    

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 360 +'deg)'});
                    //Restore scroll
                    $('body').css({
                        overflow: 'auto',
                        height: 'auto'
                    }); 
                }
            });

           /* $(window).on('load resize', function() {
                $("#experience_menu").toggle();
                if($("#experience_menu").is(":visible")){
                    $("#btn_experience_menu").attr("aria-expanded","true");
                    $("#top-bar2").hide();
                    $("#navbar").hide();
                    $("main").children("section").each(function(){
                        $(this).hide();
                    });
                    $("#pre_footer").hide();
                    $(".footer").hide();
                    $("#cookies_bar").hide();
                    $("#jump_main").hide();

                    $("#top-bar2").attr("aria-hidden","true");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","true");
                    });
                    $("#pre_footer").attr("aria-hidden","true");
                    $(".footer").attr("aria-hidden","true");
                    $("#cookies_bar").attr("aria-hidden", "true");
                    $("#jump_main").attr("aria-hidden", "true");

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 180 +'deg)', 'margin-right' : '4px'});
                    //Disable scroll
                  $('body').css({
                        overflow: 'hidden',
                        height: '100%'
                    });
                }
                else{
                    $("#btn_experience_menu").attr("aria-expanded","false");
                    $("#top-bar2").show();
                    $("#navbar").show();
                    $("main").children("section").each(function(){
                        $(this).show();
                    });
                    $("#pre_footer").show();
                    $(".footer").show();
                    $("#cookies_bar").show();
                    $("#jump_main").show();

                    $("#top-bar2").attr("aria-hidden","false");
                    $("main").children("section").each(function(){
                        $(this).attr("aria-hidden","false");
                    });
                    $("#pre_footer").attr("aria-hidden","false");
                    $(".footer").attr("aria-hidden","false");
                    $("#cookies_bar").attr("aria-hidden", "false");
                    $("#jump_main").attr("aria-hidden", "false");
                    

                    $("#btn_experience_menu .icon-arrow-drop").css({'transform' : 'rotate('+ 360 +'deg)'});
                    //Restore scroll
                    $('body').css({
                        overflow: 'auto',
                        height: 'auto'
                    }); 
                }
            });*/
        },


        //OPEN SMALL MENU
        smallMenu:function(){
            $("#open_small_menu").click(function() {
                $("#small_menu").show();
                $("#open_small_menu").attr("aria-expanded", "true");
                $("#close_small_menu").attr("aria-expanded", "true");
                $("#top-bar2").css({'display':'none'});
                $("#top-bar").css({'display':'none'});
                $("main").children("section").each(function(){
                    $(this).hide();
                });
                $("#pre_footer").hide();
                $(".footer").hide();
                $("#cookies_bar").hide();
                $("#jump_main").hide();

                $("#top-bar2").attr("aria-hidden","true");
                $("#top-bar").attr("aria-hidden","true");
                $("main").children("section").each(function(){
                    $(this).attr("aria-hidden","true");
                });
                $("#pre_footer").attr("aria-hidden","true");
                $(".footer").attr("aria-hidden","true");
                $("#cookies_bar").attr("aria-hidden", "true");
                $("#jump_main").attr("aria-hidden", "true");
            });

            //CLOSE SMALL MENU
            $("#close_small_menu").click(function() {
                $("#small_menu").hide();
                $("#open_small_menu").attr("aria-expanded", "false");
                $("#close_small_menu").attr("aria-expanded", "false");
                $("#top-bar2").css({'display':'block'});
                $("#top-bar").css({'display':'block'});
                $("main").children("section").each(function(){
                    $(this).show();
                });
                $("#pre_footer").show();
                $(".footer").show();
                $("#cookies_bar").show();
                $("#jump_main").show();

                $("#top-bar2").attr("aria-hidden","false");
                $("#top-bar").attr("aria-hidden","false");
                $("main").children("section").each(function(){
                    $(this).attr("aria-hidden","false");
                });
                $("#pre_footer").attr("aria-hidden","false");
                $(".footer").attr("aria-hidden","false");
                $("#cookies_bar").attr("aria-hidden", "false");
                $("#jump_main").attr("aria-hidden", "false");
            });
        },        


        //SHARE ICONS -> SWAP ICONS
        shareIcons:function(){
            //FACEBOOK
            $("#fb_icon").mouseover(function(){
                $(this).removeClass("icon-share-facebook");
                $(this).addClass("icon-share-facebook-over");
            });
            $("#fb_icon").mouseout(function(){
                $(this).removeClass("icon-share-facebook-over");
                $(this).addClass("icon-share-facebook");
            });
            //TWITTER
            $("#tw_icon").mouseover(function(){
                $(this).removeClass("icon-share-twitter");
                $(this).addClass("icon-share-twitter-over");
            });
            $("#tw_icon").mouseout(function(){
                $(this).removeClass("icon-share-twitter-over");
                $(this).addClass("icon-share-twitter");
            });
            //LINKEDIN
            $("#ln_icon").mouseover(function(){
                $(this).removeClass("icon-share-linkedin");
                $(this).addClass("icon-share-linkedin-over");
            });
            $("#ln_icon").mouseout(function(){
                $(this).removeClass("icon-share-linkedin-over");
                $(this).addClass("icon-share-linkedin");
            });
        },


        //SEARCH -> OPEN/CLOSE FILTER
        searchFilterMenu:function(){
            /*$("#btn_open_filter").click(function(){
                $("#menu-filters").toggle();
                if($("#menu-filters").is(":visible")){
                    $("#btn_index_small").removeClass("icon-content-menu-down");
                    $("#btn_index_small").addClass("icon-content-menu-up");
                }
                else{
                    $("#btn_index_small").removeClass("icon-content-menu-up");
                    $("#btn_index_small").addClass("icon-content-menu-down");
                }
            });*/

            $(".top-filter").click(function(){
                $("#menu-filters").toggle();
                if($("#menu-filters").is(":visible")){
                    $("#icon_menu_search").removeClass("icon-content-menu-down");
                    $("#icon_menu_search").addClass("icon-content-menu-up");
                }
                else{
                    $("#icon_menu_search").removeClass("icon-content-menu-up");
                    $("#icon_menu_search").addClass("icon-content-menu-down");
                }
            })
        },

        //TUTORIAL -> OPEN/CLOSE INDEX
        tutorialIndex:function(){
            //LARGE
            /*$("#btn_close_index").click(function(){
                //PER PAGE
                if($("#index_tutorial").length > 0){
                    $("#index_tutorial").hide();
                }
                if($("#tutorial-text").length > 0){
                    $("#tutorial-text").css("max-width", "100%");
                }
                //COMPLETE
                if($("#index_tutorial_full").length > 0){
                    $("#index_tutorial_full").hide();
                }
                if($(".tutorial-text").length > 0){
                    $(".tutorial-text").css("max-width", "100%");
                }
                $("#index_closed").show();
                
            });
            $("#btn_open_index").click(function(){
                //PER PAGE
                if($("#index_tutorial").length > 0){
                    $("#index_tutorial").show();
                }
                if($("#tutorial-text").length > 0){
                    $("#tutorial-text").css("max-width", "838px");
                }

                //COMPLETE
                if($("#index_tutorial_full").length > 0){
                    $("#index_tutorial_full").show();
                }
                if($(".tutorial-text").length > 0){
                    $(".tutorial-text").css("max-width", "838px");
                }

                $("#index_closed").hide();
            });


            //SMALL
            $("#btn_index_small").click(function(){
                $("#index_pages").toggle();
                if($("#index_pages").is(":visible")){
                    $("#btn_index_small").removeClass("icon-content-menu-down");
                    $("#btn_index_small").addClass("icon-content-menu-up");
                }
                else{
                    $("#btn_index_small").removeClass("icon-content-menu-up");
                    $("#btn_index_small").addClass("icon-content-menu-down");
                }
            });*/

            var w = window.innerWidth;
            if(w < 992){
                $("#btn_index").attr("aria-expanded", "false");
            }

            $(window).resize(function() {
                var w = window.innerWidth;
                if(w < 992){
                    $("#btn_index").attr("aria-expanded", "false");
                }
                else{
                    $("#btn_index").attr("aria-expanded", "true");
                }
            });

            $("#btn_index").click(function(){
                var w = window.innerWidth;
                var flag = $(this).attr("aria-expanded");
                if(flag == "true"){
                    if(w > 991){
                        $(this).attr("aria-expanded", "false");
                        $(this).children("h2").addClass("sr-only");
                        $("#icon_menu_index").removeClass("icon-content-menu-left");
                        $("#icon_menu_index").addClass("icon-content-menu-right");
                        //$("#index_pages").css({'display': 'none !important'});
                        $("#index_pages").removeClass('d-lg-block');
                        $("#index_pages").addClass('d-none');
                        if($('#index_tutorial').length ){
                            $("#index_tutorial").removeClass("index");
                            $("#index_tutorial").addClass("index-closed");
                        }
                        if($('#index_tutorial_full').length ){
                            $("#index_tutorial_full").removeClass("index");
                            $("#index_tutorial_full").addClass("index-closed");
                        }
                        $("#index_sticky").removeClass("sticky-top");
                        $(this).css({"padding": "0 !important", "justify-content": "center"});
                    }
                    else{
                        $(this).attr("aria-expanded", "false");
                        $("#btn_index_small").removeClass("icon-content-menu-up");
                        $("#btn_index_small").addClass("icon-content-menu-down");
                        $("#index_pages").hide();
                    }
                   
                }
                else{
                    if(w > 991){
                        $(this).attr("aria-expanded", "true");
                        $(this).children("h2").removeClass("sr-only");
                        $("#icon_menu_index").removeClass("icon-content-menu-right");
                        $("#icon_menu_index").addClass("icon-content-menu-left");
                        //$("#index_pages").css({'display': 'none !important'});
                        $("#index_pages").removeClass('d-none');
                        $("#index_pages").addClass('d-lg-block');
                        if($('#index_tutorial').length ){
                            $("#index_tutorial").removeClass("index-closed");
                            $("#index_tutorial").addClass("index");
                        }
                        if($('#index_tutorial_full').length ){
                            $("#index_tutorial_full").removeClass("index-closed");
                            $("#index_tutorial_full").addClass("index");
                        }
                        $("#index_sticky").addClass("sticky-top");
                        
                        $(this).css({"padding": "0px 20px 0px 25px !important", "justify-content": "space-between"});
                    }
                    else{
                        $(this).attr("aria-expanded", "true");
                        $("#btn_index_small").removeClass("icon-content-menu-down");
                        $("#btn_index_small").addClass("icon-content-menu-up");
                        $("#index_pages").show();
                    }
                    
                }
            });
        },

        //TUTORAIL PAGES - OPEN/CLOSE TOPICS
        tutorialPages:function(){
            $(".page .top .page-title").click(function(){
                $(this).closest('.page').find(".topics").toggle();
                if( $(this).closest('.page').find(".topics").is(":visible") ){
                    $(this).closest('.page').find(".top .page-title .icon-arrow-drop").css({'transform' : 'rotate('+ 180 +'deg)'});
                    $(this).closest('.page').find(".border-pages").hide();
                    $(this).attr("aria-expanded", "true");
                }
                else{
                    $(this).closest('.page').find(".top .page-title .icon-arrow-drop").css({'transform' : 'rotate('+ 360 +'deg)'});
                    $(this).closest('.page').find(".border-pages").show();
                    $(this).attr("aria-expanded", "false");
                }
            });
        },

        
        //HIGHLIGHT CURRENT TOPIC - TUTORIAL (PER PAGE)
        highlightTopic:function(){
            var stopScroll = false;
            $(".topic").on('click', 'a[href^="#"]', function (event){
                event.preventDefault();
                stopScroll = true;
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                $(".topic-active").attr("aria-current","false");
                $(".topic-active").removeClass("topic-active");
                $(this).closest("li").addClass("topic-active");
                $(this).closest("li").attr("aria-current","true");
                setTimeout(() => {
                    stopScroll = false;
                }, 501);

            });


            // Get all topics
            var lastId,
            pageTopics = $(".page-active"),
            pageTopicsHeight = pageTopics.outerHeight(),
            // List with all topics
            menuItems = pageTopics.find("a"),
            scrollItems = menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

            $(window).scroll(function(){
                if(stopScroll){
                    return;
                }
                
                if($(this).scrollTop()>=$('#tutorial').position().top){
                    // Get container scroll position
                    var fromTop = $(this).scrollTop()+pageTopicsHeight;
                    // Get id of current scroll item
                    var cur = scrollItems.map(function(){
                    if ($(this).offset().top < fromTop)
                        return this;
                    });
                    // Get the id of the current element
                    cur = cur[cur.length-1];
                    var id = cur && cur.length ? cur[0].id : "";

                    if (lastId !== id) {
                        lastId = id;
                        // ADD/REMOVE CLASSES
                        if(id != ''){
                            menuItems
                                .closest('li').attr("aria-current","false")
                                .closest('li').removeClass("topic-active")
                                $("[href='#"+id+"']")
                                .closest('li').addClass("topic-active")
                                .closest('li').attr("aria-current","true");
                        }
                    }
                                    
                }
            });
        },

        //CHANGE ACTIVE PAGE -> FULL TUTORIAL
        changeActivePage:function(){
            var stopScroll = false;
            //CLICK
            $(".topic").on('click', 'a[href^="#"]', function (event){
                event.preventDefault();
                stopScroll = true;
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                $(".topic-active").removeClass("topic-active");
                $(this).closest("div").addClass("topic-active");
                if($(this).closest('.topics').parent().attr("class") == "page"){
                    $(".page-active").attr("aria-current","false");
                    $(".page-active").removeClass("page-active");
                    $(this).closest('.topics').parent().addClass("page-active");
                    $(this).closest('.topics').parent().attr("aria-current","true");
                }

                setTimeout(() => {
                    stopScroll = false;
                }, 501);

            });

            //SCROLL
            // Get all topics
            var lastId,
            pageTopics = $("#index_pages"),
            pageTopicsHeight = pageTopics.outerHeight(),
            // List with all topics
            menuItems = pageTopics.find("a"),
            scrollItems = menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

            $(window).scroll(function(){

                if(stopScroll){
                    return;
                }

                if($(this).scrollTop()>=$('#tutorial').position().top){
                    // Get container scroll position
                    var fromTop = $(this).scrollTop()+pageTopicsHeight;
                    // Get id of current scroll item
                    var cur = scrollItems.map(function(){
                    if ($(this).offset().top < fromTop)
                        return this;
                    });
                    // Get the id of the current element
                    cur = cur[cur.length-1];
                    var id = cur && cur.length ? cur[0].id : "";

                    if (lastId !== id) {
                        lastId = id;
                        // ADD/REMOVE CLASSES
                        if(id != ''){
                            menuItems
                                .closest('li').removeClass("topic-active")
                            $("[href='#"+id+"']")
                                .closest('li').addClass("topic-active");
                            if($("[href='#"+id+"']").closest(".topics").parent().attr("class") == "page"){
                                $(".page.page-active").attr("aria-current","false");
                                $(".page.page-active").removeClass("page-active");
                                $("[href='#"+id+"']").closest(".topics").parent().addClass("page-active");
                                $("[href='#"+id+"']").closest(".topics").parent().attr("aria-current","true");
                                $("[href='#"+id+"']").closest(".topics").show();
                            }
                        }
                            
                    }                   
                }
            });

        },

        //SLICK - NEWS
        initSlick:function(){
            //$(".slick-list").insertBefore(".slick-dots");

            if ( $( ".slider" ).length ) {
              $slick_slider = $('.slider');
              settings_slider = {
                dots: true,
                arrows: false
                // more settings
              }
              slick_on_mobile( $slick_slider, settings_slider);
              // slick on mobile
                function slick_on_mobile(slider, settings){
                 //First
                 if ($(window).width() > 992) {
                    if (slider.hasClass('slick-initialized')) {
                      slider.slick('unslick');
                    }
                    return
                  }
                  if (!slider.hasClass('slick-initialized')) {
                    setTimeout(function(){
                      var maxHeight = 0;
                          $(".content-box").each(function(){
                          if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
                          });
                          
                          $(".content-box").height(maxHeight);

                      }, 10);
                    return slider.slick(settings);
                  }
                }
              };
        },

        //SLICK - RESIZE
        initSlickResize:function(){
            if ( $( ".slider" ).length ) {
                $slick_slider = $('.slider');
                settings_slider = {
                  dots: true,
                  arrows: false
                  // more settings
                }
                slick_on_mobile( $slick_slider, settings_slider);
                // slick on mobile
                  function slick_on_mobile(slider, settings){
                    $(window).on('load resize', function() {
                      if ($(window).width() > 992) {
                        if (slider.hasClass('slick-initialized')) {
                          slider.slick('unslick');
                        }
                        return
                      }
                      if (!slider.hasClass('slick-initialized')) {
                        return slider.slick(settings);
                      }
                    });
                };
            }
        },


         //SLICK - INFOS
         initSlickInfos:function(){
            if ( $( ".slider-infos" ).length ) {
              $slick_slider = $('.slider-infos');
              settings_slider = {
                dots: true,
                arrows: false,
                
                // more settings
              }
              slick_on_mobile( $slick_slider, settings_slider);
                // slick
                function slick_on_mobile(slider, settings){
                    setTimeout(function(){
                      var maxHeight = 0;
                          $(".content-box").each(function(){
                          if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
                          });
                          
                          $(".content-box").height(maxHeight);
                      }, 10);
                    return slider.slick(settings);
              };
          }
  
        },

        //CONTACT FORM SUBMIT
        contactSubmit:function(){
            //REMOVE BORDER RED AND HIDE ERROR MESSAGE on FOCUS
           /* $("#email").focus(function() {
                if($("#email_required").is(":visible")){
                    $("#email").parent().css("border", "2px solid #333399"); 
                    $("#email_required").css("visibility", "hidden");
                 }
            });
            $("#message").focus(function() {
                if($("#message_required").is(":visible")){
                   $("#message").css("border", "2px solid #333399"); 
                   $("#message_required").css("visibility", "hidden");
                }
            });
            $("#name").focus(function() {
                if($("#name_required").is(":visible")){
                   $("#name").parent().css("border", "2px solid #333399"); 
                   $("#name_required").css("visibility", "hidden");
                }
            });*/
            //CHECK EMPTY FIELDS on FOCUS OUT
            $("#email").focusout(function() {
                if($("#email").val().length == 0){
                    $("#email").parent().css("border", "2px solid #d10000"); 
                    $("#email_required").css("visibility", "visible");
                    $("#email_required").text("Campo de preenchimento obrigatório.");
                 }
                 else{
                    var email = $("#email").val();
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!email.match(re)){
                        $("#email_required").text("Formato de email inválido.");
                    }
                    else{
                         if($("#email_required").is(":visible")){
                            $("#email").parent().css("border", "2px solid #333399"); 
                            $("#email_required").css("visibility", "hidden");
                        }
                    }
                   
                 }
            });
            $("#message").focusout(function() {
                if($("#message").val().length == 0){
                   $("#message").css("border", "2px solid #d10000"); 
                   $("#message_required").css("visibility", "visible");
                } 
                else{
                    if($("#message_required").is(":visible")){
                        $("#message").css("border", "2px solid #333399"); 
                        $("#message_required").css("visibility", "hidden");
                     } 
                }
            });
            $("#name").focusout(function() {
                if($("#name").val().length == 0){
                    $("#name").parent().css("border", "2px solid #d10000"); 
                    $("#name_required").css("visibility", "visible");
                }
                else{
                    if($("#name_required").is(":visible")){
                        $("#name").parent().css("border", "2px solid #333399"); 
                        $("#name_required").css("visibility", "hidden");
                     } 
                }
            });

            //SUBMIT FORM
            $(document).on("submit", "#contact_form", function(event){
                event.preventDefault();
                var email = $("#email").val();
                var name = $("#name").val();
                var message = $("#message").val();
                var flag = 0;

                //CHECK EMPTY FIELDS
                if(name.length == 0){
                    $("#name_required").css("visibility", "visible");
                    $("#name").parent().css("border", "2px solid #d10000");
                    flag++;
                }

                if(email.length == 0){
                    $("#email_required").css("visibility", "visible")
                    $("#email").parent().css("border", "2px solid #d10000");
                    flag++;
                }
                if(message.length == 0){
                    $("#message_required").css("visibility", "visible")
                    $("#message").css("border", "2px solid #d10000");
                    flag++;
                }

                if(flag == 0){
                    $("#email").val("");
                    $("#name").val("");
                    $("#message").val("");
                    //SHOW MESSAGE
                    window.scrollTo({top: 0, behavior: 'smooth'});
                    if(message == "Erro"){
                        $("#error_message").show();
                        setTimeout(function(){ 
                            if($("#error_message").is(":visible")){
                                $("#error_message").hide();
                            }
                        }, 5000);
                    }
                    else{
                        $("#success_message").show();
                        setTimeout(function(){ 
                            if($("#success_message").is(":visible")){
                                $("#success_message").hide();
                            }
                        }, 5000);
                    }
                }

                $(".close").click(function(){
                    if($("#error_message").is(":visible")){
                        $("#error_message").hide();
                    }
                    else{
                        $("#success_message").hide();
                    }
                })
            })
        },

        //SEARCH SUBMIT
        searchSubmit:function(){
            var origin   = window.location.origin;
            $(document).on("submit", "#search_form", function(event){
                event.preventDefault();
                var search = $("#search").val();
                if(search.length != 0){
                    window.location.replace(origin + "/acessibilidade/search.php");
                }
                else{
                    window.location.replace(origin + "/acessibilidade/404.php");
                }
            });

            $(document).on("submit", "#search_form_small", function(event){
                event.preventDefault();
                var search = $("#search_small").val();
                if(search.length != 0){
                    window.location.replace(origin + "/acessibilidade/search.php");
                }
                else{
                    window.location.replace(origin + "/acessibilidade/404.php");
                }
            });

            $(document).on("submit", "#search_form_page", function(event){
                event.preventDefault();
                var search = $("#search_input_page").val();
                if(search.length != 0){
                    window.location.replace(origin + "/acessibilidade/search.php");
                }
                else{
                    window.location.replace(origin + "/acessibilidade/404.php");
                }
            });

        },

        //CHANGE BETWEEN "FULL" AND "PER PAGE" => TUTORIAL
        changeTutorialView:function(){
            $(".btn_tutorial").click(function(){
                var origin   = window.location.origin;
                var tutorial_id = $(this).attr("id");
                var action = $(this).attr("data-action");
                if(action == "full"){
                    window.location.replace(origin + "/acessibilidade/tutorial_full.php");
                }
                else{
                    window.location.replace(origin + "/acessibilidade/tutorial.php");
                }
            });

            $(".view_per_page").click(function(){
                var origin   = window.location.origin;
                var tutorial = $(this).attr("data-tutorial");
                var page = $(this).attr("data-page");
                window.location.replace(origin + "/acessibilidade/tutorial.php");
            })
        },

        //BACK TO HOMEPAGE => 404
        backHomePage:function(){
            var origin   = window.location.origin;
            $("#back_home").click(function(){
                window.location.replace(origin + "/acessibilidade/index.php");
            })
        },


        //ACCESS MONITOR SUBMIT
        accessMonitorSend: function(){
            $(document).on("submit", "#access_monitor_form", function(event){
                event.preventDefault();
                var url = $("#url").val();
                if(url != '' && url.indexOf("www.") >= 0){
                     //url = url.replace("www.", "");
                     window.open('http://accessmonitor.acessibilidade.gov.pt/amp/results/' + url, '_blank');
                }
            });
        },

        //SHARING ON SOCIAL MEDIA
        socialSharing:function(){
            //FACEBOOK
            $("#fb_icon").click(function(e){
                e.preventDefault();
                var local = window.location.href;
                var url = "https://www.facebook.com/sharer/sharer.php?u="+local;
                window.open(url, '_blank');
            });
            //TWITTER
            $("#tw_icon").click(function(e){
                e.preventDefault();
                var local = window.location.href;
                var url = "https://twitter.com/intent/tweet?url="+local;
                window.open(url, '_blank');
            });
            //LINKEDIN
            $("#ln_icon").click(function(e){
                e.preventDefault();
                var local = window.location.href;
                var url = "https://www.linkedin.com/shareArticle?mini=true&url="+local;
                window.open(url, '_blank');
            });
        },

    }

})