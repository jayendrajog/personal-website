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
    new Chart(ctx).Radar(data, options);
};

$(function(){
        $(".element").typed({
            strings: ["Hello World!", "My name is Jay", "I'm currently studying Computer Science at UCLA", "Jayendra Jog"],
            typeSpeed: 0
        });
    });