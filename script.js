  var mainDiv = document.getElementById('mainDiv'),
      cover = document.getElementById('climb');

  mainDiv.onmouseover = function (event) {

      var mainDiv = document.getElementById('mainDiv'),
          x0 = mainDiv.getBoundingClientRect().left,
          x1 = mainDiv.getBoundingClientRect().right,
          y0 = mainDiv.getBoundingClientRect().top,
          y1 = mainDiv.getBoundingClientRect().bottom;
      var coorX = event.pageX;
      var coorY = event.pageY;


      if (coorX > x0 && coorX < (x0 + 20) && coorY > y0 && coorY < y1) {
          console.log("left");
          cover.classList.add("left");
          mainDiv.onmouseover = null;

      };
      if (coorX < x1 && coorX > (x1 - 20) && coorY > y0 && coorY < y1) {
          console.log("right");
          cover.classList.add("right");
          mainDiv.onmouseover = null;
      };
      if (coorX > x0 && coorX < x1 && coorY > y0 && coorY < (y0 + 20)) {
          console.log("top");
          cover.classList.add("top");
          mainDiv.onmouseover = null;
      };
      if (coorX > x0 && coorX < x1 && coorY < y1 && coorY > (y1 - 20)) {
          console.log("bottom");
          cover.classList.add("bottom");
          mainDiv.onmouseover = null;
      };


  }
