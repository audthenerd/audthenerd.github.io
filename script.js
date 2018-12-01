//***********************************************
//***********************************************
//ARROW SCROLL DOWN
//***********************************************
//***********************************************
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 160) {
   $('span#details').fadeOut('slow');
  } else {
    $('span#details').fadeIn('slow');
  }
});

//***********************************************
//***********************************************
//FONT TYPING ANIMATION FOR CAPTION HEADER
//***********************************************
//***********************************************
 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('caption');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    };

    // Get the modal
var mod = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn = document.getElementsByClassName("btn");
// var btn1 = document.getElementById("reasy-link");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (let i=0; i<span.length; i++){
    btn[i].onclick = function() {
        mod[i].style.display = "block";
    }

// When the user clicks on <span> (x), close the modal

    span[i].onclick = function() {
        mod[i].style.display = "none";

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById('myModal-travela');
        var modal1 = document.getElementById('myModal-reasy');
        var modal2 = document.getElementById('myModal-deft');
        var modal3 = document.getElementById('myModal-scrabble');
        if (event.target == modal || event.target == modal1 || event.target == modal2 || event.target == modal3) {
           modal.style.display = "none";
           modal1.style.display = "none";
           modal2.style.display = "none";
           modal3.style.display = "none";
        }
    }
}


}
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".caption > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



