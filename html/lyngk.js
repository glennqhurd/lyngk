var lyngkModule = (function() {
  my = {};

  my.startUp = drawBoard();

  function drawBoard() {
    var canvas = document.getElementById("lyngkboard");
    var context2D = canvas.getContext("2d");
    var vert_offset = 26;
    var hor_offset = 43;
    for (var row = 0; row < 12; row++) {
      for (var col = 0; col < 9; col++) {
        // coordinates of the top-left corner
        if ((row % 2 == 0) && (col % 2 == 0)) {
          if ((col < 8) && (row == 6)) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row - 1) * vert_offset) + 25);
            if ((col > 0) && (col < 8)) {
              drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col) * hor_offset) + 25, ((row + 2) * vert_offset) + 25);
            }
          }
          else if ((col != 6) && (col > 1) && (col < 7) && (row < 11)) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col) * hor_offset) + 25, ((row + 2) * vert_offset) + 25);
          }
        }
        if ((row == 3) || (row == 5) || (row == 7)) {
          if (col % 2 == 1) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col) * hor_offset) + 25, ((row + 2) * vert_offset) + 25);
            if (col < 7) {
              drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row - 1) * vert_offset) + 25);
              drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
            }
          }
        }
        if (row == 9) {
          if ((col % 2 == 1) && (col < 7)) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row - 1) * vert_offset) + 25);
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          }
        }
        if ((row % 2 == 1) && ((col == 3) || (col == 5))) {
          drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col - 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          if (row < 11) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col) * hor_offset) + 25, ((row + 2) * vert_offset) + 25);
          }
        }
        if ((row % 2 == 0) && ((col == 4) || (col == 6))) {
          drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col - 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col) * hor_offset) + 25, ((row + 2) * vert_offset) + 25);
          if ((row > 1) && (row < 10)) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          }
        }
        if ((col == 7) && (row > 1) && (row < 10) && (row % 2 == 1)) {
          drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col - 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          if (row == 5) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row + 1) * vert_offset) + 25);
          }
          if (row == 7) {
            drawLine((col * hor_offset) + 25, (row * vert_offset) + 25, ((col + 1) * hor_offset) + 25, ((row - 1) * vert_offset) + 25);
          }
        }
      }
    }
  }

  function drawLine(x1, y1, x2, y2) {
	  var c=document.getElementById("lyngkboard");
	  var ctx=c.getContext("2d");
	  ctx.beginPath();
	  ctx.moveTo(x1, y1);
	  ctx.lineTo(x2, y2);
	  ctx.stroke();
  }

  return my;
})();

window.onload = lyngkModule.startUp;