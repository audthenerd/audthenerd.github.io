//***********************************************
//***********************************************
//ARROW SCROLL DOWN
//***********************************************
//***********************************************
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 160) {
   $('span#details').fadeOut();
  } else {
    $('span#details').fadeIn();
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

    var travela = document.getElementsByClassName('travela-link')[0];
    var msgTravela = document.getElementsByClassName('msg')[0];
    msgTravela.style.display = "none";

        function popup() {
            console.log(this);
            if(msgTravela.style.display == "none") {
                msgTravela.style.display = "block";
            } else {
                msgTravela.style.display = "none";
            }
        };
    travela.addEventListener('click', popup);
}
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".caption > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};





