window.onload = function(){
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
        labels: ["C++", "Java", "JavaScript", "jQuery", "PHP", "HTML", "CSS", "MySQL", "Swift"],
        datasets: [
            {
                label: "Skills",
                fillColor: "rgba(50, 132, 191, .3)",
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
            strings: ["Student^1000", "Entrepreneur^1000", "Leader^1000", "Software Developer"],
            typeSpeed: 0
        });
    });