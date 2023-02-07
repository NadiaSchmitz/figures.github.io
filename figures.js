/* width, 
height, 
border-radius, 
background-color, 
border-top, 
border-bottom,
border-left,
border-right,
top,
bottom,
left, right
*/

function Figure(width, height, border_radius, background_color, border_top, 
    border_bottom, border_left, border_right, margin_top, margin_left) {
    this.width = width;
    this.height = height;
    this.border_radius = border_radius;
    this.background_color = background_color;
    this.border_top = border_top;
    this.border_bottom = border_bottom;
    this.border_left = border_left;
    this.border_right = border_right;
    this.margin_top = margin_top;
    this.margin_left = margin_left;
}

let figure_1 = new Figure(
    width = Math.round(Math.random() * 80 + 10),
    height = Math.round(Math.random() * 80 + 10),
    border_radius = Math.round(Math.random() * (width / 2)),
    background_color = "rgb(" + 
                        Math.round(Math.random() * 254) + "," + 
                        Math.round(Math.random() * 254) + "," + 
                        Math.round(Math.random() * 254) + ")",
    margin_top = 60 + "px",
    margin_left = Math.round($(".figures_screen").position().left) + Math.round(Math.random() * 60 + 10)
);

$(".figures_screen").append($("<div class=" + 1 + "></div>"));
$("." + 1).css("width", figure_1.width);
$("." + 1).css("height", figure_1.height);
$("." + 1).css("border-radius", figure_1.border_radius);
$("." + 1).css("background-color", figure_1.background_color);
$("." + 1).css("margin-top", figure_1.margin_left);
$("." + 1).css("margin-left", figure_1.margin_left);


$("#start").click(function() {
    $(".figures_screen div").remove();

    var figures_number = $("#figures_number").val();
    
    if($("#figures_number").val() < 0) {
        console.log("Error");
    } else {
        for(var i = 1; i <= figures_number; i++) {
            
        }
    }
})