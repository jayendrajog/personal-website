window.onload = function(){
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
        labels: ["C++", "Java", "JavaScript", "jQuery", "PHP", "HTML", "CSS", "MySQL", "Swift"],
        datasets: [
            {
                label: "Skills",
                fillColor: "rgba(220, 220, 220, .3)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8,7,7,6,6,10,10,6,6,]
            }
        ]
    };
    var options = {
        angleLineColor : "white",
        pointLabelFontSize : 15,
        pointLabelFontColor : "white",
        scaleLineColor : "white",
        responsive: true
    };
    var theChart = new Chart(ctx).Radar(data, options);
};

$(function(){
        $(".element").typed({
            strings: ["\"There are 10 types of people in the world...^500 those who understand binary and those who don't\""],
            typeSpeed: 1
        });
    });

$('#toExp').on('click', function(){
    $("html body").animate({"scrollTop":$('#exp').offset().top}, 500);
    return false;
});