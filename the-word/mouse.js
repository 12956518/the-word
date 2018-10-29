//  html setup
var itemsHTMLColletion  = document.getElementsByClassName('parallax-item');
var itemsArray = Array.from(itemsHTMLColletion);

//  input setup
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
 mouseY:  {
    start: 0,
    end: window.innerHeight,
    current: 0,
 }
};
input.mouseX.range  = input.mouseX.end  - input.mouseX.start;
input.mouseY.range  = input.mouseY.end  - input.mouseY.start;

//  output setup
var output  = {
  x:  {
    start:  -800,
    end:  400,
    current: 0,
  },
  y:  {
    start:  200,
    end:  -900,
    current: 0,
  },
};

//  output x range
output.x.range  = output.x.end  - output.x.start;

//  output y range
output.y.range  = output.y.end  - output.y.start;

var handleMouseMove = function (event)  {
  //  mouse x input
  input.mouseX.current  = event.clientX;
  input.mouseX.fraction = (input.mouseX.current  - input.mouseX.start) / input.mouseX.range;
  
  //  mouse y input
  input.mouseY.current  = event.clientY;
  input.mouseY.fraction = (input.mouseY.current  - input.mouseY.start) / input.mouseY.range;

  //  output x
  output.x.current  = output.x.start +  (input.mouseX.fraction  * output.x.range);
  
  //  output y
  output.y.current  = output.y.start + (input.mouseY.fraction  * output.y.range);
  

  //  apply output to html
itemsArray.forEach(function (item, k)  {
  var depth = parseFloat(item.dataset.depth, 10);
  var itemOutput  = {
    x:  output.x.current  - (output.x.current * depth),
    y:  output.y.current  - (output.y.current * depth),
    zIndex: 10000 - (10000 * depth)
  };
  console.log(k,  'depth',  depth)
  item.style.zIndex = itemOutput.zIndex;
  item.style.transform = 'translate('+itemOutput.x+'px, '+itemOutput.y+'px)';
});
 
  // console.log('output.x.current', output.x.current);
  // console.log('fraction Y', input.mouseY.fraction);
}

var handleResize  = function  ()  {
  input.mouseX.end  = window.innerWidth;
  input.mouseX.range  = input.mouseX.end  - input.mouseX.start;
  
  input.mouseY.end  = window.innerHeight;
  input.mouseY.range  = input.mouseY.end  - input.mouseY.start; 
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)

// When the user scrolls down 620px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}