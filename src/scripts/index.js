const $ = require("jquery");
const w = $(window).width();
const h = $(window).height();
//mapbox
window.onload = () => {
  let zoom = 18.00;
  if(w<480){
    zoom = 17.00;
  }else if(w<770){
    zoom = 17.00;
  }
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb2xub3YiLCJhIjoiY2ozZWVjM2FzMDAwbDJybXl6eHV0OWs3bSJ9.ShK2dwIXSx6PFnbZ6xIrog';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karolnov/cjtpp9dyc1ft21fpin7qs1gro',
    center: [19.938, 50.059],
    zoom: zoom
  });

  $('#map').on('click', ()=>{
    window.open('https://goo.gl/maps/eQtzd6aNnVs', '_blank');
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

