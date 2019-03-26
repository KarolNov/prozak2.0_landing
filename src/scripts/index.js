const $ = require("jquery");
const Vivus = require("vivus");
const w = $(window).width();
const h = $(window).height();
//mapbox
window.onload = () => {
  new Vivus('svgMap', { duration: 200}, ()=>{
  });
  $('#svgMap').on('click', ()=>{
    window.open('https://goo.gl/maps/eQtzd6aNnVs', '_blank');
  })
  $('#glitchFb').on('click', ()=>{
    window.open('https://www.facebook.com/ProzakDwaZero/', '_blank');
  })
  $('#glitchIg').on('click', ()=>{
    window.open('https://www.instagram.com/prozakdwazero/', '_blank');
  })
}



var $logo = $('#transformLogo');

//if device has mouse
if (matchMedia('(pointer:fine)').matches) {
  $(window).on('mousemove', function (e) {
    var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      offsetPoster = $logo.data('offset'),
      transformPoster = 'rotateX(' + (-offsetY * offsetPoster * 2) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform
    //poster transform
    $logo.css('transform', transformPoster);
  });
} else {
  // $(window).on('deviceorientation', function (e) {
  //   let x = (e.originalEvent.beta) / 360;
  //   let y = e.originalEvent.gamma / 360;
  //   let z = e.originalEvent.alpha;
  //   let offsetPoster = $logo.data('offset');
  //   let transformPoster = `rotateY(${y * offsetPoster * 8}deg) rotateX(${-x * offsetPoster * 4}deg)`

  //   //poster transform
  //   $logo.css('transform', transformPoster);
  // });
}

