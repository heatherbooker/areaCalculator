//Constructor
var Shape = function(shapeType, dimension1, dimension2) {
    //****** Attributes ******//
    this.shape = shapeType;
    this.measurement1 = dimension1;
    this.measurement2 = dimension2;
}


var square = new Shape('Square');

$(document).ready(function() {

    $("#calc").click(function() {

        if (document.getElementById("circ").checked) {
            var shapeType = "circle";
        } else if (document.getElementById("squa").checked) {
            var shapeType = "square";
        } else if (document.getElementById("tria").checked) {
            var shapeType = "triangle";
        }

        var radius = $('#radius').val();
        var length = $('#length').val();
        var height = $('#height').val();

        if (shapeType === "circle") {
            var area = (Math.PI * radius * radius);
        } else if (shapeType === "square") {
            var area = (length * height);
        } else if (shapeType === "triangle") {
            var area = (length * height * 0.5);
        }
        alert('The area of your shape is' + ' ' + area + " " + 'cm.');
    });
});