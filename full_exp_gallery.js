var galsize;
var galsettings = 6;
var preSize; var postSize;
var larged = false;
$('.row').children().click(function(e) {
  if (larged != true) {
      larged = true;
      $('.row').children().css('opacity', '0.8');
      setGallery(e);
  } else {
      setTimeout(function () {
          $('.row').children().css('margin-top', '');
          $('#uni_pic').css('display', 'none');
          larged = false;
      }, 200);
      $('#uni_pic').css('width', preSize);
      setTimeout(function () {
          setGallery(e);
          larged = true;
      }, 330);
  }
});
function setGallery(e) {
  $('.row').children().css('margin-top', '0')
  var hardLeft = false;
  var topper = e.target.parentNode.parentNode.children[0];
  var nextLs;
  topper.src = e.target.src;
  document.getElementById('uni_pic').src = e.target.src;
  var left = $(e.target).position().left;
  var rownum = e.target.parentNode.id.slice(-1);       
  if (rownum == '2' && galsettings == 2) {hardLeft = true;
  } else if (rownum == '3' && galsettings == 3) {hardLeft = true;
  } else if (rownum == '6' && galsettings == 6) {hardLeft = true;}
  if (hardLeft) {
      $(topper).css('right', 2);
      $('#uni_pic').css('right', 2);
      $(topper).css('left', '');
      $('#uni_pic').css('left', '');
  } else {
      $(topper).css('left', left);
      $('#uni_pic').css('left', left);
      $(topper).css('right', '');
      $('#uni_pic').css('right', '');
  }
  $('#uni_pic').css({'top': $(e.target).position().top,
  'display': '',
  'width': preSize});
  setTimeout(function () {
      $('#uni_pic').css({'width': postSize})
  }, 20);
  $(topper).css({'top': $(e.target).position().top,
  'display': '',
  'width': galsize});
  $(e.target).next().css('margin-top', (topper.clientHeight - e.target.clientHeight));
  if (hardLeft == false) {
      nextLs = $(e.target.parentNode.parentNode.children[parseInt(rownum)+1]);
  } else {nextLs = $(e.target.parentNode.parentNode.children[parseInt(rownum)-1]);}
  nextLs.children().each(function() {
      if ($(this).position().top == $(e.target).position().top) {
          $(this).css('margin-top', (topper.clientHeight + 4));
          return false;
      }
      var bot = ($(this).position().top + this.clientHeight);
      if (bot > $(topper).position().top && bot < $(topper).position().top + topper.clientHeight) {
          $(this.parentNode.children[0]).css('margin-top', -1 * (bot - $(topper).position().top + 4));
          $(this).next().css('margin-top', (topper.clientHeight + 4));
          return false;
      }
  });
}
$('.the-topper').click(function(e) {e.target.style.display = 'none'; 
  setTimeout(function () {
      $('.row').children().css('margin-top', '');
      $('#uni_pic').css('display', 'none');
      larged = false;
  }, 200);
  $('#uni_pic').css('width', preSize);
  $('.row').children().css('opacity', '1');
  });
$(window).resize(function(){
  $('.the-topper').css('display', 'none'); $('#uni_pic').css('display', 'none');
  galresize();
  larged = false;
});
galresize();
function galresize() {
  $('.row').children().css('margin-top', '')
  var pregal = galsettings;
  if ($(document).width() < 700) {
      galsize = 'calc(100% - 4px)';
      galsettings = 2;
      preSize = 'calc(100%/2 - 4px)'; postSize = 'calc(100% - 4px)';
  } else if ($(document).width() < 1100) {
      galsize = 'calc(100%/1.5 - 4px)';
      galsettings = 3;
      preSize = 'calc(100%/3 - 4px)'; postSize = 'calc(100%/1.5 - 4px)';
  } else {
      galsize = 'calc(100%/3 - 4px)';
      galsettings = 6;
      preSize = 'calc(100%/6 - 4px)'; postSize = 'calc(100%/3 - 4px)';
  }
  $('#uni_pic').css('width', preSize);
  if (pregal != galsettings) {
      if (galsettings == 6) {
          $('.container').each(function(x, obj) {
              $(obj).children().children().each(function() {
                  if (this.className == '1') {$(this).appendTo(obj.children[1]);
                  } else if (this.className == '2') {$(this).appendTo(obj.children[2]);
                  } else if (this.className == '3') {$(this).appendTo(obj.children[3]);
                  } else if (this.className == '4') {$(this).appendTo(obj.children[4]);
                  } else if (this.className == '5') {$(this).appendTo(obj.children[5]);
                  } else if (this.className == '6') {$(this).appendTo(obj.children[6]);}
              });
          });
      } else if (galsettings == 3) {
          $('.container').each(function(x, obj) {
              $(obj).children().children().each(function() {
                  if (this.className == '1') {$(this).appendTo(obj.children[1]);
                  } else if (this.className == '2') {$(this).appendTo(obj.children[2]);
                  } else if (this.className == '3') {$(this).appendTo(obj.children[3]);
                  } else if (this.className == '4') {$(this).appendTo(obj.children[1]);
                  } else if (this.className == '5') {$(this).appendTo(obj.children[2]);
                  } else if (this.className == '6') {$(this).appendTo(obj.children[3]);}
              });
          });
      } else if (galsettings == 2) {
          $('.container').each(function(x, obj) {
              $('.container').each(function(x, obj) {
                  $(obj).children().children().each(function() {
                      if (this.className == '1') {$(this).appendTo(obj.children[1]);
                      } else if (this.className == '2') {$(this).appendTo(obj.children[2]);
                      } else if (this.className == '3') {$(this).appendTo(obj.children[1]);
                      } else if (this.className == '4') {$(this).appendTo(obj.children[2]);
                      } else if (this.className == '5') {$(this).appendTo(obj.children[1]);
                      } else if (this.className == '6') {$(this).appendTo(obj.children[2]);}
                  });
              });
          });
      }
  }
}
