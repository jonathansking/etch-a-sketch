$(document).ready(function() { 
    createGrid();
    $("#create_grid").on("click", function() {
        createGrid();
    });
    
    $("#clear_grid").on("click", function() {
         $("td").css("background", "#eee");
    });
    
    function createGrid() {
        // check for previous grid; if so, delete it
        if($("table").length) {
            $("table").remove();
        }
        var grid = "<table>";        
        var gridSize = $("#grid_size").prop("value");
        for (var row = 0; row < gridSize; row++) {
            grid += "<tr>";
            for (var col = 0; col < gridSize; col++) {
                grid += "<td></td>";
            }
            grid += "</tr>";
        }
        grid += "</table>";
        $("#container").append(grid);
        draw();
    }
    
    function draw() {
        $("td").mouseenter(function() {
            var color = $("#color_selected").prop("value");
            if (color === "random") {
                color = getRandomColor();
            }
            $(this).css("opacity", "+=0.1");
            $(this).css("background", color);
        });
    }    
    
    // From stackoverflow
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});