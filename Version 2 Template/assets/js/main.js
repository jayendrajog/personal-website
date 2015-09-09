
$(function(){
        $(".element").typed({
            strings: ["\"There are 10 types of people in the world...^500 those who understand binary and those who don't\""],
            typeSpeed: 1
        });
    });

$('#toExp').on('click', function(){
    $("html body").animate({"scrollTop":$('#theTop').offset().top}, 500);
});

$(document).ready(function() {

    $('#toExp').hide().delay(5000).fadeIn(1000);
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
  
        limit: 3,
        
        effect: 'slideFastSynced',
        
        layoutTemplate: "<div class='item'>{entries}</div>",

        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    GitHubActivity.feed({ username: "jayendrajog", selector: "#ghfeed" });


});
